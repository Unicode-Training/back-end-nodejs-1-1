console.log(Array.prototype);

const users = ["User 1", "User 2", "User 3", "User 4", "User 5"];
console.log(users);

//at(index) --> Lấy phần tử mảng theo index
// console.log(users.at(1));

//concat(arr1, arr2,...) --> Nối các mảng thành còn 1 mảng lớn
// console.log(users.concat(["User 5", "User 6"], [1, 2, 3]));
// const newUser = users.concat("User 5", ["User 6"]);
// console.log(newUser);

//fill(value) --> Cập nhật các phần tử mảng thành 1 giá trị giống nhau (Thay đổi mảng ban đầu)
// console.log(users.fill("An"));
// console.log(users);

//indexOf(value) ==> Tìm phần tử trong mảng, nếu tìm thấy trả về vị trí đầu tiên tìm được
// console.log(users.indexOf("User 2"));

//lastIndexOf(value) ==> Tìm phần tử trong mảng, nếu tìm thấy trả về vị trí cuối cùng tìm được

//includes(value) ==> Tìm phần tử trong mảng, nếu tìm thấy trả về true

//slice(start,end) ==> Cắt mảng từ start đến end-1
// console.log(users.slice(2, 3));

//join() ==> Nối các phần tử mảng thành chuỗi
// console.log(users.join(" "));

//sort() ==> Sắp xếp mảng theo thứ tự tăng dần (Thay đổi mảng ban đầu)
// const arr = ["Tùng", "Văn", "An", "Dũng"];
// arr.sort();
// console.log(arr);

// const number = [1, 5, 10, 8, 100];
// number.sort(function (a, b) {
//   //a = phần tử sau
//   //b = phần tử trước
//   //Nếu hàm này return về giá trị âm --> Đổi chỗ để sắp xếp lại
//   //   console.log(`a = ${a}`, `b = ${b}`);
//   //   if (b > a) {
//   //     return -1;
//   //   }
//   //So sánh số: return a - b ==> tăng dần
//   return a - b;
// });
// console.log(number);

// const customers = [
//   "Nguyễn Đình Văn",
//   "Tạ Hoàng An",
//   "Tô Anh Dũng",
//   "Nguyễn Văn Anh",
// ];
// //Sắp xếp mảng trên theo tên tăng dần (dùng hàm sort)
// const getFirstName = (fullname) => {
//   //Lấy được tên
//   return fullname.split(" ").slice(-1).join();
// };
// customers.sort((a, b) => {
//   if (getFirstName(b) > getFirstName(a)) {
//     return -1;
//   }
// });
// console.log(customers);

//reverse() ==> Đảo ngược mảng (Thay đổi mảng ban đầu và trả về mảng mới)
// console.log(users.reverse());
// console.log(users);

//push() ==> Thêm phần tử vào cuối mảng (Thay đổi mảng ban đầu và trả về số lượng phần tử sau khi thêm)

//unshift() ==> Thêm phần tử vào đầu mảng (Thay đổi mảng ban đầu và trả về số lượng phần tử sau khi thêm)
// console.log(users.unshift("Item 1", "Item 2", "Item 3"));
// console.log(users);

//pop() ==> Xóa phần tử cuối mảng và trả về giá trị vừa xóa
// console.log(users.pop());
// console.log(users);

//shift() ==> Xóa phần tử đầu mảng và trả về giá trị vừa xóa
// console.log(users.shift());
// console.log(users);

//splice(index, count) --> Xóa count phần tử từ index (Thay đổi mảng ban đầu, trả về mảng mới tương ứng với phần tử đã xóa)
// console.log(users.splice(1, 2, "A", "B", "C"));
// console.log(users);

// const numbers = [1, 2, [3, [4, [5]]]];
// //[1,2,3,4,5]
// const newArr = numbers.flat(Infinity);
// console.log(numbers);
// console.log(newArr);

// const fullname = "tạ    hoàng  an"; //Tạ Hoàng An
// const fullnameArr = fullname.split(" ");
// const newFullname = [];
// for (let index in fullnameArr) {
//   const item = fullnameArr[index];
//   if (item === "") {
//     continue;
//   }
//   newFullname.push(item.charAt(0).toUpperCase() + item.slice(1));
// }
// console.log(newFullname.join(" "));

//Kiểm tra 1 biến có phải mảng không?
// Array.isArray(tenbien)

const numbers = [1, 2, [3, [4, [5], [[[[6]]]]]]];
console.log(numbers);

// console.log(Array.isArray("a"));

//Làm phẳng mảng không dùng hàm flat
// const flatArray = (arr) => {
//   let newArr = [];
//   for (let index in arr) {
//     // console.log(arr[index]);
//     if (!Array.isArray(arr[index])) {
//       newArr.push(arr[index]);
//     } else {
//       newArr = newArr.concat(flatArray(arr[index]));
//       //   newArr.push(...flatArray(arr[index]));
//       //   newArr.push.apply(newArr, flatArray(arr[index]));
//     }
//   }
//   return newArr;
// };

// console.log(flatArray(numbers));

// const flatArray = (arr, result = []) => {
//   for (let index in arr) {
//     if (!Array.isArray(arr[index])) {
//       result.push(arr[index]);
//     } else {
//       flatArray(arr[index], result);
//     }
//   }
//   return result;
// };
// console.log(flatArray(numbers));

const customers = [
  "User 1",
  "User 2",
  "User 3",
  "User 4",
  "User 5",
  "User 6",
  "User 7",
  "User 8",
];

const limit = 3;

const getCustomers = (page = 1) => {
  //page = 1 --> index = 0
  //page = 2 --> index = 3
  //page = 6 --> index = 6
  const index = (page - 1) * limit;
  return customers.slice(index, index + limit);
};

// console.log(getCustomers(2));

//forEach(callback)
// users.forEach(function (user, index) {
//   console.log(user, index);
// });

//map(callback)
// const newArr = users.map(function (user, index) {
//   console.log(user, index);
//   return `${index + 1} - ${user}`;
// });
// console.log(newArr);

//filter(callback)
// const newArr = users.filter(function (user, index) {
//   console.log(user, index);
//   //Khi callback return về giá trị truthy ở phần tử nào, thêm phần tử đó vào mảng mới
//   //   return index % 2 === 0;
//   return index;
// });
// console.log(newArr);

const fullname = "tạ    hoàng  an"; //Tạ Hoàng An
const newFullname = fullname
  .split(" ")
  .filter((item) => {
    return item !== "";
  })
  .map((item) => {
    return item.charAt(0).toUpperCase() + item.slice(1);
  })
  .join(" ");
console.log(newFullname);

//find()
//findIndex()
//findLast()
//findLastIndex()
//some()
//every()
//reduce()

//Array like-object

function something() {
  //   console.log(Array.isArray(arguments));
  console.log(arguments);

  Array.from(arguments).forEach((item) => {
    console.log(item);
  });
}
something(1, 2, 3, 4, 5);
