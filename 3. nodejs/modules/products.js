module.exports = {
  index: (req, res) => {
    const products = ["Product 1", "Product 2", "Product 3", "Product 4"];
    return res.end(JSON.stringify(products));
  },
};
