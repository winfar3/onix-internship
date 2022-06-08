import './Travels.scss'

import { useState } from 'react'
import classNames from 'classnames'

import spain from '../../assets/images/travels/spain.jpg'
import france from '../../assets/images/travels/france.jpg'
import germany from '../../assets/images/travels/germany.jpg'
import england from '../../assets/images/travels/england.jpg'

export default function Travels() {
  const [data, setData] = useState([{
    id: 1,
    order: 3,
    name: 'Spain',
    img: spain,
  }, {
    id: 2,
    order: 1,
    name: 'France',
    img: france,
  }, {
    id: 3,
    order: 2,
    name: 'Germany',
    img: germany,
  }, {
    id: 4,
    order: 4,
    name: 'England',
    img: england,
  }])

  const [currentCard, setCurrentCard] = useState(null)
  const [cls, setCls] = useState()

  const dragStartHandler = (e, card) => {
    setCurrentCard(card)
  }

  const dragEndHandler = (e) => {
    setCls(null)
  }

  const dragOverHandler = (e, pos) => {
    e.preventDefault()
    setCls(pos)
  }
  
  const dropHandler = (e, card) => {
    e.preventDefault()
    setData(data.map(item => {
      if (item.id === card.id) {
        return {...item, order: currentCard.order}
      }
      if (item.id === currentCard.id) {
        return {...item, order: card.order}
      }
      return item
    }))
    setCls(null)
  }

  const sordCards = (a, b) => {
    if (a.order > b.order) {
      return 1
    } else {
      return -1
    }
  }

  return(
    <div className='travels'>
      {data.sort(sordCards).map((card, pos) => 
        <div 
          key={card.id}
          onDragStart={(e) => dragStartHandler(e, card)}
          onDragLeave={(e) => dragEndHandler(e)}
          onDragEnd={(e) => dragEndHandler(e)}
          onDragOver={(e) => dragOverHandler(e, pos)}
          onDrop={(e) => dropHandler(e, card)}
          draggable={true}
          className={classNames('travels__card travels-card', {'_over' : cls === pos})}
        >
          <div className='travels-card__image'>
            <img src={card.img} />
          </div>
          {card.name}
        </div>
      )}
    </div>
  )
}