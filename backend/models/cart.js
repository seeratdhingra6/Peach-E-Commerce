const mongoose = require("mongoose");

const CartItemSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: Number,
});

const CartItem = mongoose.model("CartItem", CartItemSchema);

module.exports = CartItem;
