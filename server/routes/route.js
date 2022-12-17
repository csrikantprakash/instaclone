const router = require('express').Router();
const Blog = require('../model/Blog');
const moment = require('moment');
var crypto = require('crypto');
var cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');
dotenv.config();

cloudinary.config({ 
    cloud_name: process.env.CLOUD, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET,
    secure: true
  });
  
router.get("/blog", async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    try{
        const posts = await Blog.find();
        res.json({
            status: "Success",
            posts
        })

    }catch(e) {
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
});
router.post("/blog", async (req, res) => {
    const {author, description, img, location} = req.body;
    try{
        const uploadedImage = await cloudinary.uploader.upload(img,{
            upload_preset: 'unsigned_images'
        })
        const data = {};
        data["name"]=author;
        data["description"]=description;
        data["image"]=uploadedImage.secure_url;
        data["location"]=location;
        data["date"]=moment().format('L');
        console.log(data);
        await Blog.create(data);
        res.json({
                data
            })
    }catch(e){
        console.log(e);
    }
    

});
router.post("/blogAxios", async (req, res) => { 
        const {image} = req.body;
        const uploadedImage = await cloudinary.uploader.upload(image,{
            upload_preset: 'unsigned_images'
        })
        console.log(uploadedImage.secure_url)
        res.json({
            status: "Success",
        })

});
module.exports = router;