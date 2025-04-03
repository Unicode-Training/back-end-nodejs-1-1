// type User = {
//   [key: string]: string | boolean | object;
// };
// interface User {
//   [key: string]: string | boolean | object;
// }
// const user: User = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   info: {
//     address: "Hà Nội",
//   },
//   status: false,
// };

// type User = {
//   [index: number]: any;
// };
// const user: User = ["An", false, 13, null, undefined];
// // user['a'] = 12;

//Generics
// function getValue<T>(name: T): { value: T } {
//   return {
//     value: name,
//   };
// }
// const getValue = <T>(name: T): { value: T } => {
//   return {
//     value: name,
//   };
// };
// const getValue = function <T>(name: T): { value: T } {
//   return {
//     value: name,
//   };
// };
// getValue<string>("An");

// class User<T> {
//   name: T;
//   constructor(name: T) {
//     this.name = name;
//   }
//   showaInfo<X>(age: X): void {
//     const data: {
//       name: T;
//       age: X;
//     } = {
//       name: this.name,
//       age,
//     };
//     console.log(data);
//   }
// }
// const user = new User<string>("An");
// user.showaInfo<number>(33);

// type User<X extends string | number, Y> = {
//   name: X;
//   age: Y;
// };
// const user: User<boolean, number> = {
//   name: false,
//   age: 32,
// };

//Kết hợp exends vs keyof
// type User = {
//   name: string;
//   email: string;
//   age: number;
// };

// function getProperty<T, K extends keyof T>(obj: T, key: K) {
//   return obj[key];
// }
// const user: User = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 32,
// };
// getProperty<User, "name">(user, "name");
// getProperty<User, "address">(user, "address");

// type User = {
//   name: string;
//   email: string;
// };
// const getUsers = (): Promise<User> => {
//   return new Promise((resolve, reject) => {
//     // resolve({
//     //   name: "Hoàng An",
//     //   email: "hoangan.web@gmail.com",
//     // });
//     reject("Error");
//   });
// };

// const today: Date = new Date();

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
const getData = async <T>(token: string): Promise<T[]> => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const options: RequestInit = {
    method: "GET",
    headers,
  };
  const response: Response = await fetch(
    `https://jsonplaceholder.typicode.com/todos`,
    options
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data: T[] = await response.json();
  return data;
};
getData<Todo>("ahihi");
