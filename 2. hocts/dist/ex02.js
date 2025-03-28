"use strict";
//array
// const numbers: number[] = [1, 2, 3, 4, 5, 'a'];
// const users: string[] = ["User 1", "User 2", "User 3", "User 4"];
// const user: [string, string, number, boolean] = [
//   "Hoàng An",
//   "hoangan.web@gmail.com",
//   33,
//   false,
// ];
// const user: {
//   name: string;
//   email: string;
//   age: number;
//   status?: boolean;
// } = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 32,
//   //   status: false,
// };
// const users: { name: string; age: number; status?: boolean }[] = [
//   {
//     name: "Hoàng An",
//     age: 32,
//   },
//   {
//     name: "Tuấn Anh",
//     age: 35,
//   },
//   {
//     name: "Quân",
//     age: 29,
//     status: false,
//   },
// ];
// const getData = async (): Promise<number[]> => {
//   const response: Response = await fetch(
//     `https://api.escuelajs.co/api/v1/products`
//   );
//   const data = await response.json();
//   return data;
// };
// enum STATUS {
//   PENDING = "pending",
//   DONE = "done",
//   ERROR = "error",
// }
// let statusText: STATUS = STATUS.DONE;
//type
// type User = {
//   name: string;
//   email: string;
//   age: number;
//   status?: boolean;
// };
// const user: User = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 33,
// };
// const users: User[] = [
//   {
//     name: "Hoàng An",
//     email: "hoangan.web@gmail.com",
//     age: 33,
//   },
// ];
// interface User {
//   name: string;
//   email: string;
// }
// interface Person extends User {
//   age: number;
// }
// const person: Person = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 33,
// };
//Union
// const statusText: "pending" | "done" | "error" = "pending";
// const a: string | number = true;
// type User = {
//   name: string;
//   age: number;
// };
// type UserOrNull = User | null;
// let user: UserOrNull = null;
// let check: boolean = true;
// if (check) {
//   user = {
//     name: "Hoàng An",
//     age: 32,
//   };
// }
// type A = {
//   name: string;
//   age: number;
// };
// type B = A & {
//   email: string;
// };
// const b: B = {
//   name: "Hoàng An",
//   age: 32,
//   email: "hoangan.web@gmail.com",
// };
// const handle = (a: number, callback: (value: number) => string | number): void => {
//   callback(1);
//   console.log(a);
// };
// handle(1, (value) => {
//   console.log("somethin");
//   return 1;
// });
// const debounce = (callback: (...args: any[]) => void, timeout = 300) => {
//   let timer: number | undefined;
//   return (...args: any[]) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       callback(...args);
//     }, timeout);
//   };
// };
// const saveInput = () => {
//   console.log("Saving data");
// };
// const processChange = debounce((a) => saveInput(), 1000);
// interface CustomError extends Error {
//   status?: number;
// }
// const getData = async () => {
//   try {
//     const response = await fetch(`https://api.escuelajs.co/api/v1/products`);
//     if (!response.ok) {
//       const error: CustomError = new Error("Network response was not ok");
//       error.status = response.status;
//     }
//     return response.json();
//   } catch (error) {
//     if (error instanceof Error) {
//       const err: CustomError = error;
//       console.log(err.status);
//       console.log(err.message);
//       console.log(err.stack);
//     }
//   }
// };
