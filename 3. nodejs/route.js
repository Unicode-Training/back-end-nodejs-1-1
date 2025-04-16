const courses = require("./modules/courses");
const products = require("./modules/products");
const users = require("./modules/users");

module.exports = {
  "/users": users.index,
  "/products": products.index,
  "/users/:userId": users.detail,
  "/khoa-hoc/:slug/:id": courses.detail,
  "/khoa-hoc": courses.index,
};
//RESTful API
