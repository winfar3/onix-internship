import { Button } from "../Button/Button";

function PostCardButtons({deletePost, deleteImage, addComment}) {
  return (
    <div className="postcard__buttons">
      {deletePost ? (
        <Button
          logic={deletePost}
          content={"Delete post"}
          styles={"button button_delete"}
        />
      ) : null}
      {deleteImage ? (
        <Button
          logic={deleteImage}
          content={"Delete image"}
          styles={"button button_delete"}
        />
      ) : null}
      {addComment ? (
        <Button
          logic={addComment}
          content={"Add comment"}
          styles={"button button_delete"}
        />
      ) : null}
    </div>
  );
}

export default PostCardButtons;