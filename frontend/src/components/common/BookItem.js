import React from 'react';
import { Box, Card,  CardActions, CardContent, CardMedia, Typography } from '@mui/material';


const BookItem = ({ book, actions }) => {
  const {  title, author, description, price, image } = book;

  return (
    <Card elevation={2} sx={{width: '250px'}}>
      <CardMedia
        sx={{ height: 150, backgroundSize: 'contain' }}
        image={image}
        title={title}
      />
      <CardContent>
        <Box component="div" sx={{ width: '100%' }}>
          <Typography title={title} sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}} color="Highlight" variant='h5'>
            {title}
          </Typography>
          <Typography><strong>${price}</strong></Typography>
        </Box>
        <Typography variant='caption'>By: {author}</Typography>
        <Typography title={description} sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}} color="gery">{description}</Typography>

      </CardContent>
      <CardActions>
        {actions}
      </CardActions>
    </Card>
  );
};

export default BookItem;
