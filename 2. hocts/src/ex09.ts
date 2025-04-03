// function hello() {
//   console.log("Hello");
//   return function (target: any, propertyKey: any, descriptor: any) {
//     console.log("Hello children");
//   };
// }
// function sayHi() {
//   console.log("Hi");
//   return function (target: any, propertyKey: any, descriptor: any) {
//     console.log("Hi children");
//   };
// }
// function Unicode(constructor: any) {
//   console.log(new constructor());
// }
// function Body(target: any, key: string, index: number) {
//   console.log("Body");
// }
// @Unicode
// class User {
//   @hello()
//   @sayHi()
//   getName(@Body a: any) {
//     console.log("getName");
//     console.log("a", a);
//   }
// }
// const user = new User();
// user.getName("TypeScript");
