import './Articles.scss';

import React from "react";

import { data } from "../../database/database.js";
import { PostCard } from "../../components/PostCard/PostCard.js";
import { Button } from '../../components/Button/Button';
import { AddPostForm } from '../../components/AddPostForm/AddPostForm.js';

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postCardData: [...data],
      showAddForm: false,
      onActivePost: null,
      currentPost: null,
      sortBy: 'order',
    }
  }

  byField = (field) => {
    return (a, b) => a[field] > b[field] ? 1 : -1;
  };

  sortByDate = () => {
    this.setState({sortBy: 'date'});
  }

  sortById = () => {
    this.setState({sortBy: 'id'});
  };

  handleShowAddForm = () => {
    this.setState({showAddForm: !this.state.showAddForm});
  }

  addPost = (post) => {
    this.setState({postCardData: [...this.state.postCardData, post]});
  }

  // TODO: Fix mutation bug
  deleteImage = (pos) => {
    this.state.postCardData[pos] = {...this.state.postCardData[pos], imageUrl: null}
    this.setState({postCardData: this.state.postCardData});
  }

  // TODO: Fix mutation and render comment bugs
  addComment = (pos) => {
    const temp = {comment: prompt("Write your comment", "")};
    this.state.postCardData[pos] = {...this.state.postCardData[pos], ...temp};
    this.setState({postCardData: this.state.postCardData});
  }

  deletePost = (pos) => {
    const temp = [...this.state.postCardData];
    temp.splice(pos, 1);

    this.setState({postCardData: temp});
  }

  handleActivePost = (pos) => {
    let temp = pos;
    if (this.state.onActivePost === temp) {
      temp = null;
    }
    this.setState({onActivePost: temp});
  }

  goToNextPost = (e) => {
    if (e.key === "ArrowDown") {
      let temp = this.state.onActivePost;
      if (temp === this.state.postCardData.length - 1) {
        return null;
      }
      this.setState({onActivePost: ++temp});
      this.sctrollToCard();
    }
  }

  goToPrevPost = (e) => {
    if (e.key === "ArrowUp") {
      let temp = this.state.onActivePost;
      if (temp === 0) {
        return null;
      }
      this.setState({onActivePost: --temp});
      this.sctrollToCard();
    }
  }

  sctrollToCard = () => {
    const card = document.querySelector(".postcard_active");
    if (card === null) {
      return null;
    }
    card.scrollIntoView({
      block: "center",
    });
  }

  deselectActivePost = (e) => {
    if (e.key === "Escape") {
      this.handleActivePost();
    }
  }

  dragStartHandler = (e, post) => {
    this.setState({currentPost: post});
  }

  dragOverHandler = (e) => {
    e.preventDefault();
  }

  dropHandler = (e, post) => {
    e.preventDefault();
    this.setState({postCardData: this.state.postCardData.map((item) => {
      if (item.id === post.id) {
        return {...item, order: this.state.currentPost.order}
      }
      if (item.id === this.state.currentPost.id) {
        return {...item, order: post.order}
      }
      return item;
    })});
    this.setState({sortBy: 'order'});
  }

  componentDidMount() {
    this.handleActivePost();
    window.addEventListener("keyup", this.goToNextPost);
    window.addEventListener("keyup", this.goToPrevPost);
    window.addEventListener("keyup", this.deselectActivePost);
  }

  componentWillUnmount() {
    this.handleActivePost();
    window.removeEventListener("keyup", this.goToNextPost);
    window.removeEventListener("keyup", this.goToPrevPost);
    window.removeEventListener("keyup", this.deselectActivePost);
  }

  render() {
  return (
    <main className="main">

      {
        this.state.showAddForm ? 
        <AddPostForm 
          handleShowAddForm={this.handleShowAddForm} 
          addPost={this.addPost}  
          lastId={this.state.postCardData[this.state.postCardData.length - 1].id}
          lastOrder={this.state.postCardData.length}
        /> 
        : null
      }

      <div className="buttonsWrap">
        <Button 
          logic={this.sortByDate}
          content={"Sort by function"}
          styles={"button button_article"}
        />
        <Button 
          logic={this.sortById}
          content={"Bubble sort"}
          styles={"button button_article"}
        />
        <Button 
          logic={this.handleShowAddForm}
          content={"Add post"}
          styles={"button button_article"}
        />
      </div>
      {this.state.postCardData.sort(this.byField(this.state.sortBy)).map((postCardItem, pos) => (
        <PostCard 
          post={postCardItem} 
          key={postCardItem.id}
          forcedCardSize={"listSize"}
          draggable={true}
          dragStartHandler={this.dragStartHandler}
          dragOverHandler={this.dragOverHandler}
          dropHandler={this.dropHandler}
          onActivePost={this.state.onActivePost === pos}
          deletePost={() => this.deletePost(pos)}
          deleteImage={() => this.deleteImage(pos)}
          addComment={() => this.addComment(pos)}
          handleActivePost={() => this.handleActivePost(pos)}
        />
      ))}
    </main>
  );
}
}

export default Articles;
