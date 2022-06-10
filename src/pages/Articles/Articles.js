import "./Articles.scss";

import React from "react";
import { ThreeDots } from 'react-loading-icons';

import ArticlesView from "./ArticlesView";
import SendAxiosRequest from "../../database/SendAxiosRequest";
import { postsRequestUrl } from "../../database/requestUrls";

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.activePostElement = React.createRef();
    this.state = {
      postCardData: [],
      showAddForm: false,
      onActivePost: null,
      currentPost: null,
      sortBy: "order",
      isSorted: false,
      isPending: false,
    };
  }

  byField = (field) => {
    if (this.state.isSorted) {
      return (a, b) => (a[field] > b[field] ? -1 : 1);
    } else {
      return (a, b) => (a[field] > b[field] ? 1 : -1);
    }
  };

  sortByDate = () => {
    this.setState(({isSorted}) => ({isSorted: !isSorted, sortBy: 'date'}));
  };

  sortById = () => {
    this.setState(({isSorted}) => ({isSorted: !isSorted, sortBy: 'id'}));
  };

  handleShowAddForm = () => {
    this.setState(({showAddForm}) => ({showAddForm: !showAddForm}));
  };

  addPost = (post) => {
    this.setState({ postCardData: [...this.state.postCardData, post] });
  };

  deleteImage = (pos) => {
    this.setState({
      postCardData: this.state.postCardData.map((item, index) => {
        if (index === pos) {
          const { imageUrl, ...otherData } = item;
          return otherData;
        }
        return item;
      }),
    });
  };

  addComment = (pos) => {
    const temp = { comment: prompt("Write your comment", "") };
    this.setState({
      postCardData: this.state.postCardData.map((item, index) => {
        if (index === pos) {
          return { ...item, ...temp };
        }
        return item;
      }),
    });
  };

  deletePost = (pos) => {
    const temp = [...this.state.postCardData];
    temp.splice(pos, 1);

    this.setState({ postCardData: temp });
  };

  handleActivePost = (pos) => {
    let temp = pos;
    if (this.state.onActivePost === temp) {
      temp = null;
    }
    this.setState({ onActivePost: temp });
  };

  goToNextPost = (e) => {
    if (e.key === "ArrowDown") {
      let temp = this.state.onActivePost;
      if (temp === this.state.postCardData.length - 1) {
        return null;
      }
      this.setState({ onActivePost: temp + 1 });
      this.sctrollToCard();
    }
  };

  goToPrevPost = (e) => {
    if (e.key === "ArrowUp") {
      let temp = this.state.onActivePost;
      if (temp === 0) {
        return null;
      }
      this.setState({ onActivePost: temp - 1 });
      this.sctrollToCard();
    }
  };

  sctrollToCard = () => {
    // const card = document.querySelector(".postcard_active");
    const card = this.activePostElement.current;
    if (card === null) {
      return null;
    }
    card.scrollIntoView({
      block: "center",
    });
  };

  deselectActivePost = (e) => {
    if (e.key === "Escape") {
      this.handleActivePost();
    }
  };

  dragStartHandler = (e, post) => {
    this.setState({ currentPost: post });
  };

  dragOverHandler = (e) => {
    e.preventDefault();
  };

  // TODO: fix bug with order sort after another sort
  dropHandler = (e, post) => {
    e.preventDefault();
    this.setState({
      postCardData: this.state.postCardData.map((item) => {
        if (item.id === post.id) {
          return { ...item, order: this.state.currentPost.order };
        }
        if (item.id === this.state.currentPost.id) {
          return { ...item, order: post.order };
        }
        return item;
      }),
    });
    this.setState({ sortBy: "order" });
  };

  componentDidMount() {
    this.setState({isPending: true});
    SendAxiosRequest(postsRequestUrl)
      .then((data) => {
        this.setState({ postCardData: data });
        this.setState({isPending: false});
      })
      .catch((err) => console.log(err));
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
    if (this.state.isPending) {
      return <div className="loader"><ThreeDots stroke="#06bcee" fill="#06bcee"/></div>
    }
    return (
      <ArticlesView
        showAddForm={this.state.showAddForm}
        handleShowAddForm={this.handleShowAddForm}
        handleActivePost={this.handleActivePost}
        addPost={this.addPost}
        lastId={
          this.state.postCardData.length > 0 &&
          this.state.postCardData[this.state.postCardData.length - 1].id
        }
        lastOrder={this.state.postCardData.length}
        sortByDate={this.sortByDate}
        sortById={this.sortById}
        postCardData={this.state.postCardData}
        byField={this.byField}
        sortBy={this.state.sortBy}
        dragStartHandler={this.dragStartHandler}
        dragOverHandler={this.dragOverHandler}
        dropHandler={this.dropHandler}
        onActivePost={this.state.onActivePost}
        deletePost={this.deletePost}
        deleteImage={this.deleteImage}
        addComment={this.addComment}
        activePostElement={this.activePostElement}
      />
    );
  }
}

export default Articles;
