// function sayHi(value, type = "success") {
//   console.log("Học lập trình không khó");
//   console.log(value);
//   console.log(type);
//   return "A";
//   console.log("Ahihi");
// }

// const result = sayHi("Unicode", "error");
// console.log(result);
// let message = "Unicode"; //Biến toàn cục
// function getMessage() {
//   console.log(message);
// }
// function setMessage(value) {
//   message = value;
// }
// setMessage("Ahihi");
// getMessage();

//Viết hàm kiểm tra 1 số nguyên là số nguyên tố
// function isPrime(n) {
//   if (n <= 1) {
//     return false;
//   }
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPrime(6));

// function division(a, b) {
//   if (b === 0) {
//     return false;
//   }
//   return a / b;
// }
// console.log(division(10, 0));

// function handler() {
//   console.log("Ok chưa?");
// }
// display("A", handler); //Lời gọi hàm bị động (Gọi hàm callback)

// function display(a, func, ...rest) {
//   console.log(a);
//   func(...rest);
// }
// function handler(value) {
//   console.log("Ok chưa?", value);
// }
// display(
//   "A",
//   function (value) {
//     console.log("Ok chưa?", value);
//   },
//   "Unicode"
// );

//rest parameter --> Tham số còn
// function getNumber(a, ...args) {
//   console.log(a);
//   console.log(args);
// }
// getNumber(10, 20, 30, 40, 50);

// const arr = [10, 20, 30];
// function something(a, b, c) {
//   console.log(a, b, c);
// }
// // something(...[10, 20, 30]); //spread operator
// something.apply(null, arr);

function display(a, func, ...rest) {
  console.log(a);
  //   if (typeof func === "function") {
  //     func(...rest);
  //   }
  typeof func === "function" && func(...rest);
}

// display(
//   "A",
//   function (value, type) {
//     console.log("Ok chưa?", value, type);
//   },
//   "Unicode",
//   "success"
// );
// display("A", "B");

//Expression Function
// const getMessage = function () {
//   console.log("Học lập trình không khó");
// };
// getMessage();

//Hàm setTimeout(): Delay quá trình thực thi 1 hàm nào đó
// setTimeout(
//   function (value) {
//     console.log("Ok chưa?", value);
//   },
//   2000,
//   "Unicode"
// );

// const getA = function (callback) {
//   setTimeout(() => {
//     console.log("Get A");
//     //Chạy xong
//     typeof callback === "function" && callback();
//   }, 1000);
// };
// const getB = function (callback) {
//   setTimeout(() => {
//     console.log("Get B");
//     //Chạy xong
//     typeof callback === "function" && callback();
//   }, 2000);
// };
// const getC = function () {
//   setTimeout(() => {
//     console.log("Get C");
//   }, 1500);
// };

// getA(function () {
//   getB(function () {
//     getC();
//   });
// });

/*
A xong --> thông báo cho B --> thông báo cho C

*/

const getA = function () {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("get A");
    }, 1000);
  });
};
const getB = function () {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("get B");
    }, 2000);
  });
};
const getC = function () {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("get C");
    }, 500);
  });
};
getA()
  .then(function (a) {
    console.log(a);
    return getB();
  })
  .then(function (data) {
    console.log(data);
    return getC();
  })
  .then(function (data) {
    console.log(data);
  });

//a().b().c() --> chaining
