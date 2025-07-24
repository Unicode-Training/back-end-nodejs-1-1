module.exports = {
  index: (req, res) => {
    res.json({ title: "Products" });
  },
  find: (req, res) => {
    const id = req.params.productId;
    res.json({ title: "find", id });
  },
};
