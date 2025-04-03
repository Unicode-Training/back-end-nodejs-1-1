"use strict";
// // interface A {
// //   name: string;
// // }
// // interface B extends A {
// //   email: string;
// // }
// // interface C extends B {
// //   age: number;
// //   getName: (b: string) => void;
// // }
// // const user: C = {
// //   name: "Hoàng An",
// //   email: "hoangan.web@gmail.com",
// //   age: 32,
// //   getName(a) {
// //     console.log("Ahihi");
// //   },
// // };
// // interface PersonInterface {
// //   name: string;
// //   email: string;
// //   age: number;
// //   getName(): string;
// // }
// // interface AuthenticationInterface {
// //   isAuth: boolean;
// // }
// // interface User {
// //   token: string;
// // }
// // class Person implements PersonInterface {
// //   //Khai báo thuộc tính
// //   name: string;
// //   email: string;
// //   age: number;
// //   constructor(name: string, email: string) {
// //     this.name = name;
// //     this.email = email;
// //     this.age = 33;
// //   }
// //   getName(): string {
// //     return this.name;
// //   }
// //   setName(value: string): void {
// //     this.name = value;
// //   }
// // }
// // class User extends Person implements User {
// //   token: string;
// //   constructor(name: string, email: string) {
// //     super(name, email);
// //     this.token = "1234";
// //   }
// // }
// // class Auth extends User implements AuthenticationInterface {
// //   isAuth: boolean;
// //   constructor(name: string, email: string) {
// //     super(name, email);
// //     this.isAuth = true;
// //   }
// // }
// abstract class User {
//   name: string;
//   abstract email: string; //thuộc tính trừu tượng
//   constructor() {
//     this.name = "Ahihi";
//   }
//   abstract something(): void;
//   getName(): string {
//     return "Hoàng An";
//   }
// }
// class Auth extends User {
//   email: string;
//   constructor() {
//     super();
//     this.email = "abc@gmail.com";
//   }
//   something(): void {
//     console.log("bhihi");
//   }
// }
// const auth = new Auth();
