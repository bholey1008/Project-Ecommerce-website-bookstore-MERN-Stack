const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true  },
    role: { type: String, required: true, enum: ['admin', 'user']  },
    cart: [{ type: {
        count: Number,
        image: String,
        isbn: String,
        price: Number,
        title: String
    }}]
});

// Export model
module.exports = mongoose.model("users", UserSchema);

// {
//     "firstName": "Saroj",
//     "lastName": "Regmi",
//     "email": "esregmi@gmail.com",
//     "mobileNumber": "977984500123",
//     "password": "miu",
//     "gender": "male",
//     "cart": []
// }