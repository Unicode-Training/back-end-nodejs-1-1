//Array
const users = ["User 1", "User 2", "User 3", "User 4"];
users[users.length] = "User 5";
users[users.length] = "User 6";

users[1] = "User 2 - Update";
console.log(users);
// console.log(users[1]);
// console.log(users[2]);
// console.log(users[10]);

//Duyệt qua từng phần tử
// for (let i = 0; i < users.length; i++) {
//   console.log(users[i]);
// }

// for (let index in users) {
//   console.log(users[index]);
// }

// for (let user of users) {
//   console.log(user);
// }

//Xóa
// const indexDel = 2;
// const newArr = [];
// for (let index in users) {
//   if (+index === indexDel) {
//     continue;
//   }
//   newArr[newArr.length] = users[index];
// }
// console.log(newArr);

//Bài tập:
// const value = "Hoàng An";
// //Thêm giá trị value vào đầu mảng users
// const newArr = [value];
// for (let index in users) {
//   newArr[newArr.length] = users[index];
// }
// console.log(newArr);

const index = "a";
const value = "Hoàng An";
//Chèn value vào vị trí index của mảng users
const newArr = [];
for (let i in users) {
  if (
    typeof i === "number" &&
    i >= 0 &&
    i <= users.length - 1 &&
    +i === index
  ) {
    newArr[newArr.length] = value;
  }
  newArr[newArr.length] = users[i];
}
console.log(newArr);

let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a, b);
