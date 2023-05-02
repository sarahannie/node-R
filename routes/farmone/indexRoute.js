const express = require("express");
const router = express.Router();
const Product = require("../../models/product")
const connectEnsureLogin = require("connect-ensure-login")


router.get("/farmone", connectEnsureLogin.ensureLoggedIn("/signin"), (req,res)=>{
    res.render("farmerOne/index")
})

router.get("/farmer", (req,res)=>{
    res.render("farmerOne/register-farmer")
})

router.get("/reg-uf", (req,res)=>{
    res.render("farmerOne/registerd-uf")
})


router.get("/reg-user", (req,res)=>{
    res.render("farmerOne/registered-user")
})



router.get("/sales", (req,res)=>{
    res.render("farmerOne/sale")
})

router.get("/settings", (req,res)=>{
    res.render("farmerOne/setting")
})

router.get("/approve", async(req,res)=>{

    try{
        const items = await Product.find();
        res.render("farmerOne/approve", {products: items})
    } catch(err){
        console.log(err)
        res.status(500).send("Failed to retrieve product details")
    } 
})

router.post("/approve/delete", async(req,res)=>{
    try{
        await Product.deleteOne({_id: req.body.id})
        res.redirect("back")
    }catch(err){
        console.log(err)
        res.send(" failed to delete product details")
    }
})

// Route to approve a product
router.post('/approve', async (req, res) => {
    try {
      const productId = req.body._id;
      const product = await Product.findById(productId);
      console.log(product)
      if (!product) {
        return res.status(404).send('Product not found');
      }
  
      product.approvalStatus = 'approved';
      await product.save();
  
      res.redirect('back');
    } catch (err) {
      console.log(err);
      res.status(500).send('Failed to approve product');
    }
  });
  
  // Route to deny a product
  router.post('/deny', async (req, res) => {
    try {
      const productId = req.body._id;
      const product = await Product.findById(productId);
        console.log(product)
      if (!product) {
        return res.status(404).send('Product not found');
      }
  
      product.approvalStatus = 'denied';
      await product.save();
  
      res.redirect('back');
    } catch (err) {
      console.log(err);
      res.status(500).send('Failed to deny product');
    }
  });
  
  // Route to set a product to pending
  router.post('/pending', async (req, res) => {
    try {
      const productId = req.body._id;
      const product = await Product.findById(productId);
  
      if (!product) {
        return res.status(404).send('Product not found');
      }
  
      product.approvalStatus = 'pending';
      await product.save();
  
      res.redirect('back');
    } catch (err) {
      console.log(err);
      res.status(500).send('Failed to set product to pending');
    }
  });
  

module.exports = router;