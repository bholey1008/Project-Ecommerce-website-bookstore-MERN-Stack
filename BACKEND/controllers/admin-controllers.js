// // const BookModel = require('../models/bookModel');
// // const Book = require('../models/Book');
// const Admin = require('../models/Admin');

// // get all admin
// const getAllAdmins = async (req, res) => {
//     try {
//         const admin = await Admin.find();
//         if (!admin) {
//             return res.status(404).json({ success: false, message: "Book Not Found" });
//         }
//         return res.status(200).json(admin);
//         // return res.status(200).json({ success: true, data: admin });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ success: false, message: "Internal Server Error" });
//     }
// };

// // // get books by Id
// // const getBookById = async (req, res) => {
// //     try {
// //         const id = req.params.bookId;
// //         const book = await Book.findById(id);
// //         if (!book) {
// //             return res.status(404).json({ success: false, message: "Book Not Found" });
// //         }
// //         return res.status(200).json(book);
// //         // return res.status(200).json({ success: true, data: book });
// //     } catch (error) {
// //         console.error(error);
// //         return res.status(500).json({ success: false, message: "Internal Server Error" });
// //     }
// // };


// // create book/ add book
// const createAdmin = async (req, res) => {
//     try {
//         const admin = new Admin(req.body); // Use object destructuring if needed
//         await admin.save();
//         return res.status(201).json({ success: true, message: "Admin created successfully", data: admin });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ success: false, message: "Internal Server Error" });
//     }
// };

// // // update admin 
// // const updateBook = async (req, res) => {
// //     try {
// //         const id = req.params.bookId;
// //         const { title, author, description, isbn, price, image, available, language, pages } = req.body;
// //         const book = await Book.findByIdAndUpdate(id, { title, author, description, isbn, price, image}, { new: true }); // {new: true} will update all
// //         book.save();
// //         if (!book) {
// //             return res.status(404).json({ success: false, message: "Book not found" });
// //         }
// //         return res.status(200).json({ success: true, message: "Book updated successfully", data: book });
// //     } catch (error) {
// //         console.error(error);
// //         return res.status(500).json({ success: false, message: "Internal Server Error" });
// //     }
// // };

// // const deleteBook = async (req, res) => {
// //     try {
// //         const id = req.params.bookId;
// //         const book = await Book.findByIdAndDelete(id);
// //         if (!book) {
// //             return res.status(404).json({ success: false, message: "Book not found" });
// //         }
// //         return res.status(200).json({ success: true, message: "Book deleted successfully" });
// //     } catch (error) {
// //         console.error(error);
// //         return res.status(500).json({ success: false, message: "Internal Server Error" });
// //     }
// // };





// module.exports = {
//     createAdmin,
//     getAllAdmins,
//     /*  
//     getBookById,
//     updateBook,
//     deleteBook */
// }

