const express = require("express");
const mongoose = require("mongoose");
const bookModel = require('./models/Book');
const bookRoute = require('./routes/book-routes');
const usersRoute = require('./routes/users-routes');
const authRoute = require('./routes/auth-routes');


const cors = require('cors');



const app = express();
const PORT = 4000;

// Enable CORS for all routes
app.use(cors());


// Set up mongoose connection
//password:  QxcxdTpGRT4aPLa5

const url = 'mongodb+srv://esregmi:QxcxdTpGRT4aPLa5@react-project.0fa2dnf.mongodb.net/BookstoreDB';
mongoose.set("strictQuery", false);
const mongoDB = url;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log("DB connected...");
}

// middleware
app.use(express.json());

// Router middleware
app.use('/books',bookRoute);
app.use('/users',usersRoute);
// app.use('/admin',adminRoute);
app.use('/auth', authRoute)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/books`);
});



 //src: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
