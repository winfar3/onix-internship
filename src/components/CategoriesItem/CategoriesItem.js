import './CategoriesItem.scss';

export function CategoriesItem({ category }) {
  const title = category.title;
  const url = category.url;
  const number = category.number;
  const linkRoot = "/onix-internship/";

  return(
      <li className="categoris__item">
          <a href={linkRoot + url} className="categoris__link">{title}</a>
          <p>({number})</p>
      </li>
  );
}