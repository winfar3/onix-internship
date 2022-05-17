function PostCardImageView({imageUrl, classNames, alt}) {
  return(
    <img 
      src={imageUrl} 
      className={classNames} 
      alt={alt}
    />
  );
}

export default PostCardImageView;