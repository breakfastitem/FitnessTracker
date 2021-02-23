const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

require("dotenv").config();

const PORT = process.env.PORT || 8000;

const app = express();

morgan.token('body', function(req,res){return console.log(req.body)});

//middleware
app.use(morgan(':method :url :status :body'));
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
const db = require("./models");

//routes
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes= require("./routes/apiRoutes");

htmlRoutes(app);
apiRoutes(app,db);

app.listen(PORT, function () {
    console.log(`Listening at http://localhost:${PORT}`);
});
