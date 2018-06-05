const express = require('express');

const router = express.Router();
const service = require('./service');

/**
 * Returns an array of the median of prime numbers.
 */
router.get('/median-prime-numbers/:value', (req, res, next) => {
  try {
    res.json(service.getMedianPrimeNumbers(req.params.value));
  } catch (error) {
    next(error);
  }
});

/**
 * Returns an empty array if no value is provided.
 */
router.get('/median-prime-numbers/', (req, res) => {
  res.json([]);
});

/**
 * The 404 Route (Keep this as the last route).
 */
router.get('*', (req, res) => {
  res.status(404).send('Not Found');
});

module.exports = router;

