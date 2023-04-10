const express = require("express");
const path = require("path");
const app = express();
const router = express.Router();
const Port = 3000;
const bodyParser = require("body-parser")
const session = require("express-session")
const passport = require("passport")
const User = require("./models/userModel")


require("dotenv").config()



// router start landing page
const cartRoute = require("./routes/cartRoute");
const contactRoute = require("./routes/contactRoute");
const indexRoute = require("./routes/indexRoute")
const paymentRoute = require("./routes/paymentRoute");
const serviceRoute = require("./routes/serviceRoute")
const signinRoute = require("./routes/signinRoute");
const signupconstumerRouter = require("./routes/signupconsumerRouter")
const signupfarmerRouter = require("./routes/signupfarmerRoute")
const signup = require("./routes/signup")

// router  for admin 
const indexao = require("./routes/AgriOffice/indexRouter")
const registAdmin = require("./routes/AgriOffice/registerAdminRouter")
const registFarmOne = require("./routes/AgriOffice/registerFarmo")
const registeredUf = require("./routes/AgriOffice/registeredUf")
const registeredAdmin = require("./routes/AgriOffice/registeredAdRouter")
const registeredfarmone  = require("./routes/AgriOffice/registeredFarmoneRouter")
const registereduser  = require("./routes/AgriOffice/registeredUserRouter")
const setting  = require("./routes/AgriOffice/settingRouter")
const sale  = require("./routes/AgriOffice/slaleRouter")


// farmone route
const indexFO = require("./routes/farmone/indexRoute")
const registerfarmer = require("./routes/farmone/register-farmer")
const registeredUser = require("./routes/farmone/registered-user")
const registeredfarmer = require("./routes/farmone/registered-uf")
const salesfarmerone= require("./routes/farmone/sale")
const settingfarmerone= require("./routes/farmone/setting")

// router for urbanFarmer
const indexuf = require("./routes/urbanfarmer/indexRoute")
const adding = require("./routes/urbanfarmer/addingRoute")
const updating = require("./routes/urbanfarmer/updateRoute")
const order = require("./routes/urbanfarmer/orderRoute")
const settinguf = require("./routes/urbanfarmer/settingRoute")

// router stop



app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized:false
}))

app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    console.log(`${req.baseUrl}${req.url}`);
    next();
})

// use a middle for public folder
app.use(express.static('public'))  

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));


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

//checking for the err in the mongodb
db.on("error", (err)=>{
    console.log(err)
})

// checking if database has connected
db.once("open", ()=>{
    console.log("connected to db")
})



app.set("view engine","pug");
app.set("views", path.join(__dirname,"views"))
app.set("views", path.join(__dirname,"views","page"))




app.use(cartRoute);
app.use(contactRoute);
app.use(indexRoute)
app.use(paymentRoute)
app.use(serviceRoute)
app.use(signinRoute)
app.use(signupconstumerRouter)
app.use(signupfarmerRouter)
app.use(signup)

// app use for agriculture office
app.use(indexao)
app.use(registAdmin)
app.use(registFarmOne)
app.use(registeredUf)
app.use(registeredAdmin)
app.use(registeredfarmone)
app.use(registereduser)
app.use(setting )
app.use(sale)


// app use for farmone
app.use(indexFO)
app.use(registerfarmer)
app.use(registeredUser)
app.use(registeredfarmer)
app.use(salesfarmerone)
app.use(settingfarmerone)


// app use for urbanfarmers
app.use(indexuf);
app.use(adding);
app.use(updating);
app.use(order);
app.use(settinguf);


app.get("*",(req,res)=>{
    res.status(404).send("page does not exist")
})


app.listen(process.env.port || Port, ()=>{
console.log(`listen to port ${Port}`)
})