const express = require("express");
const path = require("path");
const app = express();
const router = express.Router();
const Port = 3000;
const aboutRoute = require("./routes/aboutRoute");
const cartRoute = require("./routes/cartRoute");
const contactRoute = require("./routes/contactRoute");
const indexRoute = require("./routes/indexRoute")
const paymentRoute = require("./routes/paymentRoute");
const serviceRoute = require("./routes/serviceRoute")
const signinRoute = require("./routes/signinRoute");
const signupconstumerRouter = require("./routes/signupconsumerRouter")
const signupfarmerRouter = require("./routes/signupfarmerRoute")
const signup = require("./routes/signup")

// require("dotenv").config();
const config = require("./config/database")
//starting to add database

const mongoose = require("mongoose");


//creating a connection between the controller and the database
mongoose.connect(config.database,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection

// checking if database has connected
db.once("open", ()=>{
    console.log("connected to db")
})
//checking for the err in the mongodb
db.on("error", (err)=>{
    console.error(err)
})


app.set("view engine","pug");
app.set("views", path.join(__dirname,"views"))
app.set("views", path.join(__dirname,"views","page"))


app.use(express.static(path.join(__dirname,"public")))

app.use(cartRoute);
app.use(aboutRoute);
app.use(contactRoute);
app.use(indexRoute)
app.use(paymentRoute)
app.use(serviceRoute)
app.use(signinRoute)
app.use(signupconstumerRouter)
app.use(signupfarmerRouter)
app.use(signup)


app.listen(process.env.port || Port, ()=>{
console.log(`listen to port ${Port}`)
})