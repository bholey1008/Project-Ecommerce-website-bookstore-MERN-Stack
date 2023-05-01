const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    isbn: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    
});


// Export model
module.exports = mongoose.model("books", BookSchema); //books




// { title, author, description, isbn, price, image }
//  https://upload.wikimedia.org/wikipedia/en/1/1d/Muna_Madan_-_book_cover.jpg

// {
//     "title": "Muna Madan",
//     "author": "Laxmi Prasad Devkota",
//     "description": "A tragic love story of Muna and Madan.",
//     "isbn": "abc123",
//     "price": 120,
//     "image": "https://upload.wikimedia.org/wikipedia/en/1/1d/Muna_Madan_-_book_cover.jpg"
// }