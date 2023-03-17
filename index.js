const express = require("express");
const app = express();
const Port = 3000;
const path = require('path');
const router = express.Router();
app.use(router);

// app.get('/', (req, res) => {
//     res.send("Homepage! helloworld")
// })
// app.get('/about', (req,res) =>{
//     res.send("About page Nice.")
// })
// app.get('/contact',(req, res)=>{
//     res.send("Contact page nice.")
// })


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req,res) => {
    res.sendFile(path.join(__dirname, 'about.html' ))
})


router.get('/all', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });





app.listen(Port, ()=> console.log(`Listening to port ${Port}`))