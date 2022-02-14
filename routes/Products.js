const ProductSchema = require("../models/Product")
const express = require("express");
const {UserAuth} = require("../middlewares/UserAuth");
const auth = require("../models/auth");
const {upload} = require ("../middlewares/upload");

const ProductRoutes = express.Router();


ProductRoutes.post(
    "/Addproduct",
    UserAuth,
    upload.single("image"),
    async (req,res)=>{
        // const user = await auth.findById(req.user._id);
        try {
            const Product = new ProductSchema({...req.body,image:req.file.filename,userId:req.user._id});
            console.log(req.file);
            await Product.save();

            res.status(200).send({msg:"Product added successfully",Product});

            
        } catch (error) {
            res.status(500).send({msg:"Product can't be added",error});
            
    }});

    ProductRoutes.get("/Getproduct",async (req,res)=>{
        try {
            const Products = await ProductSchema.find();
            res.status(200).send({msg:"All products",Products});

            
        } catch (error) {
            res.status(500).send({msg:"Couldn't get all products"});
            
        }
        
    });

    ProductRoutes.get("/myproducts", async(req,res)=>{
        try {
            const myproducts= await ProductSchema.find({userId: req.user._id}).populate("userId");

            res.status(200).send({msg:"My products", myproducts});
            
        } catch (error) {

            res.status(500).send({msg:"Can't find my products", error});

            
        }
    })

    


module.exports= ProductRoutes

