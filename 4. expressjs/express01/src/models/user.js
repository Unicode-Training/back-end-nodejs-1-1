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
  async existEmail(email, id = 0) {
    const data = await db`SELECT * FROM users WHERE email = ${email} ${
      id > 0 ? db`and id != ${id}` : db``
    }`;
    return data.length;
  },
  create: async ({ name, email, password }) => {
    const data =
      await db`INSERT INTO users (name, email, password) VALUES (${name}, ${email}, ${password})
    returning *
    `;
    return data[0];
  },
  update: async (data, id) => {
    const fillable = ["name", "email", "password"];
    const columns = Object.keys(data);
    let check = true;
    columns.forEach((column) => {
      if (!fillable.includes(column)) {
        check = false;
      }
    });
    if (!check) {
      return false;
    }
    const user = await db`update users set ${db(data, columns)} where id = ${id}
    returning *
    `;
    return user[0];
  },
};
