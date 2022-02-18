import "./Categories.scss";

export function Categories() {
    const categoriesData = [{
        title: "Fashion",
        number: 23
    }, {
        title: "Style & clothes",
        number: 7
    }, {
        title: "Minimalism",
        number: 16
    }, {
        title: "Black & White",
        number: 5
    }, {
        title: "Modern clothes",
        number: 12
    }]
    return(
        <div>
            <ul className="categoris__list">
                {categoriesData.map(categoriesDataItem =>
                    <CategoriesItem {...categoriesDataItem} key={categoriesDataItem.title} />
                )}
            </ul>
        </div>
    );
}

function CategoriesItem(props) {
    return(
        <li className="categoris__item">
            <a href="#" className="categoris__link">{props.title}</a>
            <p>({props.number})</p>
        </li>
    );
}