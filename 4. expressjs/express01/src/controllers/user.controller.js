const HttpException = require("../exceptions/http.exception");
const userModel = require("../models/user");
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
  create: (req, res) => {
    const { name, email } = req.body;
    const errors = {};
    if (!name) {
      errors.name = "Vui lòng nhập tên";
    }
    if (!email) {
      errors.email = "Vui lòng nhập email";
    }
    if (Object.keys(errors).length) {
      throw new HttpException("Bad Request", 400, errors);
    }

    return res.json({
      title: "create",
    });
  },
  updatePut: (req, res) => {
    const id = req.params.userId;
    return res.json({
      title: "update put",
      id,
    });
  },
  updatePatch: (req, res) => {
    const id = req.params.userId;
    return res.json({
      title: "update patch",
      id,
    });
  },
  delete: (req, res) => {
    return res.json({ title: "delete" });
  },
};
