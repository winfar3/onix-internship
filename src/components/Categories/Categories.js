import "./Categories.scss";
import {CategoriesItem} from '../CategoriesItem/CategoriesItem.js';

export function Categories() {
    const categoriesData = [{
        title: "Fashion",
        url: "fashion",
        number: 23
    }, {
        title: "Style & clothes",
        url: "style-and-clothes",
        number: 7
    }, {
        title: "Minimalism",
        url: "minimalism",
        number: 16
    }, {
        title: "Black & White",
        url: "black-and-white",
        number: 5
    }, {
        title: "Modern clothes",
        url: "modern-clothes",
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

