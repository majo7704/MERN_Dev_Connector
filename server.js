//require express
const express = require('express');
//initialize app variable
const app = express();

//creating a single end point
app.get('/', (req, res) => res.send('API running'));

//set up PORT variable
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
