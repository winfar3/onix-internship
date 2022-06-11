import './Categories.scss';

import { useState } from 'react';

import CategoriesItem from '../CategoriesItem/CategoriesItem';

function Categories() {
  const [categoriesData] = useState([
    {
      title: 'Fashion',
      url: 'fashion',
      number: 23,
    },
    {
      title: 'Style & clothes',
      url: 'style-and-clothes',
      number: 7,
    },
    {
      title: 'Minimalism',
      url: 'minimalism',
      number: 16,
    },
    {
      title: 'Black & White',
      url: 'black-and-white',
      number: 5,
    },
    {
      title: 'Modern clothes',
      url: 'modern-clothes',
      number: 12,
    },
  ]);

  return (
    <div>
      <ul className="categoris__list">
        {categoriesData.map((categoriesDataItem) => (
          <CategoriesItem
            category={categoriesDataItem}
            key={categoriesDataItem.title}
          />
        ))}
      </ul>
    </div>
  );
}

export default Categories;
