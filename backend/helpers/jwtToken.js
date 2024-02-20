const jwt = require("jsonwebtoken");
const { customResponse } = require("./common");
const User = require("../models/user");

const jwtSecret = "aka43EKJGILASLekwaq";

const generateToken = async ({ email }) => {
  try {
    const token = await jwt.sign({ email }, jwtSecret, {});
    return token;
  } catch (error) {
    return error;
  }
};

const validateToken = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    console.log("DEBUG authorization", authorization, req.headers);

    if (!authorization || !authorization.startsWith("Bearer ")) {
      return customResponse({
        response: res,
        statusCode: 401,
        error: "Unauthorized: Token missing or invalid format",
      });
    }

    const token = authorization.split(" ")[1];

    if (!token) {
      return customResponse({
        response: res,
        statusCode: 401,
        error: "Unauthorized: Token missing",
      });
    }

    const { email } = await jwt.verify(token, jwtSecret);
    const userDoc = await User.findOne({ email });
    req.user = userDoc;
    next();
  } catch (error) {
    return customResponse({
      response: res,
      statusCode: 500,
      error: `Internal Server Error - ${error.message}`,
    });
  }
};

module.exports = { generateToken, validateToken };
