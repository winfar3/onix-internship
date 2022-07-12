import PropTypes from 'prop-types';
import classNames from 'classnames';

import useLocalization from '../../hooks/useLocalization';
import Layout from '../../layout/Layout';

function TravelsView({
  data,
  sordCards,
  cls,
  dragStartHandler,
  dragEndHandler,
  dragOverHandler,
  dropHandler,
}) {
  const [t] = useLocalization();

  return (
    <Layout>
      <div className="travels">
        {data.sort(sordCards).map((card, pos) => (
          <div
            key={card.id}
            onDragStart={(e) => dragStartHandler(e, card)}
            onDragLeave={(e) => dragEndHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverHandler(e, pos)}
            onDrop={(e) => dropHandler(e, card)}
            draggable
            className={classNames('travels__card travels-card', {
              _over: cls === pos,
            })}
          >
            <div className="travels-card__image">
              <img src={card.img} alt="country" />
            </div>
            {t(card.name)}
          </div>
        ))}
      </div>
    </Layout>
  );
}

TravelsView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape).isRequired,
  sordCards: PropTypes.func.isRequired,
  cls: PropTypes.number,
  dragStartHandler: PropTypes.func.isRequired,
  dragEndHandler: PropTypes.func.isRequired,
  dragOverHandler: PropTypes.func.isRequired,
  dropHandler: PropTypes.func.isRequired,
};

TravelsView.defaultProps = {
  cls: null,
};

export default TravelsView;
