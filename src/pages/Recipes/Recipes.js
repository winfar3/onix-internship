import './Recipes.scss';

import useLocalStorage from '../../hooks/useLocalStorage';
import RecipesView from './RecipesView';
import useModal from '../../hooks/useModal';
import useLocalization from '../../hooks/useLocalization';

function Recipes() {
  const [t] = useLocalization();
  const [showWhen, toggleModal] = useModal();
  const [comments, setComments] = useLocalStorage([], 'comments');

  const addComment = (commentedPostPos, comment) => {
    setComments([...comments, comment]);
  };

  return (
    <RecipesView 
      comments={comments}
      showWhen={showWhen}
      toggleModal={toggleModal}
      addComment={addComment}
      title={t('recipes_title')}
      buttonText={t('button_addComment')}
    />
  );
}

export default Recipes;
