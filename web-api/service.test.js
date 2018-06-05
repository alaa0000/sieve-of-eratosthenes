import * as service from './service';

describe('getMedianPrimeNumbers', () => {
  describe('getMedianPrimeNumbersAssert', () => {
    it('should throw an exception when no value is provided', () => {
      expect(() => service.getMedianPrimeNumbersAssert()).toThrowError('Value must be provided.');
    });

    it('should throw an exception when null is provided', () => {
      expect(() => service.getMedianPrimeNumbersAssert(null)).toThrowError('Value must be provided.');
    });

    it('should throw an exception when undefined is provided', () => {
      expect(() => service.getMedianPrimeNumbersAssert(undefined)).toThrowError('Value must be provided.');
    });

    it('should throw an exception when a non numeric value is provided', () => {
      expect(() => service.getMedianPrimeNumbersAssert('abc')).toThrowError('Value must be numeric.');
    });

    it('should throw an exception when a negative value is provided', () => {
      expect(() => service.getMedianPrimeNumbersAssert(-12)).toThrowError('Value must be positive.');
    });
  });

  describe('getMedian', () => {
    it('should return [3, 5] when the input is [2, 3, 5, 7]', () => {
      expect(service.getMedian([2, 3, 5, 7])).toEqual([3, 5]);
    });

    it('should return [7] when input is [2, 3, 5, 7, 11, 13, 17]', () => {
      expect(service.getMedian([2, 3, 5, 7, 11, 13, 17])).toEqual([7]);
    });
  });

  describe('getPrimeNumber', () => {
    it('should return [2, 3, 5, 7] when the input is 10', () => {
      expect(service.getPrimeNumbers(10)).toEqual([2, 3, 5, 7]);
    });

    it('should return [2, 3, 5, 7, 11, 13, 17] when the input is 18', () => {
      expect(service.getPrimeNumbers(18)).toEqual([2, 3, 5, 7, 11, 13, 17]);
    });
  });
});
