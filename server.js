require('dotenv').config();
require('./config/database');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors'); // Add this line
const verifyToken = require('./middleware/verify-token');

// Controllers
const testJWTRouter = require('./controllers/test-jwt');
const usersRouter = require('./controllers/users');
const profilesRouter = require('./controllers/profiles');
const questionsRouter = require('./controllers/products.js')

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json());
app.use(morgan('dev'));
app.use(cors()); // Add this line

// Public Routes
app.use('/test-jwt', testJWTRouter);
app.use('/users', usersRouter);
app.use('/products', questionsRouter)

// Protected Routes
app.use(verifyToken);
app.use('/profiles', profilesRouter);
app.listen(3000, () => {
  console.log('The express app is ready!');
});