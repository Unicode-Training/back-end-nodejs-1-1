"use strict";
// type User = {
//   name: string;
//   email: string;
// };
// const user: Readonly<User> = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };
// user.name = "ahihi";
// type Role = "admin" | "user" | "guest";
// type Role = {
//   admin: string;
//   user: string;
//   guest: string;
// };
// type Permission = Record<keyof Role, string[]>;
// const permissions: Permission = {
//   admin: ["read", "create", "update", "delete"],
//   user: ["read", "create"],
//   guest: ["read"],
// };
// type User = {
//   name: string;
//   email: string;
//   age: number;
// };
// const user: Omit<User, "age"> & { age: string } = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: "33",
// };
// type Role = "admin" | "user" | "guest";
// type Role = {
//   admin: string;
//   user: string;
//   guest: string;
// };
// // type UserRole = Exclude<keyof Role, "guest">;
// type UserRole = Extract<keyof Role, "admin" | "user">;
// const roles: UserRole = "user";
// type User = {
//   name: string;
//   email: string;
//   status: null;
//   address: undefined;
// };
// // type Name = string | null | undefined;
// // type NonNullableName = NonNullable<Name>;
// type NonNullableName = NonNullable<keyof User>;
// const fullname: NonNullableName = "Hoàng An";
// const getMessage = () => {
//   return "Học ts không khó";
// };
// const welcome: ReturnType<typeof getMessage> = "Unicode";
// class User {
//   name: string = "Hoàng An";
//   age: number = 33;
// }
// const customer: InstanceType<typeof User> = {
//   name: "Hoàng An",
//   age: 33,
// };
