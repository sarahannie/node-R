const express = require("express");
const path = require("path");
const Port = 3000;
const bodyParser = require("body-parser");
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require("./middleware/auth");


require("dotenv").config();

// router start landing page
const cartRoute = require("./routes/cartRoute");
const indexRoute = require("./routes/indexRoute");
const serviceRoute = require("./routes/serviceRoute");
const signinRoute = require("./routes/signinRoute");
const signupconstumerRouter = require("./routes/signupconsumerRouter");
const signupfarmerRouter = require("./routes/signupfarmerRoute");
// router  for admin
const indexao = require("./routes/AgriOffice/indexRouter");
const registAdmin = require("./routes/AgriOffice/registerAdminRouter");
const registFarmOne = require("./routes/AgriOffice/registerFarmo");
// farmone route
const indexFO = require("./routes/farmone/indexRoute");
// router for urbanFarmer
const adding = require("./routes/urbanfarmer/addingRoute");
const indexuf = require("./routes/urbanfarmer/indexRoute");
// router stop

const app = express();

app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.authenticate('session'));

// Configure passport middleware
app.use(passport.initialize());
app.use(passport.session());
  


app.use((req, res, next) => {
  console.log(`${req.method} ${req.baseUrl}${req.url}`);
  next();
});

// use a middle for public folder
app.use(express.static("public"));

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// require("dotenv").config();
const config = require("./config/database");
//starting to add database

//creating a connection between the controller and the database
mongoose.connect(config.database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

//checking for the err in the mongodb
db.on("error", (err) => {
  console.log(err);
});

// checking if database has connected
db.once("open", () => {
  console.log("connected to db");
});

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.set("views", path.join(__dirname, "views", "page"));

app.use(cartRoute);
app.use(indexRoute);
app.use(serviceRoute);
app.use(signinRoute);
app.use(signupconstumerRouter);
app.use(signupfarmerRouter);
// app use for agriculture office
app.use(indexao);
app.use(registAdmin);
app.use(registFarmOne);
// app use for farmone
app.use(indexFO);
// app use for urbanfarmers
app.use(adding);
app.use(indexuf);



// app.get("*", (req, res) => {
//   res.status(404).send("page does not exist");
// });

app.listen(process.env.port || Port, () => {
  console.log(`listen to port ${Port}`);
});

