const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: String,
  Description: String,
  Price: Number,
  userId: { type: mongoose.Schema.Types.ObjectId }, 
});
module.exports = mongoose.model("Product", ProductSchema);