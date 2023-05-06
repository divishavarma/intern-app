const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const bcrypt = require('bcrypt');
const cors = require('cors');
require('dotenv').config();



const app = express();
// Set up middleware to parse incoming requests
app.use(express.urlencoded({ extended:  true}));
app.use(express.json());
app.use(cors());

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const cluster = process.env.DB_CLUSTER;
const dbName = process.env.DB_NAME;

// Connect to MongoDB database
mongoose.connect('mongodb+srv://admin-divi:ginni25@cluster0.jjgclos.mongodb.net/internAppDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const uri = `mongodb+srv://${username}:${password}@${cluster}/${dbName}`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// mongoose.connect('mongodb+srv://admin-divi:ginni25@cluster0.jjgclos.mongodb.net/internAppDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// Create a schema for user data
const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: { type: String, unique: true },
  job_role: String,
  address: String,
  city: String,
  pincode: Number,
  date: Date,
  resume: String,
});


// Create a model for user data
const User = mongoose.model('User', userSchema);


// Set up file storage using multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });



// Set up routes for handling user data
app.post('/api/user', upload.single('resume'), async (req, res) => {
  try {
    const { firstName, lastName, email, jobRole, address, city, pincode, date } = req.body;

    const user = new User({
      firstName,
      lastName,
      email,
      jobRole,
      address,
      city,
      pincode,
      date,
      resume: req.file.path,
    });

    await user.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

// Start the server
app.listen(9002, () => {
  console.log("BE started at port 9002");
});






// const express = require('express');
// const mongoose = require('mongoose');
// const multer = require('multer');
// const bcrypt = require('bcrypt');
// const cors = require('cors');
//
//
//
// const app = express();
// // Set up middleware to parse incoming requests
// app.use(express.urlencoded({ extended:  true}));
// app.use(express.json());
// app.use(cors());
//
//
// // Connect to MongoDB database
// mongoose.connect('mongodb://127.0.0.1:27017/internAppDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   // useCreateIndex: true,
// });
//
// // Create a schema for user data
// const userSchema = new mongoose.Schema({
//   first_name: String,
//   last_name: String,
//   email: { type: String, unique: true },
//   job_role: String,
//   address: String,
//   city: String,
//   pincode: Number,
//   date: Date,
//   resume: String,
// });
//
//
// // Create a model for user data
// const User = mongoose.model('User', userSchema);
//
//
// // Set up file storage using multer
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './uploads');
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname);
//   },
// });
//
// const upload = multer({ storage: storage });
//
//
//
// // Set up routes for handling user data
// app.post('/api/user', upload.single('resume'), async (req, res) => {
//   try {
//     const { firstName, lastName, email, jobRole, address, city, pincode, date } = req.body;
//
//     const user = new User({
//       firstName,
//       lastName,
//       email,
//       jobRole,
//       address,
//       city,
//       pincode,
//       date,
//       resume: req.file.path,
//     });
//
//     await user.save();
//
//     res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'An error occurred' });
//   }
// });
//
// // Start the server
// app.listen(9002, () => {
//   console.log("BE started at port 9002");
// });
