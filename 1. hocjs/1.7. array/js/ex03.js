// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//some()
/*
- Trả về true/false
- Trả về true nếu có ít nhất 1 lần lặp trả về truthy
*/
// const check = numbers.some((number) => {
//   return number % 2 === 0;
// });
// console.log(check);

//every()
/*
- Trả về true/false
- Trả về true khi tất cả các lần lặp trả về truthy
*/
// const check = numbers.every((number) => {
//   return number % 2 === 0;
// });
// console.log(check);

//find()
/*
Trả về phần tử đầu tiên tìm được dựa vào điều kiện trong callback
*/

//findLast()
/*
Trả về phần tử cuối cùng tìm được dựa vào điều kiện trong callback
*/
// const even = numbers.findLast((number) => {
//   return number % 2 === 0;
// });
// console.log(even);

//findIndex(): Giống find nhưng trả về index

//findLastIndex(): Giống findLast nhưng trả về index
// const index = numbers.findLastIndex((number) => {
//   return number % 2 === 0;
// });
// console.log(index);

// const customers = [
//   ["Nguyễn Văn A", "nguyenvana@gmail.com", 30],
//   ["Nguyễn Văn B", "nguyenvanb@gmail.com", 31],
//   ["Nguyễn Văn C", "nguyenvanc@gmail.com", 32],
// ];

//Bài 1: Xóa khách hàng có email = "nguyenvanb@gmail.com"
// const newCustomers = customers.filter((customer) => {
//   return !customer.includes("nguyenvanb@gmail.com");
// });
// console.log(newCustomers);

// const index = customers.findIndex((customer) => {
//   return customer.includes("nguyenvanb@gmail.com");
// });
// if (index !== -1) {
//   customers.splice(index, 1);
// }
// console.log(customers);

//Bài 2: Tìm khách hàng có email nguyenvanb@gmail.com và tăng thêm 2 tuổi (Dùng map)
// const newArr = customers.map((customer) => {
//   if (customer.includes("nguyenvanb@gmail.com")) {
//     customer[2] += 2;
//   }
//   return customer;
// });
// console.log(newArr);

//reduce(callback, initialValue)
/*
callback có 3 tham số
- accumulator
- currentValue
- index
*/
// const numbers = [5, 10, 15, 20, 25, 30];
// console.log(numbers);

// const result = numbers.reduce((acc, cur, index) => {
//   console.log(`acc: ${acc}, cur: ${cur}, index: ${index}`);
//   return cur;
// }, 0);
// console.log(result);

// const result = numbers.reduce((total, number) => {
//   return total + number;
// });
// console.log(result);

// const numbers = [1, 2, 8, -1, 7];
//Tìm số lớn nhất trong mảng trên (dùng reduce)
// const max = numbers.reduce((max, number) => {
//   return max < number ? number : max;
// });
// console.log(max);

// const arr1 = [1, 5, 2, 8];
// const arr2 = [2, 5, 3];
// //Tìm phần tử giao giữa mảng 1 và mảng 2: [5,2]
// const result = arr1.reduce((acc, item) => {
//   if (arr2.includes(item)) {
//     acc.push(item);
//   }
//   return acc;
// }, []);
// console.log(result);

// const numbers = [1, 2, 3, 2, 5, 9, 1]; //Lọc trùng

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const size = 2;
// [[1,2], [3,4], [5,6], [7,8], [9]]
// const result = arr.reduce((acc, item, index) => {
//   if (index % size === 0) {
//     const sub = arr.slice(index, index + size);
//     acc.push(sub);
//   }
//   return acc;
// }, []);
// console.log(result);

//Cách 2:

/*
[[]] --> [[1]] --> [[1,2]] --> [[1,2], [3]] --> [[1,2], [3,4]] ...
*/

// const result = arr.reduce(
//   (acc, item) => {
//     //Kiểm tra số lượng phần tử của mảng con cuối cùng
//     if (acc[acc.length - 1].length < size) {
//       acc[acc.length - 1].push(item);
//     } else {
//       acc.push([item]);
//     }
//     return acc;
//   },
//   [[]]
// );
// console.log(result);

//Làm phẳng mảng dùng reduce
// const numbers = [1, 2, [3, [4, [5]]]];
// console.log(numbers);

// const flatArr = (arr) => {
//   return arr.reduce((acc, cur) => {
//     if (!Array.isArray(cur)) {
//       acc.push(cur);
//     } else {
//       acc = acc.concat(flatArr(cur));
//     }
//     return acc;
//   }, []);
// };
// console.log(flatArr(numbers));

// const arr1 = [];
// const arr2 = [];
// console.log(arr1 === arr2);

// const a = ["Hoàng An", "hoangan.web@gmail.com"];

//1. Shallow copy
//1.1. Dùng các phương thức trả về mảng mới

//1.2. Spread

//2. Deep copy
//Chuyển array thành json, sau đó chuyển ngược lại
// const json = JSON.stringify(a);
// // const b = [...a];
// const b = JSON.parse(json);
// b[0] = "Hoàng An Unicode";

// console.log(a);
// console.log(b);

// const users = [
//   ["User 1", "user1@gmail.com"],
//   ["User 2", "user2@gmail.com"],
//   ["User 3", "user3@gmail.com"],
// ];
// const user = users.find((user) => {
//   return user.includes("user2@gmail.com");
// });
// user.push("ahih");
// console.log(users);

//Tạo 1 mảng có 10 phần tử
// const arr = Array(10).keys();
// arr.forEach((item, index) => {
//   console.log(item, index);
// });

const range = Array.from(Array(10).keys()).map((item, index) => {
  return `<a href="?page=${index + 1}">${index + 1}</a>`;
});
console.log(range);
