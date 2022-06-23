import './Hero.scss';

import PropTypes from 'prop-types';

import { lastRequestUrl } from '../../constants/requestUrls';
import withRequest from '../../hocs/withRequest/withRequest';
import months from '../../constants/months';
import HeroView from './HeroView';

//  TODO hide loader
function Hero({ dataFromServer }) {
  const [post] = dataFromServer;
  const dateObject = new Date(post.date);
  return (
    <HeroView 
      id={post.id}
      title={post.title}
      dateMonth={months[dateObject.getMonth()]}
      dateDay={dateObject.getDate()}
      dateYear={dateObject.getFullYear()}
      author={post.author}
      imageUrl={post.imageUrl}
    />
  );
}

Hero.propTypes = {
  dataFromServer: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default withRequest(Hero, lastRequestUrl);
