const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');


/**
 * @description Register User
 * @param {*} req
 * @param {*} res
 * @route GET /api/v1/auth/register 
 * @access Public
 */
exports.register = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true
  });
});