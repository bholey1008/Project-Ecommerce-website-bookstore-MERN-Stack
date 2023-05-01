import React, { useContext, useEffect, useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import UserBookItem from './UserBookItem';
import { Box, Button, Drawer, Grid } from '@mui/material';
import BookCart from './BookCart';
import { LoggedInUserContext } from '../../../../LoggedInUserContext';
import axios from 'axios';

const BookList = ({allBooksData}) => {
    const [cartBooks, setCartBooks] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const {loggedInUser} = useContext(LoggedInUserContext);

    useEffect(() => {
        fetchCart();
    }, []);

    function fetchCart() {
        if (loggedInUser && typeof loggedInUser === 'object' && loggedInUser._id) {
            axios.get(`http://localhost:4000/users/${loggedInUser._id}/cart`)
            .then(response => {
                setCartBooks(response.data);
            })
            .catch(console.log);
        }
    }

    function saveCart() {
        if (loggedInUser && typeof loggedInUser === 'object' && loggedInUser._id) {
            axios.post(`http://localhost:4000/users/${loggedInUser._id}/cart`, cartBooks)
            .then(response => {
                console.log('Saved cart')
            })
            .catch(console.log);
        }     
    }

    function placeOrder() {
        if (loggedInUser && typeof loggedInUser === 'object' && loggedInUser._id) {
            axios.post(`http://localhost:4000/users/${loggedInUser._id}/place-order`, cartBooks)
            .then(response => {
                alert('Order placed');
                setCartBooks([]);
            })
            .catch(console.log);
        }    
    }

    // Function to handle adding a book to the cart
    const handleAddToCart = (book) => {
        const existingBookIndex = cartBooks.findIndex(
            (cartBook) => cartBook._id === book._id
        );

        if (existingBookIndex !== -1) {
            const updatedCartBooks = [...cartBooks];
            updatedCartBooks[existingBookIndex].count += 1;
            setCartBooks(updatedCartBooks);
        } else {
            setCartBooks([...cartBooks, { ...book, count: 1 }]);
        }
    };

    // check if cart is empty
    // const cartIsEmpty = cartBooks.length === 0;

    return (
        <Box sx={{padding: '16px'}}>
            <h1>Available all Books in our store</h1>
            <Box>
                <Button onClick={() => setIsCartOpen(true)}>
                    <ShoppingCartIcon /> View Cart
                </Button>
                <Drawer
                    anchor={'right'}
                    open={isCartOpen}
                    onClose={() => setIsCartOpen(false)}
                >
                    <BookCart cartBooks={cartBooks} placeOrder={placeOrder} saveCart={saveCart} />
                </Drawer>
            </Box>
            <Grid container spacing={2}>
                {allBooksData.map((book) => (
                    <Grid item key={book._id}>
                        <UserBookItem book={book} handleAddToCart={handleAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default BookList;
