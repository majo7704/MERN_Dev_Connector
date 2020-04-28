//require express
const express = require('express');
const colors = require('colors');
const connectDB = require('./config/db');

//initialize app variable
const app = express();
//Connect Database
connectDB();

//INIT middleware for req.body to work
app.use(express.json({ extended: false }));

//creating a single end point
app.get('/', (req, res) => res.send('API running'));

//Define ROUTES
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

//set up PORT variable
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`.rainbow.bold)
);
