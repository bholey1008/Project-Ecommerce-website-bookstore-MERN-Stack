// const BookModel = require('../models/bookModel');
// const Book = require('../models/Book');
const { ObjectId } = require('mongodb');
const User = require('../models/Users');

// get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        if (!users) {
            return res.status(404).json({ success: false, message: "User Not Found" });
        }
        return res.status(200).json(users);
        // return res.status(200).json({ success: true, data: users });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

// get users by Id
// const getBookById = async (req, res) => {
//     try {
//         const id = req.params.bookId;
//         const user = await Book.findById(id);
//         if (!user) {
//             return res.status(404).json({ success: false, message: "Book Not Found" });
//         }
//         return res.status(200).json(user);
//         // return res.status(200).json({ success: true, data: user });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ success: false, message: "Internal Server Error" });
//     }
// };


// create user/ add user
const createUser = async (req, res) => {
    try {
        const user = new User(req.body); // Use object destructuring if needed
        await user.save();
        return res.status(201).json({ success: true, message: "User created successfully", data: user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};



// add to cart
const addToCart = async (req, res) => {
    try {
        const userId = req.params.userId; // get the user id from the URL parameter
        const products = req.body; // the product object to add to the cart
        // Find the user with the given id
        const user = await User.findById(ObjectId(userId));
    
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        if (user.role !== 'user') {
            return res.status(400).send('NOT ALLOWED');
        }

        // Add the product to the user's cart
        user.cart = products;
        user.save();

        return res.status(200).json({ success: true, message: "Successfully saved the cart", data: user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};



// // update user 
// const updateBook = async (req, res) => {
//     try {
//         const id = req.params.bookId;
//         const { title, author, description, isbn, price, image, available, language, pages } = req.body;
//         const user = await Book.findByIdAndUpdate(id, { title, author, description, isbn, price, image}, { new: true }); // {new: true} will update all
//         user.save();
//         if (!user) {
//             return res.status(404).json({ success: false, message: "Book not found" });
//         }
//         return res.status(200).json({ success: true, message: "Book updated successfully", data: user });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ success: false, message: "Internal Server Error" });
//     }
// };

// const deleteBook = async (req, res) => {
//     try {
//         const id = req.params.bookId;
//         const user = await Book.findByIdAndDelete(id);
//         if (!user) {
//             return res.status(404).json({ success: false, message: "Book not found" });
//         }
//         return res.status(200).json({ success: true, message: "Book deleted successfully" });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ success: false, message: "Internal Server Error" });
//     }
// };

const getCart = async (req, res) => {
    try {
        const userId = req.params.userId; // get the user id from the URL parameter
        console.log('userID: ', userId);
        const user = await User.findById(ObjectId(userId));
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        if (user.role !== 'user') {
            return res.status(400).send('NOT ALLOWED');
        }

        // Add the product to the user's cart

        return res.status(200).json(user.cart);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

const placeOrder = async (req, res) => {
    try {
        const userId = req.params.userId; // get the user id from the URL parameter
        const products = req.body; // the product object to add to the cart
        // Find the user with the given id

        const user = await User.findById(ObjectId(userId));
    
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        if (user.role !== 'user') {
            return res.status(400).send('NOT ALLOWED');
        }

        // SOME purchase process

        user.cart = [];
        user.save();

        return res.status(200).json({ success: true, message: "Successfully placed order", data: user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

module.exports = {
    createUser,
    addToCart,
    getAllUsers,
    getCart,
    placeOrder,
    /* getBookById,
    updateBook,
    deleteBook  */
}

