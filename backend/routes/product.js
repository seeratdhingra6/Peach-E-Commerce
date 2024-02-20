const express = require("express");
const router = express.Router();

const {
  getProductFromId,
  createProduct,
  deleteProductById,
  getAllProducts,
} = require("../controllers/product.js");

// Base URL is `/product`

router.get("/all", getAllProducts);

router.get("/:id", getProductFromId);
// .get(getProductFromId)
// .post(createProduct)
// .delete(deleteProductById);

module.exports = router;
