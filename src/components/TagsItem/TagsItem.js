import './TagsItem.scss';

export function TagsItem({ id }) {
  const linkRoot = "/onix-internship/";

  return(
      <a href={linkRoot + id} className="tags__item capitalize">
          {id}
      </a>
  );
}