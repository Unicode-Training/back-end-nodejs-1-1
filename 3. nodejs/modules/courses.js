const path = require("path");
const fs = require("fs");
module.exports = {
  index: (req, res) => {
    // console.log(process.cwd());
    // console.log(__dirname);
    // console.log(__filename);
    // console.log(path.basename(__dirname));
    // console.log(path.extname(__filename));
    // console.log(path.join(__dirname, "../data"));
    // console.log(path.parse(__filename));
    // console.log(path.resolve(__dirname, "../data"));
    // console.log(path.sep);
    const filePath = path.join(__dirname, "../data/data1.json");
    const fileBuffer = fs.readFileSync(filePath, {
      flag: "a+",
    });
    let data = fileBuffer.toString();
    if (!data) {
      data = [];
    } else {
      data = JSON.parse(data);
    }
    data.push({
      name: `User ${data.length + 1}`,
      email: `user${data.length + 1}@gmail.com`,
    });
    fs.writeFileSync(filePath, JSON.stringify(data));

    // fs.writeFileSync(filePath, JSON.stringify({ name: "Unicode" }));
    //Kiểm tra file có tồn tại không
    // if (fs.existsSync(filePath)) {
    //   // console.log("Tồn tại");
    //   //Đọc nội dung file
    //   // const data = fs.readFileSync(filePath).toString();
    //   // console.log(data);
    //   fs.writeFileSync(filePath, JSON.stringify({ name: "Unicode" }));
    // } else {
    //   console.log("Không tồn tại");
    // }

    res.json({
      status: "success",
    });
  },

  detail: (req, res) => {
    const id = req.params.id;
    const slug = req.params.slug;
    return res.json({
      name: "Chi tiết khóa học",
      id,
      slug,
    });
  },
};
