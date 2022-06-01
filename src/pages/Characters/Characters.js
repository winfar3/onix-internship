import { useState } from 'react'
import './Characters.scss'

export default function Characters() {
  const [data, setData] = useState([{
    id: 1,
    order: 3,
    name: '1',
  }, {
    id: 2,
    order: 1,
    name: '2',
  }, {
    id: 3,
    order: 2,
    name: '3',
  }, {
    id: 4,
    order: 4,
    name: '4',
  }])

  const [currentCard, setCurrentCard] = useState(null)

  const dragStartHandler = (e, card) => {
    setCurrentCard(card)
  }

  const dragEndHandler = (e) => {
    e.target.style.background = '#fff'
  }

  const dragOverHandler = (e) => {
    e.preventDefault()
    e.target.style.background = '#ccc'
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
    e.target.style.background = '#fff'
  }

  const sordCards = (a, b) => {
    if (a.order > b.order) {
      return 1
    } else {
      return -1
    }
  }

  return(
    <div className='characters'>
      {data.sort(sordCards).map(card => 
        <div 
          key={card.id}
          onDragStart={(e) => dragStartHandler(e, card)}
          onDragLeave={(e) => dragEndHandler(e)}
          onDragEnd={(e) => dragEndHandler(e)}
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropHandler(e, card)}
          draggable={true}
          className='characters__card'
        >
          {card.name}
        </div>
      )}
    </div>
  )
}