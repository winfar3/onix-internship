import './Recipes.scss';

import useLocalStorage from '../../hooks/useLocalStorage';
import RecipesView from './RecipesView';
import useModal from '../../hooks/useModal';

function Recipes() {
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
    />
  );
}

export default Recipes;
