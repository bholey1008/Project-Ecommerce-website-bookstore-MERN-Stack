import { Box, Button, FormLabel, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect, useTransition } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BookDetail = () => {
  const [dataToUpdate, setDataToUpdate] = useState({
    title: '',
    author: '',
    description: '',
    isbn: '',
    price: 0,
    image: ''
  });
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [isPending, startTransition] = useTransition({ timeoutMs: 3000 });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:4000/books/${bookId}`);
      setDataToUpdate(response.data);
    };
    fetchData();
  }, [bookId]);

  const handleInput = e => {
    setDataToUpdate({
      ...dataToUpdate,
      [e.target.name]: e.target.value
    });
  };

  const sendUpdateRequest = () => {
    startTransition(() => {
      axios.put(`http://localhost:4000/books/${bookId}`, dataToUpdate)
        .then(res => {
          console.log('response', res.data);
          navigate('/admin/books');
        });
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    sendUpdateRequest();
  };

  return (
    <div>
      <h2>Edit Book Info</h2>
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
          <FormLabel>Title</FormLabel>
          <TextField margin="normal" value={dataToUpdate.title} onChange={handleInput} fullWidth variant="outlined" name="title" />

          <FormLabel>Author</FormLabel>
          <TextField margin="normal" value={dataToUpdate.author} onChange={handleInput} fullWidth variant="outlined" name="author" />

          <FormLabel>Description</FormLabel>
          <TextField margin="normal" value={dataToUpdate.description} onChange={handleInput} fullWidth variant="outlined" name="description" />

          <FormLabel>ISBN</FormLabel>
          <TextField margin="normal" value={dataToUpdate.isbn} onChange={handleInput} fullWidth variant="outlined" name="isbn" />

          <FormLabel>Image</FormLabel>
          <TextField margin="normal" value={dataToUpdate.image} onChange={handleInput} fullWidth variant="outlined" name="image" />

          <FormLabel>Price</FormLabel>
          <TextField margin="normal" value={dataToUpdate.price} onChange={handleInput} fullWidth variant="outlined" type="number" name="price" />

          <Button type="submit" variant="contained">
            {isPending ? 'Updating...' : 'Update Book'}
          </Button>
        </Box>
      </form>

    </div>

  )
}


export default BookDetail;

/* 
useTransition hook is used to add a transition to the UI when an asynchronous operation is being processed.
In this code, useTransition is used to add a transition when an axios request is being made to update book data.
The startTransition function returned by useTransition is called inside sendUpdateRequest to wrap the asynchronous operation and add a transition to the UI.
During the time the operation is being processed, isPending variable returned by useTransition is set to true, which can be used to show a loading spinner or any other UI indication that the update is in progress.
Once the asynchronous operation is complete, startTransition will complete the transition by setting isPending to false and updating the UI accordingly.
*/

/* import { Box, Button, FormLabel, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


const BookDetail = () => {
  const [dataToUpdate, setDataToUpdate] = useState({
    title: '',
    author: '',
    description: '',
    isbn: '',
    price: 0,
    image: ''
  })
  const id = useParams().bookId;
  const navigate = useNavigate();
  // use effect will fetch this data when edit button is clicked.(Then in BookList and BookItem the data fetched previous will be replaced by this useEffect )
  useEffect(() => {
    const fetchHandler = async () => {
      const response = await axios.get(`http://localhost:4000/books/${id}`);
      setDataToUpdate(response.data);
    };
    fetchHandler();
  }, [id]);


  const sendUpdateRequest = () => {
    axios.put(`http://localhost:4000/books/${id}`, dataToUpdate).then(res => console.log("mata", res.data));
  }



  // handle Submit
  function handleSubmit(e) {
    e.preventDefault();
    sendUpdateRequest();
    navigate('/admin/books')
  }

  function handleInput(e) {
    setDataToUpdate(
      {
        ...dataToUpdate,
        [e.target.name]: e.target.value
      });
  }

  // console.log()
  return (
    <div>
      <h2>Edit Book Info</h2>
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
          <FormLabel>Title</FormLabel>
          <TextField margin="normal" value={dataToUpdate.title} onChange={handleInput} fullWidth variant="outlined" name="title" />

          <FormLabel>Author</FormLabel>
          <TextField margin="normal" value={dataToUpdate.author} onChange={handleInput} fullWidth variant="outlined" name="author" />

          <FormLabel>Description</FormLabel>
          <TextField margin="normal" value={dataToUpdate.description} onChange={handleInput} fullWidth variant="outlined" name="description" />

          <FormLabel>ISBN</FormLabel>
          <TextField margin="normal" value={dataToUpdate.isbn} onChange={handleInput} fullWidth variant="outlined" name="isbn" />

          <FormLabel>Image</FormLabel>
          <TextField margin="normal" value={dataToUpdate.image} onChange={handleInput} fullWidth variant="outlined" name="image" />

          <FormLabel>Price</FormLabel>
          <TextField margin="normal" value={dataToUpdate.price} onChange={handleInput} fullWidth variant="outlined" type="number" name="price" />

          <Button type="submit" variant="contained">
            Update Book
          </Button>
        </Box>
      </form>

    </div>

  )
}

export default BookDetail; */