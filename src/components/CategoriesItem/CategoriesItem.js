import './CategoriesItem.scss';

export function CategoriesItem(props) {
  const linkRoot = "/onix-internship/";

  return(
      <li className="categoris__item">
          <a href={linkRoot + props.url} className="categoris__link">{props.title}</a>
          <p>({props.number})</p>
      </li>
  );
}