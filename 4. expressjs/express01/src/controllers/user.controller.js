const HttpException = require("../exceptions/http.exception");
const userModel = require("../models/user");
const { isEmail } = require("../utils/validate");
module.exports = {
  index: async (req, res) => {
    const users = await userModel.findAll();

    return res.json({ success: true, data: users });
  },
  find: async (req, res) => {
    const id = req.params.userId;
    const user = await userModel.find(id);
    if (!user) {
      throw new HttpException("User Not Found", 404);
    }
    return res.json({ success: true, data: user });
  },
  create: async (req, res) => {
    /*
    Viết logic thêm dữ liệu database với yêu cầu sau
    1. Validate name: Bắt buộc
    2. Validate email: Bắt buộc, định dạng email, không trùng lặp với bản ghi khác trong database
    3. Validate password: Phải từ 6 ký tự trở lên

    Lưu ý: 
    - Xây dựng hàm bên model user
    - Thông báo lỗi, thành công rõ ràng
    - Status code rõ ràng
    */
    if (!req.body) {
      throw new HttpException("Bad Request", 400);
    }
    const { name, email, password } = req.body;
    const errors = {};
    if (!name) {
      errors.name = "Vui lòng nhập tên";
    }
    if (!email) {
      errors.email = "Vui lòng nhập email";
    } else {
      if (!isEmail(email)) {
        errors.email = "Email không đúng định dạng";
      } else {
        //Kiểm tra unique email
        const isExist = await userModel.existEmail(email);
        if (isExist) {
          errors.email = "Email đã tồn tại";
        }
      }
    }
    if (!password || password.length < 6) {
      errors.password = "Vui lòng nhập mật khẩu từ 6 ký tự trở lên";
    }
    if (Object.keys(errors).length) {
      throw new HttpException("Bad Request", 400, errors);
    }
    const user = await userModel.create({ name, email, password });
    if (!user) {
      throw new HttpException("Server Error", 500);
    }
    return res.status(201).json({
      success: true,
      data: user,
      message: "Create user success",
    });
  },
  updatePut: (req, res) => {
    const id = req.params.userId;
    return res.json({
      title: "update put",
      id,
    });
  },
  updatePatch: async (req, res) => {
    const id = req.params.userId;
    if (!req.body) {
      throw new HttpException("Bad Request", 400);
    }
    const { name, email, password } = req.body;
    const errors = {};
    if (email) {
      if (!isEmail(email)) {
        errors.email = "Email không đúng định dạng";
      } else {
        const isExist = await userModel.existEmail(email, id);
        if (isExist) {
          errors.email = "Email đã tồn tại";
        }
      }
    }
    if (password && password.length < 6) {
      errors.password = "Mật khẩu phải từ 6 ký tự";
    }
    if (Object.keys(errors).length) {
      throw new HttpException("Bad Request", 400, errors);
    }
    const user = await userModel.update(req.body, id);
    if (!user) {
      throw new HttpException("Server Error", 500);
    }
    return res.json({
      data: user,
      success: true,
      message: "Update user success",
    });
  },
  delete: (req, res) => {
    return res.json({ title: "delete" });
  },
};
