const express = require("express");
const app = express();
const Port = 3000;

app.get('/', (req, res) => {
    res.send("Homepage! helloworld")
})


app.listen(Port, ()=> console.log(`Listening to port ${Port}`))