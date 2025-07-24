// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     for (let k = 1; k <= 5; k++) {
//       console.log(`i = ${i}, j = ${j} , k = ${k}`);
//     }
//   }
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
//   if (i === 5) {
//     i = 10;
//   }
// }

// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     continue;
//   }
//   console.log(i);
// }

//B1: Tính tổng giá trị biểu thức sau: 1 + 2 + ... + n
// let n = 10;
// let total = 0;
// for (let i = 1; i <= n; i++) {
//   total += i;
// }
// console.log(total);

//B2: Tính n!
// n! = 1 * 2 * 3 * ... * n
// let n = 5;
// let result = 1;
// for (let i = 2; i <= n; i++) {
//   result *= i;
// }
// console.log(`${n}! = ${result}`);

//B3: Tính giá trị biểu thức sau

// 1 + 1*2 + 1*2*3 + ... + 1*2*3*...*n

// let n = 5;
// let result = 0;
// let temp = 1;
// for (let i = 1; i <= n; i++) {
//   temp *= i;
//   result += temp;
// }
// console.log(result);

//B4: Kiểm tra số nguyên tố
/*
>1
Chỉ chia hết cho 1 và chính nó
*/

// let n = 9;
// let isPrime = true; //Giả định là đúng -> Tìm trường hợp sai
// if (n <= 1) {
//   isPrime = false;
// } else {
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }
// if (isPrime) {
//   console.log(`${n} là số nguyên tố`);
// } else {
//   console.log(`${n} không phải số nguyên tố`);
// }
//Kỹ thuật đặt cờ hiệu

let a = 5;
let b = 9;
let c = 3;
let d = -2;
//Đặt 1 biến và giả định số lớn nhất là số a
let max = a;
if (max < b) {
  max = b;
}
if (max < c) {
  max = c;
}
if (max < d) {
  max = d;
}
console.log(max);
//Kỹ thuật đặt lính canh
