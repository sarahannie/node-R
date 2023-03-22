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
const signinRoute = require("./routes/signinRoute")


app.set("view engine","pug");
app.set("views", path.join(__dirname,"views"))
app.set("views", path.join(__dirname,"views","page"))


app.use(express.static("public"))

app.use(cartRoute);
app.use(aboutRoute);
app.use(contactRoute);
app.use(indexRoute)
app.use(paymentRoute)
app.use(serviceRoute)
app.use(signinRoute)


app.listen(process.env.port || Port, ()=>{
console.log(`listen to port ${Port}`)
})