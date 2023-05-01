import React, { useState } from 'react';
import { useBookData } from '../../hooks/useBookData';
import { Box, InputBase, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const DashboardHome = () => {
  const [books] = useBookData(); // removed unused setBooks variable
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Box
      width={500}
      margin="20px auto"
      border={2}
      borderColor="solid"
      bgcolor="#87CEEB"
      sx={{ boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)' }}
      padding={5}
    >
     <a href='./component-diagram' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Components Diagram</a>

      <Typography variant="h5" gutterBottom>
        Books in Stock: {books.length}
      </Typography>

      <InputBase
        placeholder="Search by book title"
        sx={{ mb: 2, bgcolor: 'white', width: '50%' }} // use string to set width to 50%
        value={searchQuery}
        onChange={handleSearchInputChange}
      />

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Serial No.</TableCell>
              <TableCell>Book Title</TableCell>
              <TableCell>Author</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredBooks.map((book, index) => (
              <TableRow key={book._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DashboardHome;

