//Kế thừa các key của object
// Object.prototype.message = "Unicode";
// const a = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };

// const b = {
//   age: 32,
//   address: "Hà Nội",
// };

// console.log(a.message);
// console.log(b.message);

// const users = [];
// console.log(users.message);

// const fullname = "Hoàng An";
// console.log(fullname.message);

// const check = true;
// console.log(check.message);

// const age = 32;
// console.log(age.message);

// String.prototype.last = function () {
//   return this.split(" ").slice(-1).join();
// };
// const fullname = "Tạ Hoàng An";
// console.log(fullname.last());

Number.prototype.formatMoney = function () {
  return this.toLocaleString() + "đ";
};
const price = 12000;
console.log(price.formatMoney());
