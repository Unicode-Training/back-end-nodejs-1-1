let number = 50;
// if (number > 0) {
//   console.log("Thỏa mãn điều kiện");
// } else {
//   console.log("Không thỏa mãn");
// }

// if (number < 0) {
//   console.log("Số âm");
// } else if (number < 10) {
//   console.log("Số nhỏ");
// } else if (number < 15) {
//   console.log("Số trung bình");
// } else {
//   console.log("Số lớn");
// }

// let email = "a";
// let password = "b";
// if (!email || !password) {
//   if (!email) {
//     console.log("Vui lòng nhập email");
//   } else {
//     console.log("Vui lòng nhập password");
//   }
// } else {
//   console.log("Dữ liệu hợp lệ");
// }

//Bài tập: Tính lương thực nhận của 1 nhân viên sau khi đã trừ thuế
/*
< 5tr --> 0%
Từ 5tr đến 10tr --> 3%
> 10tr --> 5%
*/

// let salary = -10000000;
// let tax;
// if (salary > 0) {
//   if (salary < 5000000) {
//     tax = 0;
//   } else if (salary <= 10000000) {
//     tax = 3;
//   } else {
//     tax = 5;
//   }
//   let income = salary - (salary * tax) / 100;
//   console.log(income);
// } else {
//   console.log("Dữ liệu không hợp lệ");
// }

/*
km = 4;
total = 1 * 15000 + (km - 1) * 13500
*/

const PRICE1 = 15000;
const PRICE2 = 13500;
const PRICE3 = 11000;
const RANGE1 = 1;
const RANGE2 = 5;
const RANGE3 = 120;
const DISCOUNT_RATE = 10;
let km = 130;
let total = 0;
if (km <= RANGE1) {
  total = PRICE1;
} else if (km <= RANGE2) {
  total = PRICE1 + (km - RANGE1) * PRICE2;
} else {
  total = PRICE1 + (RANGE2 - RANGE1) * PRICE2 + (km - RANGE2) * PRICE3;
  if (km > RANGE3) {
    total = total - (total * DISCOUNT_RATE) / 100;
  }
}
console.log(total);
