/* eslint-disable no-console, no-unused-vars, no-param-reassign */

const errorsHandler = (err, req, res, next) => {
  // Log error message in our server's console.
  console.error(err.message);

  if (!err.statusCode) {
    // If err has no specified error code, set error code to 'Internal Server Error (500)'.
    err.statusCode = 400;
  }

  res.status(err.statusCode).send({ error: err.message });
};

module.exports = errorsHandler;
