"use strict";
// const a: unknown = "Hello anh em";
// const count: number = (<string>a).length;
// const HOST: unknown = "a";
// const user: {
//   host: string;
// } = {
//   host: HOST as string,
// };
// type User = {
//   name: string;
//   email: string;
// };
// let user: User = {} as User;
// user = {};
// const a: string | number = "A";
// console.log(a.length);
// const something = (a: string | number) => {
//   if ((a as string).length) {
//     console.log("Độ dài: ", (a as string).length);
//   } else {
//     console.log(a.toLocaleString());
//   }
// };
// something("An");
// type TypeList = "user" | "customer" | "service";
// const getData = (type: TypeList) => {
//   const typeAllowed = ["user", "customer", "service"];
//   if (typeAllowed.includes(type)) {
//     console.log("Ok");
//   }
// };
// getData("service");
// type User = {
//   name: string;
//   readonly age: number;
// };
// const user: User = {
//   name: "An",
//   age: 32,
// };
// user.name = "An Unicode";
// user.age = 33;
// let a: number = 11;
// class User {
//   readonly name: string = "";
//   constructor(readonly age: number) {}
//   //   getValue() {
//   //     // this.age = 32;
//   //     console.log(this.age);
//   //   }
// }
// const user = new User(10);
// user.name = "Ahihi";
// console.log(user);
// console.log(user.getValue());
// user.age = 32;
// const numbers: readonly number[] = [1, 2, 3, 4];
// numbers[5] = 10;
