import { Button } from "../Button/Button";

function PostCardButtons(props) {
  return (
    <div className="postcard__buttons">
      {props.deletePost ? (
        <Button
          logic={props.deletePost}
          content={"Delete post"}
          styles={"button button_delete"}
        />
      ) : null}
      {props.deleteImage ? (
        <Button
          logic={props.deleteImage}
          content={"Delete image"}
          styles={"button button_delete"}
        />
      ) : null}
      {props.addComment ? (
        <Button
          logic={props.addComment}
          content={"Add comment"}
          styles={"button button_delete"}
        />
      ) : null}
    </div>
  );
}

export default PostCardButtons;
