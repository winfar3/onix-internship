import './Hero.scss';

import PropTypes from 'prop-types';

import { lastRequestUrl } from '../../constants/requestUrls';
import withRequest from '../../hocs/withRequest';
import months from '../../constants/months';
import useLocalization from '../../hooks/useLocalization';
import HeroView from './HeroView';

//  TODO hide loader
function Hero({ dataFromServer }) {
  const [t] = useLocalization();
  const [post] = dataFromServer;
  const dateObject = new Date(post.date);
  return (
    <HeroView 
      id={post.id}
      title={post.title}
      dateMonth={t(months[dateObject.getMonth()])}
      dateDay={dateObject.getDate()}
      dateYear={dateObject.getFullYear()}
      author={post.author}
      imageUrl={post.imageUrl}
      by={t('by')}
      comments={t('comments')}
    />
  );
}

Hero.propTypes = {
  dataFromServer: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default withRequest(Hero, lastRequestUrl);
