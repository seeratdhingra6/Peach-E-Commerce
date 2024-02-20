const { customResponse } = require("../helpers/common");
const Product = require("../models/product");

const getProductFromId = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return customResponse({
        response: res,
        statusCode: 422,
        error: "Product not found",
      });
    }

    return customResponse({ response: res, statusCode: 200, result: product });
  } catch (error) {
    return customResponse({ response: res, statusCode: 500, error });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, price, description, rating, category, image } = req.body;

    // checking if product is already available or not
    const productDoc = await Product.findOne({ name });
    if (productDoc) {
      return customResponse({
        response: res,
        statusCode: 422,
        error: "Product with this name already exists",
      });
    }

    // if product not exist creating new product
    const newProduct = await Product.create({
      name,
      price,
      description,
      rating,
      category,
      image,
    });

    return customResponse({
      response: res,
      statusCode: 201,
      result: newProduct,
    });
  } catch (error) {
    return customResponse({ response: res, statusCode: 500, error });
  }
};

const deleteProductById = async (req, res) => {
  try {
    const { id } = req.query;
    const product = await Product.findOne({ _id: id });
    if (!product) {
      return customResponse({
        response: res,
        statusCode: 422,
        error: "Requested product not found",
      });
    }

    Product.deleteOne({ _id: id }, (error, product) => {
      if (error) {
        return customResponse({
          response: res,
          statusCode: 422,
          error,
        });
      }

      return customResponse({
        response: res,
        statusCode: 204,
        result: product,
      });
    });
  } catch (error) {
    return customResponse({ response: res, statusCode: 500, error });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    return customResponse({
      response: res,
      statusCode: 200,
      result: allProducts,
    });
  } catch (error) {
    return customResponse({
      response: res,
      statusCode: 500,
      error,
    });
  }
};

module.exports = {
  getProductFromId,
  createProduct,
  deleteProductById,
  getAllProducts,
};
