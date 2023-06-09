const express = require("express");
const multer = require("multer");
const Product = require("../../models/product")
const router = express.Router();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'public/images');
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    }
  });

const upload = multer({ storage: storage });


router.get("/addproduct", (req,res)=>{
    res.render("urbanfarmer/addingProduct")
})

router.post("/addproduct",upload.single("image"), async(req,res)=>{
    try{
        // Create a new product from the form data
        const newProduct = new Product(req.body);
        newProduct.image = '../images/' + req.file.filename 
        newProduct.userId = req.user.id
        // saving the product
        await newProduct.save();
        res.redirect("/addproduct")
        }catch(err){
        console.log(err)
        res.status(400).render("urbanfarmer/addingProduct")
    }

})
router.post("/urbanfarmer",upload.single("image"), async(req,res)=>{
    try{
        // Create a new product from the form data
        const newProduct = new Product(req.body);
        newProduct.image = '../images/' + req.file.filename 
        newProduct.userId = req.user.id
        // saving the product
        await newProduct.save();
        res.redirect("/urbanfarmer")
        }catch(err){
        console.log(err)
        res.status(400).render("urbanfarmer/index")
    }

})





module.exports = router;