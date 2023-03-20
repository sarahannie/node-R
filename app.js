const express = require("express");
const path = require("path");
const app = express();
const router = express.Router();
const Port = 3000;
const employeeRoute = require("./routes/employeeRoute");
const aboutRoute = require("./routes/aboutRoute");
const contactRoute = require("./routes/contactRoute")


app.set("view engine","pug");
app.set("views", path.join(__dirname,"views"))





app.use(employeeRoute);
app.use(aboutRoute);
app.use(contactRoute);


app.listen(process.env.port || Port, ()=>{
console.log(`listen to port ${Port}`)
})