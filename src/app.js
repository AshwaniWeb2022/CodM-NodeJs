const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");
const app = express();

const routes = require('./routes/main');

app.use('/', routes);

// static/css/image/
app.use('/static', express.static("public"));

// view engine
app.set('view engine', 'hbs');
app.set("views", "views");

// DB connect
mongoose.connect("mongodb://localhost/website_tut")
    .then(() => {
        console.log("DB connected");
        app.listen(process.env.PORT || 8000, () => {
            console.log("Server started");
        });
    })
    .catch(err => console.error("DB connection error:", err));
