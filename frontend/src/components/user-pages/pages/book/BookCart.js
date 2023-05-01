import React from 'react';
import {
  Add as PlusIcon,
  Remove as MinusIcon
} from '@mui/icons-material';

import { Button, IconButton, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const BookCart = ({ cartBooks, saveCart, placeOrder }) => {
  let totalPrice = 0;

  return (
    <Table container direction="column">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Quantity</TableCell>
          <TableCell>Rate</TableCell>
          <TableCell>Price</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {cartBooks.map(book => {
          let price = book.count * book.price;
          totalPrice += price;

          return (
            <TableRow key={book._id}>
              <TableCell>{book.title}</TableCell>
              <TableCell>
                {/*  <IconButton><PlusIcon /></IconButton> */}
                {book.count}
                {/* <IconButton><MinusIcon /></IconButton> */}
              </TableCell>
              <TableCell>${book.price}</TableCell>
              <TableCell>${price}</TableCell>
            </TableRow>
          )
        })}
        <TableRow>
          <TableCell>
            <Button color='success' size='small' variant='contained' onClick={saveCart}>
              Save
            </Button>
          </TableCell>
          <TableCell>
            <Button size='small' variant='contained' onClick={placeOrder}>
              Buy
            </Button>
          </TableCell>
          <TableCell align='right'>Total</TableCell>
          <TableCell>${totalPrice}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
};

export default BookCart;
