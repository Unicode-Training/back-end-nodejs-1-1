const path = require("path");
const fs = require("fs");
module.exports = {
  index: (req, res) => {
    // const users = ["User 1", "User 2", "User 3", "User 4"];
    // console.log(`search: `, req.query.search);
    // console.log(`status: `, req.query.status);
    // const apiKey = req.get("x-api-key");
    // console.log(`x-api-key: `, apiKey);
    // res.set("x-abc", "123");
    // return res.status(201).send("abc");
    const filePath = path.join(__dirname, "../data/data1.json");
    console.log(process.env.APP_NAME);
    console.log(process.env.APP_EMAIL);
    return res.json(JSON.parse(fs.readFileSync(filePath)));
  },
  detail: (req, res) => {
    const id = req.params.userId;
    return res.end(`User ${id}`);
  },
};
