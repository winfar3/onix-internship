import './Articles.scss';

import { React, useState } from "react";

import { data } from "../../database/database.js";
import { PostCard } from "../../components/PostCard/PostCard.js";
import { Button } from '../../components/Button/Button';
import { AddPostForm } from '../../components/AddPostForm/AddPostForm.js';

/*
* COMMENT 
* Я не до конца уверен, что правильно выполнил пункт задания "Переписать часть объекта с помощью spread оператора."
* В функции addComment я создаю еще один объект с новыми полями и потом объединяю его со старым объектом.
* Объясни пожалуйста, где можно и нужно исользовать редактирование объекта через spread.
*/

export function Articles() {
  const [postCardData, setPostCardData] = useState(data);
  const [showAddForm, setShowAddForm] = useState(false);

  const byField = (field) => {
    return (a, b) => a[field] > b[field] ? 1 : -1;
  };

  const sortByDate = () => {
    const temp = [...postCardData].sort(byField('date'));
    setPostCardData([...temp]); 
  }

  const sortById = () => {
    let arrayForSort = [...postCardData];

    for (let j = 0; j < arrayForSort.length; j++) {
      for (let i = 0; i < arrayForSort.length - 1 - j; i++) {
        if (arrayForSort[i].id > arrayForSort[i + 1].id) {
            let temp = arrayForSort[i];
            arrayForSort[i] = arrayForSort[i + 1];
            arrayForSort[i + 1] = temp;
        }
      }
    }

    setPostCardData([...arrayForSort]);
  };

  const handleShowAddForm = () => {
    setShowAddForm(!showAddForm);
  }

  const addPost = (post) => {
    setPostCardData([...postCardData, post]);
  }

  const deleteImage = (pos) => {
    delete postCardData[pos].imageUrl;
    setPostCardData([...postCardData]);
  }

  const addComment = (pos) => {
    const temp = {comment: prompt("Write your comment", "")};
    postCardData[pos] = {...postCardData[pos], ...temp};
    setPostCardData([...postCardData]);
  }

  const deletePost = (pos) => {
    const temp = [...postCardData];
    temp.splice(pos, 1);

    setPostCardData(temp);
  }

  return (
    <main className="main">

      {
        showAddForm ? 
        <AddPostForm 
          handleShowAddForm={handleShowAddForm} 
          addPost={addPost}  
          lastId={postCardData[postCardData.length - 1].id}
        /> 
        : null
      }

      <div className="buttonsWrap">
        <Button 
          logic={sortByDate}
          content={"Sort by function"}
          styles={"button button_article"}
        />
        <Button 
          logic={sortById}
          content={"Bubble sort"}
          styles={"button button_article"}
        />
        <Button 
          logic={handleShowAddForm}
          content={"Add post"}
          styles={"button button_article"}
        />
      </div>
      {postCardData.map((postCardItem, pos) => (
        <PostCard 
          {...postCardItem} 
          key={postCardItem.id} 
          deletePost={() => deletePost(pos)}
          deleteImage={() => deleteImage(pos)}
          addComment={() => addComment(pos)}
          />
      ))}
    </main>
  );
}
