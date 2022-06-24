import './Recipes.scss';

import { useContext } from 'react';

import ModalContext from '../../context/ModalContext';
import useLocalStorage from '../../hooks/useLocalStorage';
import RecipesView from './RecipesView';

function Recipes() {
  const { showModal, showModalHandler } = useContext(ModalContext);
  const [comments, setComments] = useLocalStorage([], 'comments');

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <RecipesView 
      comments={comments}
      showModal={showModal}
      showModalHandler={showModalHandler}
      addComment={addComment}
    />
  );
}

export default Recipes;
