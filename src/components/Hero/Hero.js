import './Hero.scss';

import { baseUrl, lastRequestUrl } from '../../constants/requestUrls';
import months from '../../constants/months';
import useLocalization from '../../hooks/useLocalization';
import HeroView from './HeroView';
import useRequest from '../../hooks/useRequest';

//  TODO hide loader
function Hero() {
  const [t] = useLocalization();
  const [postData] = useRequest(`${baseUrl}${lastRequestUrl}`);
  let dateObject;
  if (postData.length > 0) {
    dateObject = new Date(postData[0].date);
  }
  
  return (
    <>
      {postData.map((post) => (
        <HeroView 
          key={post.id}
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
      ))}
    </>
  );
}

export default Hero;
