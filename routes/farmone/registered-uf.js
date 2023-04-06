const express = require("express");
const router = express.Router();


router.get("/reg-uf", (req,res)=>{
    res.render("farmerOne/registerd-uf")
})



module.exports = router;