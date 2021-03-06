const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./keys").mongoURI;
const mongoose = require("mongoose");
const passport = require("passport");

// passport configuration
require("./passport");
// passport middleware
app.use(passport.initialize());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());

app.listen(port, () => {
  console.log("Server is running on " + port + " port");
});

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connection to Mongo DB established"))
  .catch(err => console.log(err));

app.use("/cities", require("./routes/cities"));
app.use("/itineraries", require("./routes/itineraries"));
app.use("/activities", require("./routes/activities"));
app.use("/users", require("./routes/users"));
app.use("/login", require("./routes/login"));
//route comments

app.use(
  "/comments",
  passport.authenticate("jwt", { session: false }),
  require("./routes/comments")
);

//endpoint ruta comments sin auth
app.use("/getComments", require("./routes/getComments"));

// app.use("/favourites", require("./routes/favourites"));
