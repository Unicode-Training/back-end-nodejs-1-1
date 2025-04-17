const express = require("express");
const productController = require("../controllers/product.controller");
const router = express.Router();
router.get("/", productController.index);
router.get("/:productId", productController.find);
module.exports = router;
