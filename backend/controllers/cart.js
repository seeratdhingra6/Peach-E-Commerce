const { default: mongoose } = require("mongoose");
const { customResponse } = require("../helpers/common");
const CartItem = require("../models/cart");
const Product = require("../models/product");

const getCartItems = async (req, res) => {
  try {
    const { _id } = req.user;

    console.log("DEBUG _id", _id);

    // Fetch all cart items for the user
    const cartItems = await CartItem.find({ userId: _id });
    console.log("DEBUG cartItems", cartItems);

    const productsById = cartItems.reduce((acc, cartItem) => {
      acc[cartItem.productId] = cartItem;
      return acc;
    }, {});

    console.log("DEBUG productsById", productsById);

    // Fetch product details for the products in the cart
    const productIds = cartItems.map(({ productId }) => productId);
    console.log("DEBUG productIds", productIds);
    const productsDetails = await Product.find({ _id: { $in: productIds } });
    // const productsDetails = await Product.findById(productIds[0]);

    // Combine product details with quantity information
    const productsWithQuantity = productIds.map((productId, index) => {
      console.log("DEBUG result", productsDetails[index], productsDetails);
      const {
        name,
        description,
        brand,
        rating,
        time,
        category,
        image,
        price,
        _id,
      } = productsDetails[index];
      return {
        name,
        description,
        brand,
        rating,
        time,
        category,
        image,
        price,
        _id,
        quantity: productsById[productId].quantity,
      };
    });
    return customResponse({
      response: res,
      statusCode: 200,
      result: productsWithQuantity,
    });
  } catch (error) {
    return customResponse({
      response: res,
      statusCode: 500,
      error: error.message,
    });
  }
};

const addItemToCart = async (req, res) => {
  try {
    const user = req.user;
    const { productId, quantity } = req.body;

    console.log("DEBUG user", user);

    // checks if product already exists then updating quantity
    const existingCartItem = await CartItem.findOne({
      productId,
      userId: user._id,
    });
    console.log("DEBUG existingCartItem", existingCartItem);
    if (existingCartItem) {
      await CartItem.findOneAndUpdate(
        { productId, userId: user._id },
        { $inc: { quantity: quantity } },
        { new: true }
      );
      return customResponse({
        response: res,
        statusCode: 201,
        result: "Cart Updated Successfully",
      });
    }

    // If product is not available then creating new entry
    await CartItem.create({
      userId: user._id,
      productId,
      quantity: Number(quantity),
    });
    customResponse({
      response: res,
      statusCode: 201,
      result: "Item added successfully to cart!",
    });
  } catch (error) {
    return customResponse({
      response: res,
      statusCode: 500,
      error: error.message,
    });
  }
};

module.exports = { getCartItems, addItemToCart };
