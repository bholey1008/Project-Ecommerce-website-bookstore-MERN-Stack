// Import necessary modules and components
import axios from 'axios';
import AdminBookItem from './AdminBookItem';

import { useBookData } from '../../hooks/useBookData';
import { Box, Grid } from '@mui/material';

// Define BookList component
const BookList = () => {
    // Use custom hook to get books data and setBooks function from context
    const [books, setBooks] = useBookData();
    // Function to handle book deletion
    const handleClickDelete = async (id) => {
        await axios.delete(`http://localhost:4000/books/${id}`)
            .then(res => {
                console.log("deleted Sucessfully");
                const bookIndex = books.findIndex(b => b._id === id);
                if (bookIndex > -1) {
                    const newBooks = [
                        ...books.slice(0, bookIndex),
                        ...books.slice(bookIndex + 1)
                    ];
                    setBooks(newBooks);
                }
            })
            .catch(console.log);
    }

    // Render book list component
    return (
        <Box sx={{ padding: '16px' }}>
            <h1>View Books</h1>
            <Grid container spacing={2}>
                {books.map((book, index) => (
                    <Grid item key={index}>
                        <AdminBookItem book={book} onClickDelete={() => handleClickDelete(book._id)} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default BookList;