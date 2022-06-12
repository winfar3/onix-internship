import './Articles.scss';

import React from 'react';
import { ThreeDots } from 'react-loading-icons';

import ArticlesView from './ArticlesView';
import SendAxiosRequest from '../../database/SendAxiosRequest';
import { postsRequestUrl } from '../../database/requestUrls';

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.activePostElement = React.createRef();
    this.state = {
      postCardData: [],
      showAddForm: false,
      onActivePost: null,
      currentPost: null,
      sortBy: 'order',
      isSorted: false,
      isPending: false,
    };
  }

  componentDidMount() {
    this.setState({ isPending: true });
    SendAxiosRequest(postsRequestUrl)
      .then((data) => {
        this.setState({ postCardData: data });
        this.setState({ isPending: false });
      });
    // TODO: remove after solving warnings eslint
    // .catch((err) => console.log(err));
    this.handleActivePost();
    window.addEventListener('keyup', this.goToNextPost);
    window.addEventListener('keyup', this.goToPrevPost);
    window.addEventListener('keyup', this.deselectActivePost);
  }

  componentWillUnmount() {
    this.handleActivePost();
    window.removeEventListener('keyup', this.goToNextPost);
    window.removeEventListener('keyup', this.goToPrevPost);
    window.removeEventListener('keyup', this.deselectActivePost);
  }

  byField = (field) => {
    const { isSorted } = this.state;
    if (isSorted) {
      return (a, b) => (a[field] > b[field] ? -1 : 1);
    } 
    return (a, b) => (a[field] > b[field] ? 1 : -1);
  };

  sortByDate = () => {
    this.setState(({ isSorted }) => ({ isSorted: !isSorted, sortBy: 'date' }));
  };

  sortById = () => {
    this.setState(({ isSorted }) => ({ isSorted: !isSorted, sortBy: 'id' }));
  };

  handleShowAddForm = () => {
    this.setState(({ showAddForm }) => ({ showAddForm: !showAddForm }));
  };

  addPost = (post) => {
    const { postCardData } = this.state;
    this.setState({ postCardData: [...postCardData, post] });
  };

  deleteImage = (pos) => {
    const { postCardData } = this.state;
    this.setState({
      postCardData: postCardData.map((item, index) => {
        if (index === pos) {
          const { imageUrl, ...otherData } = item;
          return otherData;
        }
        return item;
      }),
    });
  };

  // TODO: remove after solving warnings eslint
  addComment = (pos) => {
    const { postCardData } = this.state;
    const temp = { comment: prompt('Write your comment', '') }; // eslint-disable-line no-alert
    this.setState({
      postCardData: postCardData.map((item, index) => {
        if (index === pos) {
          return { ...item, ...temp };
        }
        return item;
      }),
    });
  };

  deletePost = (pos) => {
    const { postCardData } = this.state;
    const temp = [...postCardData];
    temp.splice(pos, 1);

    this.setState({ postCardData: temp });
  };

  handleActivePost = (pos) => {
    const { onActivePost } = this.state;
    let temp = pos;
    if (onActivePost === temp) {
      temp = null;
    }
    this.setState({ onActivePost: temp });
  };

  goToNextPost = (e) => {
    const { onActivePost, postCardData } = this.state;
    if (e.key === 'ArrowDown') {
      const temp = onActivePost;
      if (temp === postCardData.length - 1) {
        return null;
      }
      this.setState({ onActivePost: temp + 1 });
      this.sctrollToCard();
    }
    return null;
  };

  goToPrevPost = (e) => {
    const { onActivePost } = this.state;
    if (e.key === 'ArrowUp') {
      const temp = onActivePost;
      if (temp === 0) {
        return null;
      }
      this.setState({ onActivePost: temp - 1 });
      this.sctrollToCard();
    }
    return null;
  };

  sctrollToCard = () => {
    const card = this.activePostElement.current;
    if (card === null) {
      return null;
    }
    card.scrollIntoView({
      block: 'center',
    });
    return null;
  };

  deselectActivePost = (e) => {
    if (e.key === 'Escape') {
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
    const { postCardData, currentPost } = this.state;
    e.preventDefault();
    this.setState({
      postCardData: postCardData.map((item) => {
        if (item.id === post.id) {
          return { ...item, order: currentPost.order };
        }
        if (item.id === currentPost.id) {
          return { ...item, order: post.order };
        }
        return item;
      }),
    });
    this.setState({ sortBy: 'order' });
  };

  render() {
    const { 
      isPending, showAddForm, postCardData, sortBy, onActivePost 
    } = this.state;

    if (isPending) {
      return (
        <div className="loader">
          <ThreeDots stroke="#06bcee" fill="#06bcee" />
        </div>
      );
    }
    return (
      <ArticlesView
        showAddForm={showAddForm}
        handleShowAddForm={this.handleShowAddForm}
        handleActivePost={this.handleActivePost}
        addPost={this.addPost}
        lastId={
          postCardData.length > 0 
          && postCardData[postCardData.length - 1].id
        }
        lastOrder={postCardData.length}
        sortByDate={this.sortByDate}
        sortById={this.sortById}
        postCardData={postCardData}
        byField={this.byField}
        sortBy={sortBy}
        dragStartHandler={this.dragStartHandler}
        dragOverHandler={this.dragOverHandler}
        dropHandler={this.dropHandler}
        onActivePost={onActivePost}
        deletePost={this.deletePost}
        deleteImage={this.deleteImage}
        addComment={this.addComment}
        activePostElement={this.activePostElement}
      />
    );
  }
}

export default Articles;
