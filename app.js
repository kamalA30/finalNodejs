const express = require("express");
const mongoose = require("mongoose");
const url = 'mongodb+srv://orand:OOMxtoyRJgNAoIHS@cluster0.geg8kuq.mongodb.net/test'

const app = express();

// conenction to mongodb
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");



// routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))
app.use(require("./routes/user"))


// server configurations....
app.listen(5000, () => console.log("Server started listening on port: 5000"));
