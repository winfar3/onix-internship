import './Travels.scss';

import { useState } from 'react';

import spain from '../../assets/images/travels/spain.jpg';
import france from '../../assets/images/travels/france.jpg';
import germany from '../../assets/images/travels/germany.jpg';
import england from '../../assets/images/travels/england.jpg';
import TravelsView from './TravelsView';

export default function Travels() {
  const [data, setData] = useState([
    {
      id: 1,
      order: 3,
      name: 'Spain',
      img: spain,
    },
    {
      id: 2,
      order: 1,
      name: 'France',
      img: france,
    },
    {
      id: 3,
      order: 2,
      name: 'Germany',
      img: germany,
    },
    {
      id: 4,
      order: 4,
      name: 'England',
      img: england,
    },
  ]);

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
