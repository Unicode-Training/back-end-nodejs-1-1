// function User() {
//   this.name = "Hoàng An";
//   this.email = "contact@unicode.vn";
// }

// const user = new User();

//Kiểm tra 1 biến có phải là instance của 1 constructor không?
// console.log(user instanceof User);
// console.log(user.constructor.name === "User");

// const items = {};
// if (items instanceof Array) {
//   console.log("Là mảng");
// } else {
//   console.log("Không phải mảng");
// }

//Toán tử optional chaining (?.)
// const a = null;
// console.log(a?.email);

// const a = {
//   email: {
//     username: "ahihi",
//   },
// };
// console.log(a?.email?.username);

// const a = {
//   getName: function () {
//     console.log("ahihi");
//   },
// };
// a.getName?.();

// const users = ["Item 1", "Item 2", "Item 3"];
// const users = "Ahihi";
// const users = null;
// if (users?.length) {
//   users.forEach?.((user) => {
//     console.log(user);
//   });
// } else {
//   console.log("Không có dữ liệu");
// }

//Viết lại vòng lặp map bằng cách sử dụng prototype
// Array.prototype.map2 = function (callback) {
//   if (typeof callback !== "function") {
//     return;
//   }
//   const arr = this;
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     const value = arr[i];
//     newArr[newArr.length] = callback(value, i);
//   }
//   return newArr;
// };

// const users = ["Item 1", "Item 2", "Item 3"];

// const newUser = users.map2(function (user, index) {
//   return `${index} - ${user}`;
// });

// console.log(newUser);

Array.prototype.reducer2 = function (callback, initialValue) {
  const arr = this;
  if (typeof callback !== "function") {
    return;
  }
  let acc;
  for (let index = 0; index < arr.length; index++) {
    if (index === 0) {
      if (initialValue === undefined) {
        //Không có initial --> Chạy từ index = 1;
        acc = arr[index];
        continue;
      }

      acc = initialValue;
    }

    const resultCallback = callback(acc, arr[index], index);
    acc = resultCallback;
  }
  return acc;
};

const numbers = [5, 10, 15, 20, 25, 30];
// const result = numbers.reducer2(function (acc, cur, index) {
//   console.log(`acc: ${acc}, cur: ${cur}, index: ${index}`);
//   return cur;
// });
// console.log(result);
const total = numbers.reducer2((total, number) => {
  return total + number;
});
console.log(total);
