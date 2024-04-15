const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8000;

const routes = require('./src/routes/main');

app.use('/', routes);

// Serve static files
app.use(express.static(__dirname + '/public'));

// View engine setup
app.set('view engine', 'hbs');
app.set('views', 'views');

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
