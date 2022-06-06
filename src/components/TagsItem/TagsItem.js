import './TagsItem.scss';

export function TagsItem({ tagId }) {
  const linkRoot = "/onix-internship/";

  return(
      <a href={linkRoot + tagId} className="tags__item capitalize">
          {tagId}
      </a>
  );
}