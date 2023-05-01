import React from 'react';
import { render, screen} from '@testing-library/react';
import AddBook from '../AddBook';

jest.mock('axios');

describe('AddBook component', () => {
  it('should render a form', () => {
    render(<AddBook />);
     // Verify that the heading with text 'Add Book Here' is present in the rendered output
    expect(screen.getByRole('heading')).toHaveTextContent('Add Book Here');
  })
});





// import React from 'react';
// import { render, fireEvent, screen } from '@testing-library/react';
// import AddBook from '../AddBook';

// describe('AddBook', () => {
//   test('renders all form fields', () => {
//     render(<AddBook />);
//     expect(screen.getByLabelText('Title')).toBeInTheDocument();
//     expect(screen.getByLabelText('Author')).toBeInTheDocument();
//     expect(screen.getByLabelText('Description')).toBeInTheDocument();
//     expect(screen.getByLabelText('ISBN')).toBeInTheDocument();
//     expect(screen.getByLabelText('Image')).toBeInTheDocument();
//     expect(screen.getByLabelText('Price')).toBeInTheDocument();
//   });

//   test('updates the form state when input fields are changed', () => {
//     render(<AddBook />);
//     const titleInput = screen.getByLabelText('Title');
//     const authorInput = screen.getByLabelText('Author');
//     const descriptionInput = screen.getByLabelText('Description');
//     const isbnInput = screen.getByLabelText('ISBN');
//     const imageInput = screen.getByLabelText('Image');
//     const priceInput = screen.getByLabelText('Price');

//     fireEvent.change(titleInput, { target: { value: 'A Book Title' } });
//     fireEvent.change(authorInput, { target: { value: 'An Author Name' } });
//     fireEvent.change(descriptionInput, { target: { value: 'A Book Description' } });
//     fireEvent.change(isbnInput, { target: { value: '123-456-789' } });
//     fireEvent.change(imageInput, { target: { value: 'https://example.com/image.jpg' } });
//     fireEvent.change(priceInput, { target: { value: '9.99' } });

//     expect(titleInput).toHaveValue('A Book Title');
//     expect(authorInput).toHaveValue('An Author Name');
//     expect(descriptionInput).toHaveValue('A Book Description');
//     expect(isbnInput).toHaveValue('123-456-789');
//     expect(imageInput).toHaveValue('https://example.com/image.jpg');
//     expect(priceInput).toHaveValue('9.99');
//   });

//   test('calls the sendRequest function when the form is submitted', () => {
//     const sendRequest = jest.fn();
//     render(<AddBook sendRequest={sendRequest} />);
//     fireEvent.click(screen.getByText('Add Book'));
//     expect(sendRequest).toHaveBeenCalled();
//   });

//   test('resets the form state when the form is submitted', () => {
//     render(<AddBook />);
//     const titleInput = screen.getByLabelText('Title');
//     const authorInput = screen.getByLabelText('Author');
//     const descriptionInput = screen.getByLabelText('Description');
//     const isbnInput = screen.getByLabelText('ISBN');
//     const imageInput = screen.getByLabelText('Image');
//     const priceInput = screen.getByLabelText('Price');

//     fireEvent.change(titleInput, { target: { value: 'A Book Title' } });
//     fireEvent.change(authorInput, { target: { value: 'An Author Name' } });
//     fireEvent.change(descriptionInput, { target: { value: 'A Book Description' } });
//     fireEvent.change(isbnInput, { target: { value: '123-456-789' } });
//     fireEvent.change(imageInput, { target: { value: 'https://example.com/image.jpg' } });
//     fireEvent.change(priceInput, { target: { value: '9.99' } });

//     fireEvent.submit(screen.getByRole('form'));

//     expect(titleInput).toHaveValue('');
//     expect(authorInput).toHaveValue('');
//     expect(descriptionInput).toHaveValue('');
//     expect(isbnInput).toHaveValue('');
//     expect(imageInput).toHaveValue('');
//     expect(priceInput).toHaveValue('0');
//   });
// });
