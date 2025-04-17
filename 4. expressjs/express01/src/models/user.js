const db = require("../utils/db");
module.exports = {
  findAll: () => {
    return db`SELECT * FROM users`;
  },
  find: async (id) => {
    const data = await db`SELECT * FROM users WHERE id = ${id}`;
    if (data.length) {
      return data[0];
    }
    return null;
  },
};
