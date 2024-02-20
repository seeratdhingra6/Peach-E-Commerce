const express = require("express");
const router = express.Router();

const { registerUser, loginUser, getProfile } = require("../controllers/auth");
const { validateToken } = require("../helpers/jwtToken");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/profile", validateToken, getProfile);

module.exports = router;
