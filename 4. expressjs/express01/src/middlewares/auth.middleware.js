const HttpException = require("../exceptions/http.exception");

module.exports = (req, res, next) => {
  //next là 1 hàm, hàm này được gọi --> cho phép request đi tiếp
  const apiKey = req.headers["x-api-key"];
  //   console.log(`x-api-key: `, apiKey);
  // if (apiKey === "unicode") {
  //   return next();
  // }
  next();
  // throw new HttpException("Unauthorized", 401);
};
