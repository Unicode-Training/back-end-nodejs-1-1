module.exports = {
  index: (req, res) => {
    const users = ["User 1", "User 2", "User 3", "User 4"];
    return res.end(JSON.stringify(users));
  },
  detail: (req, res) => {
    const id = req.params.userId;
    return res.end(`User ${id}`);
  },
};
