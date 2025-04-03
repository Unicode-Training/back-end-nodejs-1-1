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

namespace Ex06 {
  export const getMessage = () => {
    console.log("Unicode");
  };
}

namespace Ex06 {
  export const getName = () => {
    console.log("Hoàng An");
  };
}
Ex06.getMessage();
Ex06.getName();
