/**
 * @description this helps us avoid repeating the try catch blocks
 * @param {*} fn 
 * @returns 
 */
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

module.exports = asyncHandler;
