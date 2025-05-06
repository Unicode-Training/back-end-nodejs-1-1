const express = require("express");
const multer = require("multer");
const path = require("path");
const { v4: uuid } = require("uuid");
const userController = require("../controllers/user.controller");
const uploadController = require("../controllers/upload.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const productRoute = require("./products");
const HttpException = require("../exceptions/http.exception");
const router = express.Router();
const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: (req, file, cb) => {
    //cb = callback là 1 hàm để xác nhận
    //Chỉ chấp nhận các loại file ảnh: image/png, image/jpg, image/jpeg, image/gif

    const allowedTypes = ["image/png", "image/jpg", "image/jpeg", "image/gif"];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new HttpException("Only image files are allowed", 400));
    }
    const ext = path.extname(file.originalname);
    const newFile = uuid() + ext;
    cb(null, newFile);
  },
});
const upload = multer({ storage, limits: { fileSize: 1024 * 1024 } });

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
router.use(upload.single("image"));
router.post("/upload", uploadController.upload);
router.delete("/upload", uploadController.delete);

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
