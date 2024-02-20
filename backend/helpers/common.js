const customResponse = ({ response, statusCode, result, error, ...rest }) => {
  if (result) {
    response.status(statusCode).json({
      success: true,
      result,
      ...rest,
    });
  }
  if (error) {
    response.status(statusCode).json({
      success: false,
      error,
      ...rest,
    });
  }
};

module.exports = { customResponse };
