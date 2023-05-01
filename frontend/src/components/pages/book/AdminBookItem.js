import React from 'react';
import { useNavigate } from 'react-router-dom';

import BookItem from '../../common/BookItem';
import { Button } from '@mui/material';

const AdminBookItem = (props) => {
  const { _id, title, author, description, isbn, price, image } = props.book;
  console.log(props.book);
  const navigate = useNavigate();

  // when click edit it will navigate to `http://localhost:4000/books/${id}`ie.BookDetail.js
  function onClickEdit() {
    navigate(`${_id}`);
  }

  // handle delete

  const actions = (
    <>
      <Button size="small" variant='outlined' onClick={onClickEdit}>Edit</Button>&#160;&#160;
      <Button size="small" color='error' onClick={props.onClickDelete}>Delete</Button>
    </>
  )
  // returns a BookItem component which takes in the book and actions props.(composition)
  return <BookItem book={props.book} actions={actions} />;
};

export default AdminBookItem;
