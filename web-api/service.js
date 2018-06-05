const flow = require('lodash/flow');
const fill = require('lodash/fill');
const toInteger = require('lodash/toInteger');
const isNil = require('lodash/isNil');
const assert = require('assert');

/**
 * Assertion to check that the value provided to the web-api is valid.
 */
const getMedianPrimeNumbersAssert = (value) => {
  assert(!isNil(value), 'Value must be provided.');
  assert(!isNaN(value), 'Value must be numeric.'); // eslint-disable-line no-restricted-globals
  assert(!(toInteger(value) < 0), 'Value must be positive.');
  assert(toInteger(value) > 2, 'Value must be great than 2.');

  return value;
};

/**
 * Returns an array containing the prime number of the input value.
 * Using Sieve of Eratosthenes algorithm to improve performance.
 */
const getPrimeNumbers = (n) => {
  const max = toInteger(n);
  const sqrtMax = Math.sqrt(max);

  // Make array of length max and fill with true.
  const sieve = fill(Array(max), true);

  // Iterate from 2 until square root of max.
  for (let i = 2; i < sqrtMax; i += 1) {
    // If the number is labelled a prime then we can start at i^2 and mark every multiple of i
    // from there as NOT a prime.
    if (sieve[i]) {
      for (let j = i ** 2; j < max; j += i) {
        sieve[j] = false;
      }
    }
  }

  // Reduce sieve to only the Prime indexes that are true.
  return sieve.reduce((primes, isPrime, i) => {
    if (isPrime && i > 1) {
      primes.push(i);
    }

    return primes;
  }, []);
};

/**
 * Returns an array containing the medians of the input array.
 */
const getMedian = (values) => {
  const newValues = [...values].sort((a, b) => a - b);

  // Split the array in half.
  const middle = Math.floor(newValues.length / 2);

  // Middle numbers when array length is even.
  if (newValues.length % 2 === 0) {
    return [
      newValues[middle - 1],
      newValues[middle],
    ];
  }

  // Middle numbers when array length is odd.
  return [
    newValues[middle],
  ];
};

/**
 * Returns an array containing the medians of the prime numbers of the input value.
 */
const getMedianPrimeNumbers = flow(
  getMedianPrimeNumbersAssert,
  getPrimeNumbers,
  getMedian,
);

module.exports = {
  getMedian,
  getMedianPrimeNumbers,
  getMedianPrimeNumbersAssert,
  getPrimeNumbers,
};
