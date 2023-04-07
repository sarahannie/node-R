const express = require("express");
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login");
const User = require("../models/userModel")


router.get('/fodash', async(req, res)=>{
    let farmerWard = req.user["ward"]
    if(req.user.role == "fo"){
        try{
            let activeFarmers = await User.countDocuments({role: "uf", ward:farmerWard});
            let newUrbanFarmers = await User.find({role: "uf", ward:farmerWard})

            res.render("foDash", {   
                urbanFarmers: newUrbanFarmers,
                activeFarmers,
                farmerWard
                })
        }catch(err){
            console.log(err)
            res.status(400).send("could not find farmers in the data base")
        }
    }else{
        res.redirect("/login")
    }
})

module.exports = router