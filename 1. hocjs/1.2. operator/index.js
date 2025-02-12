// let a = 10;
// let b = 3;
// let c = a ** b;
// console.log(c);

// let count = 0;
// count++; // count = count + 1
// ++count; // count = count + 1

// let s = ++count;

// console.log(count);
// console.log(s);

//Bài tập:

// let count = 1;
// let total = count++ + ++count + 5 + count++;
/*
1. Kết quả 1 --> count = 2
2. Kết quả 3 --> count = 3
3. 5
4. Kết quả 3 --> count = 4
*/
// console.log(total);

// let a = "10";
// let b = 20;
// let c = +a + b;
// console.log(c);

// let a = "10a";
// let b = 20;
// let c = a - b; //NaN
// console.log(c);

// let a;
// a = 10;
// let b = 20;

// let total = 20;
// let value = 30;

// total += value;
// console.log(total);

// let a;
// let b;
// let c;
// let d;
// let value = 10;

// a = b = c = d = value;

// console.log(a, b, c, d);

// let a = 10;
// let b = 10;
// let c = a <= b;
// console.log(c);

// let a = 10;
// let b = "10";
// let c = a !== b;
// console.log(c);

// let a = 10;
// let b = undefined;

// let c = a > null;
// console.log(c);\

// let a = "anh";
// let b = "Anh";
// console.log(a < b);

// let a = 10;
// let check = a >= 5 && a <= 20 && a > 10;
// check = !check;
// console.log(check);

// let check = a && "Unicode" && 1 && a < 10 && "An";
// console.log(check);

// let a = 10;
// let b = 20;
// let length = 1;

// let total = length && a + b;

// console.log(total);

// let a = 0;
// let b = a || null || "Ahihi";
// console.log(b);

// let a = 10;
// let b = a >= 10 ? 20 : 0;
// console.log(b);

// let total = 1 + 2 + 3 + (a >= 10 ? 20 : 5) + 6;
// console.log(total);

// let b = a ? 10 : 0;
// console.log(b);

let a = 1;
let b = a ?? "Ahihi";
console.log(b);

//Bài tập: Viết lại logic toán tử nullish bằng cách sử dụng toán tử 3 ngôi

let a1 = 1;
let b1 = a1 === undefined || a1 === null ? "Ahihi" : a1;
console.log(b1);
