"use strict";
// namespace Ex06 {
//   export class User {
//     name: string;
//     constructor() {
//       this.name = "Hoàng An";
//     }
//   }
//   export const getMessage = () => {
//     console.log("Unicode");
//   };
// }
// //Sử dụng
// const user = new Ex06.User();
// console.log(user);
// Ex06.getMessage();
var Ex06;
(function (Ex06) {
    Ex06.getMessage = () => {
        console.log("Unicode");
    };
})(Ex06 || (Ex06 = {}));
(function (Ex06) {
    Ex06.getName = () => {
        console.log("Hoàng An");
    };
})(Ex06 || (Ex06 = {}));
Ex06.getMessage();
Ex06.getName();
