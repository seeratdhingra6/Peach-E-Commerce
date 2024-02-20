const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  price: String,
  rating: String,
  description: String,
  category: String,
  image: String,
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
