const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const Product = require("./models/product");
const CartItem = require("./models/cart");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(cookieParser());

const jwtSecret = "aka43EKJGILASLekwaq";

mongoose.connect(
  "mongodb+srv://ashishsingla18:B0QCe2fgl0q4chya@cluster0.7mrmiav.mongodb.net/?retryWrites=true&w=majority"
);

app.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // checking if email already exists
    const userDocument = await User.findOne({ email });
    if (userDocument) {
      return res.status(422).json(`Duplicate user found with email ${email}`);
    }

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: bcrypt.hashSync(password, 10),
    });

    jwt.sign({ email: user.email, id: user._id }, jwtSecret, (error, token) => {
      if (error) {
        throw error;
      }
      return res.json({
        message: "login successfully",
        user: {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          token,
        },
      });
    });
  } catch (error) {
    return res.status(422).send(error);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // checks if email is invalid
  const userDocument = await User.findOne({ email });
  if (!userDocument) {
    return res.status(422).json("Email address not found");
  }

  // checks if password matched or not
  const isPasswordMatched = bcrypt.compareSync(password, userDocument.password);
  if (!isPasswordMatched) {
    return res.status(422).json("Password does not matched");
  }

  jwt.sign(
    { email: userDocument.email, id: userDocument._id },
    jwtSecret,
    {},
    (error, token) => {
      if (error) {
        throw error;
      }
      return res.status(200).json({
        message: "login successfully",
        user: {
          id: userDocument._id,
          firstName: userDocument.firstName,
          lastName: userDocument.lastName,
          email: userDocument.email,
          token,
        },
      });
    }
  );
});

app.get("/profile", async (req, res) => {
  const { token, email } = req.query;
  console.log("DEBUG email", email);
  if (token) {
    try {
      const user = await jwt.verify(token, jwtSecret);
      if (user) {
        const userDocument = await User.findOne({ _id: user.id });
        return res.status(200).json({
          user: {
            id: userDocument._id,
            firstName: userDocument.firstName,
            lastName: userDocument.lastName,
            email: userDocument.email,
            token,
          },
        });
      }
    } catch (error) {
      console.log("DEBUG error", error);
      return res.status(500).json({ error });
    }
  }

  if (email) {
    console.log("DEBUG inside if", email);
    const userDocument = await User.findOne({ email });
    return jwt.sign(
      { email: userDocument.email, id: userDocument._id },
      jwtSecret,
      {},
      (error, token) => {
        if (error) {
          console.log("DEBUG error", error);
          throw error;
        }
        console.log("DEBUG working fine...");
        return res.status(200).json({
          message: "login successfully",
          user: {
            id: userDocument._id,
            firstName: userDocument.firstName,
            lastName: userDocument.lastName,
            email: userDocument.email,
            token,
          },
        });
      }
    );
  }
  return res.status(422).json("User not found");
});

app.post("/logout", (req, res) => {
  res.clearCookie("authToken");
  res.json({ message: "Logout successful" });
});

// get products list
app.get("/products", async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200).json(allProducts);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// get product by id
app.get("/product", async (req, res) => {
  const { id } = req.query;
  const particularProduct = await Product.findOne({ _id: id });
  if (!particularProduct) {
    return res.status(422).json("Product not found");
  }
  res.json(particularProduct);
});

// add new product
app.post("/product", async (req, res) => {
  const { name, price, description, rating, category, image } = req.body;
  try {
    const productDoc = await Product.findOne({ name });
    if (productDoc) {
      return res.status(422).json("Product with this name already exists");
    }
    const newProduct = await Product.create({
      name,
      price,
      description,
      rating,
      category,
      image,
    });
    res
      .status(201)
      .json({ message: "Product created successfully", newProduct });
  } catch (err) {
    res.send(500).json(err);
  }
});

app.delete("/product", async (req, res) => {
  const { id } = req.query;
  const product = await Product.findOne({ _id: id });
  if (!product) {
    return res.status(422).json("Id not found");
  }

  Product.deleteOne({ _id: id }, (err, result) => {
    if (err) {
      return res.status(422).json({ message: "Deletion failed", error: err });
    }
    res.send(204).json({ message: "Deleted Successfully", product });
  });
});

// to add items into cart
app.post("/cartItems", async (req, res) => {
  const { token, productId, quantity } = req.body;
  const user = await jwt.verify(token, jwtSecret);

  // checks if product already exists
  const product = await CartItem.findOne({ productId });
  if (product) {
    const updatedCartItem = await CartItem.findOneAndUpdate(
      { productId },
      { $set: { quantity: 0 + quantity } },
      { new: true }
    );
    return res.status(200).json({
      message: "Product updated successfully",
      cartItem: updatedCartItem,
    });
  }
  const cartItems = await CartItem.create({
    userId: user.id,
    productId,
    quantity: quantity,
  });
  res.status(201).json({ cartItems });
});

// get cart details
app.get("/cart", async (req, res) => {
  const { token } = req.query;
  try {
    const user = await jwt.verify(token, jwtSecret);

    // Fetch all cart items for the user
    const cartItems = await CartItem.find({ userId: user.id });

    // Create a mapping of product IDs to an array of CartItems
    const productsById = cartItems.reduce((acc, cartItem) => {
      const productId = cartItem.productId;
      if (!acc[productId]) {
        acc[productId] = [];
      }
      acc[productId].push(cartItem);
      return acc;
    }, {});

    // Fetch product details for the products in the cart
    const productIds = Object.keys(productsById);
    const productsDetails = await Product.find({ _id: { $in: productIds } });

    // Combine product details with quantity information
    const productsWithQuantity = productsDetails.map((product) => {
      const cartItemsForProduct = productsById[product._id] || [];
      const totalQuantity = cartItemsForProduct.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      return {
        ...product.toObject(), // Convert Mongoose document to plain object
        quantity: totalQuantity,
      };
    });

    res.status(200).json(productsWithQuantity);
  } catch (error) {
    console.error("Error fetching cart details:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen("3001");
