const createError = (status, message) => {
  const err = new Error();
  err.status = status;
  err.message = message;
  err.success = false;
  return err;
};

const responseSuccess = (res, data) => {
  return res.status(200).json({ status: 200, success: true, ...data });
};

module.exports = { responseSuccess, createError };
