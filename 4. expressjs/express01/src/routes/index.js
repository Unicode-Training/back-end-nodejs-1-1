const express = require("express");
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const productRoute = require("./products");
const router = express.Router();

//Product route
router.use("/products", productRoute);
module.exports = router;

//User route
router.use(authMiddleware);
router.get("/users", userController.index);
router.get("/users/:userId", userController.find);
router.post("/users", userController.create);
router.put("/users/:userId", userController.updatePut);
router.patch("/users/:userId", userController.updatePatch);
router.delete("/users/:userId", userController.delete);

/*
router.method(path, callback)

method: http method
- get
- post
- put
- patch
- delete

GET /users --> Liệt kê danh sách users
GET /users/:userId --> Lấy thông tin user theo id
POST /users --> Tạo user
PUT|PATCH /users/:userId --> Cập nhật user theo id
DELETE /users/:userId --> Xóa user theo id

Endpoint = METHOD + URL

x-www-form-urlencoded (Mặc định trong html form): name=Hoàng+An&email=hoangan.web@gmail.com
application/json: 
{
    "name": "Hoàng An",
    "email": "hoangan.web@gmail.com"
}
*/
