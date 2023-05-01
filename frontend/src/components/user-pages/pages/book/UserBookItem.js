import React from 'react';
import AddToCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate } from 'react-router-dom';
import BookItem from '../../../common/BookItem';
import { Button } from '@mui/material';


const UserBookItem = ({ book, handleAddToCart }) => {
  const { _id, title, isbn, price, image } = book;
  const navigate = useNavigate();

  const handleCartOnClick = () => {
    const bookInfoForCart = { title, isbn, price, _id, image };
    handleAddToCart(bookInfoForCart);
  };

  const actions = (
    <>
      <Button title='Add to cart' color="success" variant='contained' size='small' onClick={handleCartOnClick}><AddToCartIcon /></Button>&#160;&#160;
      <Button size='small' onClick={() => navigate(`books/${_id}`)}>Details</Button>
    </>
  );
  // returns a BookItem component which takes in the book and actions props.(composition)
  return <BookItem book={book} actions={actions} />;
};

export default UserBookItem;
