const express= require("express");

const PORT = process.env.PORT || 8000;

const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//routes
const htmlRoutes = require("./routes/htmlRoutes");

htmlRoutes(app);



app.listen(PORT, function() {
    console.log(`Listening at http://localhost:${PORT}`);
});
