//Object Javascript
// - Cấu tạo bởi cặp key: value
// - key: truy cập vào 1 đặc điểm cụ thể của đối tượng (Thuộc tính)
// - value: Giá trị của key, có thể chứa bất kỳ kiểu dữ liệu nào (Kể cả object, function,...)

//Khai báo object
// const user = {
//   name: "Hoàng An",
//   email: "contact@unicode.vn",
// };

// console.log(user);

// const customer = {};
// console.log(customer);

// const product = new Object();
// console.log(product);

//Thêm phần tử mới vào object
const user = {};
user.name = "Hoàng An";
user.email = "contact@unicode.vn";
user.age = 33;
user["address"] = "Hà Nội";
user["shipping-address"] = "Hồ Chí Minh";

//Đọc giá trị thuộc tính
console.log(user.email);
console.log(user["address"]);

//Cập nhật giá trị thuộc tính (Xác định key cần cập nhật)
user.email = "hoangan.web@gmail.com";

//Xóa key trong object
delete user.email;

console.log(user);

//Duyệt qua từng key của object
// for (let key in user) {
//   console.log(key);
//   const value = user[key];
//   console.log(value);
// }

// const keys = Object.keys(user);
// keys.forEach((key) => {
//   const value = user[key];
//   console.log(value);
// });

// const obj1 = {
//   name: "Hoàng An",
//   email: "contact@unicode.vn",
// };
// const obj2 = {
//   course: "Back-end",
//   price: 1200,
// };

//Tạo obj3 bằng cách gộp 2 object trên (Không dùng hàm, spread)
// const obj3 = {};
// for (let key in obj1) {
//   obj3[key] = obj1[key];
// }
// for (let key in obj2) {
//   obj3[key] = obj2[key];
// }
// console.log(obj3);

//Object.values() --> Trả về mảng chứa tất cả value của 1 object
// console.log(Object.values(user));

//Object.entries() --> Trả về 1 mảng chứa cả key và value
// console.log(Object.entries(user));

//Object.fromEntries() --> Biến mảng 2 chiều thành object
// const entries = [
//   ["name", "Hoàng An"],
//   ["email", "contact@unicode.vn"],
//   ["age", 33],
// ];
// console.log(Object.fromEntries(entries));

//Object.assign() --> Gộp nhiều object và trả về object mới
// const obj1 = {
//   name: "Hoàng An",
//   email: "contact@unicode.vn",
// };
// const obj2 = {
//   course: "Back-end",
//   price: 1200,
// };
// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

// const query = {
//   keyword: "hoc lap trinh",
//   category: 1,
//   status: "active",
// };
//Chuyển object trên thành chuỗi sau (query string)
// keyword=hoc+lap+trinh&category=1&status=active
// const queryString = Object.entries(query)
//   .map((item) => {
//     return item.join("=");
//   })
//   .join("&")
//   .replaceAll(" ", "+");

//Chuyển queryString thành object query

// const queryString = `keyword=hoc+lap+trinh&category=1&status=active`;
// const query = Object.fromEntries(
//   queryString.split("&").map((item) => {
//     const itemArr = item.split("=");
//     itemArr[1] = itemArr[1].replaceAll("+", " ");
//     if (!isNaN(+itemArr[1])) {
//       itemArr[1] = +itemArr[1];
//     }
//     return itemArr;
//   })
// );
// console.log(query);

const queryString = `keyword=hoc+lap+trinh&category=1&category=2&status=active&category=3&status=inactive`;
/*
{
    keyword: "hoc lap trinh",
    category: [1, 2],
    status: ["active", "inactive"]
}
*/
const query = {};
queryString.split("&").forEach((item) => {
  const itemArr = item.split("=");
  itemArr[1] = itemArr[1].replaceAll("+", " ");
  if (!isNaN(+itemArr[1])) {
    itemArr[1] = +itemArr[1];
  }
  const key = itemArr[0];
  if (!query[key]) {
    query[key] = itemArr[1];
  } else {
    // query[key] = query[key];
    const value = query[key];
    if (!Array.isArray(value)) {
      query[key] = [value];
    }
    query[key].push(itemArr[1]);
  }
});
console.log(query);
