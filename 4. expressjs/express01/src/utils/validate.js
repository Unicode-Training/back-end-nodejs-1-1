module.exports = {
  isEmail: (email) => {
    const pattern =
      /^[a-zA-Z][a-zA-Z0-9-_.]+[a-zA-Z0-9]+@([a-zA-Z]\.|([a-zA-Z]+[A-Za-z0-9-_]*[a-zA-Z0-9]+)\.)+[a-zA-Z]{2,}$/;
    return pattern.test(email);
  },
};
