const express = require("express");
const path = require("path");
const app = express();
const router = express.Router();
const Port = 3000;
app.use(router);

app.set("view engine","pug");
app.set("views", path.join(__dirname,"views"))

router.get('/', (req, res)=>{
    res.render("employee")
})

router.get('/about', (req, res)=>{
    res.render("about",{title:"Hello", message: "How are you doing"})
})

app.listen(process.env.port || Port, ()=>{
console.log(`listen to port ${Port}`)
})