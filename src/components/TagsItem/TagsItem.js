import './TagsItem.scss';

export function TagsItem(props) {
  const linkRoot = "/onix-internship/";

  return(
      <a href={linkRoot + props.id} className="tags__item capitalize">
          {props.id}
      </a>
  );
}