const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//database
mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.h14wr.mongodb.net/workouts?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });

//routes
const htmlRoutes = require("./routes/htmlRoutes");

htmlRoutes(app);

app.listen(PORT, function () {
    console.log(`Listening at http://localhost:${PORT}`);
});
