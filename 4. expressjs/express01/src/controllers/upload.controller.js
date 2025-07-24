const fs = require("fs");
const HttpException = require("../exceptions/http.exception");
module.exports = {
  upload: (req, res) => {
    return res.json({
      data: req.file,
      message: "Upload file successfully",
      success: true,
    });
  },
  delete: (req, res) => {
    const { filename } = req.body;
    //fs --> unlink
    if (!filename || !fs.existsSync(`./public/uploads/${filename}`)) {
      throw new HttpException("Bad Request", 400);
    }
    fs.unlinkSync(`./public/uploads/${filename}`);

    return res.json({
      message: "Delete file successfully",
      success: true,
    });
  },
};
