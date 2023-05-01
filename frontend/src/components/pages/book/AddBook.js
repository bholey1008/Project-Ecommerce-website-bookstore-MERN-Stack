import React, { useReducer } from 'react';
import { FormLabel, Box, TextField, Button } from '@mui/material';
import axios from 'axios';

const initialState = {
  title: '',
  author: '',
  description: '',
  isbn: '',
  price: 0,
  image: ''
};

function formReducer(state, action) { // formReducer will modify the function directly, The formReducer function is a pure function that takes the current state and an action as arguments and returns the new state based on the action
  switch (action.type) {
    case 'UPDATE_FIELD': 
      return { // returning new state
        ...state,
        [action.field]: action.value
      };
    case 'RESET_FORM':
      return initialState;
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

// The useReducer hook takes the formReducer function and the initialState object as arguments and returns an array with the current state and a dispatch function. 
const AddBook = () => {
  const [formData, dispatch] = useReducer(formReducer, initialState);

  const handleInput = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'UPDATE_FIELD',
      field: name,
      value: value
    });
  };

  const sendRequest = async () => {
    try {
      const response = await axios.post('http://localhost:4000/books/add', formData);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest();
    dispatch({ type: 'RESET_FORM' });
    window.history.back();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          maxWidth={700}
          alignContent="center"
          alignSelf="center"
          marginLeft="auto"
          marginRight="auto"
          marginTop={0}
          marginBottom={0}
          >
          <h1>Add Book Here</h1>
          <FormLabel>Title</FormLabel>
          <TextField margin="normal" value={formData.title} onChange={handleInput} fullWidth variant="outlined" name="title" maxLength={30} />

          <FormLabel>Author</FormLabel>
          <TextField margin="normal" value={formData.author} onChange={handleInput} fullWidth variant="outlined" name="author" maxLength={30} />

          <FormLabel>Description</FormLabel>
          <TextField margin="normal" value={formData.description} onChange={handleInput} fullWidth variant="outlined" name="description" />

          <FormLabel>ISBN</FormLabel>
          <TextField margin="normal" value={formData.isbn} onChange={handleInput} fullWidth variant="outlined" name="isbn" maxLength={30} />

          <FormLabel>Image</FormLabel>
          <TextField margin="normal" value={formData.image} onChange={handleInput} fullWidth variant="outlined" name="image" />

          <FormLabel>Price</FormLabel>
          <TextField margin="normal" value={formData.price} onChange={handleInput} fullWidth variant="outlined" type="number" name="price" />

          <Button type="submit" variant="contained">
            Add Book
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AddBook;


