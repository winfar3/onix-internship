function PostCardDateView({year, month, day}) {
  return(
    <p className="postcard__date">{`${month} ${day}, ${year}`}</p>
  );
}

export default PostCardDateView;