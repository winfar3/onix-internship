import './Recipes.scss';

import { useContext } from 'react';

import ModalContext from '../../context/ModalContext';
import useLocalStorage from '../../hooks/useLocalStorage';
import RecipesView from './RecipesView';

function Recipes() {
  const { place, showModalHandler } = useContext(ModalContext);
  const [comments, setComments] = useLocalStorage([], 'comments');

  const addComment = (commentedPostPos, comment) => {
    setComments([...comments, comment]);
  };

  return (
    <RecipesView 
      comments={comments}
      place={place}
      showModalHandler={showModalHandler}
      addComment={addComment}
    />
  );
}

export default Recipes;
