const { getResponseFormat, customResponse } = require("../helpers/common");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const { generateToken } = require("../helpers/jwtToken");

const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // checking if email already exists
    const userDocument = await User.findOne({ email });
    if (userDocument) {
      return customResponse({
        response: res,
        statusCode: 422,
        error: "user already exists",
      });
    }

    // if email not found then creating new user in database
    await User.create({
      firstName,
      lastName,
      email,
      password: bcrypt.hashSync(password, 10),
    });

    // TODO: handle error
    const token = await generateToken({ email });

    return customResponse({
      response: res,
      statusCode: 200,
      result: { token },
    });
  } catch (error) {
    return customResponse({
      response: res,
      statusCode: 500,
      error: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // checks if email is invalid
    const userDocument = await User.findOne({ email });
    if (!userDocument) {
      return customResponse({
        response: res,
        statusCode: 422,
        error: "Email address not found",
      });
    }

    // checks if password matched or not
    const isPasswordMatch = bcrypt.compareSync(password, userDocument.password);
    if (!isPasswordMatch) {
      return customResponse({
        response: res,
        statusCode: 422,
        error: "Password does not match",
      });
    }

    const token = await generateToken({ email });
    return customResponse({
      response: res,
      statusCode: 200,
      result: { token },
    });
  } catch (error) {
    return customResponse({
      response: res,
      statusCode: 500,
      error: error.message,
    });
  }
};

const getProfile = async (req, res) => {
  try {
    const user = req.user;

    if (!user) {
      return customResponse({
        response: res,
        statusCode: 422,
        error: "Invalid Token",
      });
    }

    const { _id, firstName, lastName, email } = user;
    return customResponse({
      response: res,
      statusCode: 200,
      result: { id: _id, firstName, lastName, email },
    });
  } catch (error) {
    return customResponse({
      response: res,
      statusCode: 500,
      error: error.message,
    });
  }
};

module.exports = { registerUser, loginUser, getProfile };
