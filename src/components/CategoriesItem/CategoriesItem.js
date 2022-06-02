import './CategoriesItem.scss';

export function CategoriesItem({ url, title, number }) {
  const linkRoot = "/onix-internship/";

  return(
      <li className="categoris__item">
          <a href={linkRoot + url} className="categoris__link">{title}</a>
          <p>({number})</p>
      </li>
  );
}