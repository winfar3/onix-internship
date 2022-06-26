import './Travels.scss';

import { useState } from 'react';

import TravelsView from './TravelsView';
import countries from '../../constants/countries';

export default function Travels() {
  const [data, setData] = useState(countries);

  const [currentCard, setCurrentCard] = useState(null);
  const [cls, setCls] = useState();

  const dragStartHandler = (e, card) => {
    setCurrentCard(card);
  };

  const dragEndHandler = () => {
    setCls(null);
  };

  const dragOverHandler = (e, pos) => {
    e.preventDefault();
    setCls(pos);
  };

  const dropHandler = (e, card) => {
    e.preventDefault();
    setData(
      data.map((item) => {
        if (item.id === card.id) {
          return { ...item, order: currentCard.order };
        }
        if (item.id === currentCard.id) {
          return { ...item, order: card.order };
        }
        return item;
      })
    );
    setCls(null);
  };

  const sordCards = (a, b) => {
    if (a.order > b.order) {
      return 1;
    } 
    return -1;
  };

  return (
    <TravelsView
      data={data}
      sordCards={sordCards}
      cls={cls}
      dragStartHandler={dragStartHandler}
      dragEndHandler={dragEndHandler}
      dragOverHandler={dragOverHandler}
      dropHandler={dropHandler}
    />
  );
}
