import PropTypes from "prop-types";
import classNames from 'classnames'

function TravelsView({
  data,
  sordCards,
  cls,
  dragStartHandler,
  dragEndHandler,
  dragOverHandler,
  dropHandler,
}) {
  return (
    <div className="travels">
      {data.sort(sordCards).map((card, pos) => (
        <div
          key={card.id}
          onDragStart={(e) => dragStartHandler(e, card)}
          onDragLeave={(e) => dragEndHandler(e)}
          onDragEnd={(e) => dragEndHandler(e)}
          onDragOver={(e) => dragOverHandler(e, pos)}
          onDrop={(e) => dropHandler(e, card)}
          draggable={true}
          className={classNames("travels__card travels-card", {
            _over: cls === pos,
          })}
        >
          <div className="travels-card__image">
            <img src={card.img} alt="country" />
          </div>
          {card.name}
        </div>
      ))}
    </div>
  );
}

TravelsView.propTypes = {
  data: PropTypes.array,
  sordCards: PropTypes.func,
  cls: PropTypes.string,
  dragStartHandler: PropTypes.func,
  dragEndHandler: PropTypes.func,
  dragOverHandler: PropTypes.func,
  dropHandler: PropTypes.func,
};

export default TravelsView;
