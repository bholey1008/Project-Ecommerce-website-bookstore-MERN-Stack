// const BookModel = require('../models/bookModel');
// const Book = require('../models/Book');
const Book = require('../models/Book');

// get all books
const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        if (!books) {
            return res.status(404).json({ success: false, message: "Book Not Found" });
        }
        return res.status(200).json(books);
        // return res.status(200).json({ success: true, data: books });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

// get books by Id
const getBookById = async (req, res) => {
    try {
        const id = req.params.bookId;
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ success: false, message: "Book Not Found" });
        }
        return res.status(200).json(book);
        // return res.status(200).json({ success: true, data: book });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};


// create book/ add book
const createBook = async (req, res) => {
    try {
        const book = new Book(req.body); // Use object destructuring if needed
        await book.save();
        return res.status(201).json({ success: true, message: "Book created successfully", data: book });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

// update book 
const updateBook = async (req, res) => {
    try {
        const id = req.params.bookId;
        const { title, author, description, isbn, price, image, available, language, pages } = req.body;
        const book = await Book.findByIdAndUpdate(id, { title, author, description, isbn, price, image}, { new: true }); // {new: true} will update all
        book.save();
        if (!book) {
            return res.status(404).json({ success: false, message: "Book not found" });
        }
        return res.status(200).json({ success: true, message: "Book updated successfully", data: book });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

const deleteBook = async (req, res) => {
    try {
        const id = req.params.bookId;
        const book = await Book.findByIdAndDelete(id);
        if (!book) {
            return res.status(404).json({ success: false, message: "Book not found" });
        }
        return res.status(200).json({ success: true, message: "Book deleted successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};





module.exports = {
    createBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook
}

