/**
 * @description Get all bootcamps
 * @param {*} req
 * @param {*} res
 * @route GET /api/v1/bootcamps
 * @access Public
 */
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: 'Get all bootcamps',
  });
};

/**
 * @description Get single bootcamp
 * @param {*} req
 * @param {*} res
 * @route GET /api/v1/bootcamps/:id
 * @access Public
 */
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Get bootcamp ${req.params.id}`,
  });
};

/**
 * @description Create new bootcamp
 * @param {*} req
 * @param {*} res
 * @route POST /api/v1/bootcamps
 * @access Private
 */
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: 'Create new bootcamp',
  });
};

/**
 * @description Update bootcamp
 * @param {*} req
 * @param {*} res
 * @route PUT /api/v1/bootcamps/:id
 * @access Private
 */
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Update bootcamp ${req.params.id}`,
  });
};

/**
 * @description Delete bootcamp
 * @param {*} req
 * @param {*} res
 * @route DELETE /api/v1/bootcamps/:id
 * @access Private
 */
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Delete bootcamp ${req.params.id}`,
  });
};
