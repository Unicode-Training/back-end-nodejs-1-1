//Tham chiếu
// const user = {
//   name: "Hoàng An Unicode",
//   email: "contact@unicode.vn",
// };

// const customer = Object.assign({}, user);
// const customer = { ...user };
// const json = JSON.stringify(user);
// const customer = JSON.parse(json);
// customer.name = "Unicode";

// console.log(user);

//Enhanced Object Literal
// const fullname = "Hoàng An";
// const email = "hoangan.web@gmail.com";
// let age;
// const getName = () => {
//   console.log("Hoàng An");
// };
// const user = {
//   fullname,
//   email,
//   age,
//   getName,
//   getEmail() {
//     console.log("contact@unicode.vn");
//   },
// };
// console.log(user);

//Destructuring: Phá vỡ cấu trúc của object, array để truy cập vào các key hoặc phần tử và gán thành biến riêng biệt
// const user = {
//   fullname: "Hoàng An",
//   email: "contact@unicode.vn",
//   age: 32,
//   address: "Hà Nội",
//   status: null,
// };
// // const fullname = user.fullname;
// // const email = user.email;
// const { fullname: username, email, status = "active", ...rest } = user;
// console.log(username);
// console.log(email);
// console.log(rest);
// console.log(status);

// const users = ["Hoàng An", "hoangan.web@gmail.com", 32, "Hà Nội"];
// const [fullname, email, , address] = users;
// console.log(fullname);
// console.log(email);
// console.log(address);

// const info = {
//   displayName: "Hoàng An Unicode",
//   emails: [
//     {
//       email: "contact@unicode.vn",
//     },
//   ],
// };
//Destructuring ra 2 biến displayName và email chỉ trong 1 dòng
// const {
//   displayName,
//   emails: [{ email }],
// } = info;
// console.log(displayName);
// console.log(email);

const data = [
  {
    id: 1,
    name: "Item 1",
  },
  {
    id: 2,
    name: "Item 2",
  },
  {
    id: 3,
    name: "Item 3",
  },
];
//Thêm 1 phần tử mới nhưng không thay đổi phần tử đầu (Dùng spread operator)
// const newData = [...data, { id: 4, name: "Item 4" }];
// console.log(newData);
// console.log(data);
// const newData = [...data].map((item) => {
//   if (item.id === 2) {
//     return {
//       ...item,
//       name: "Item 2.1",
//     };
//   }
//   return item;
// });
// console.log(newData);
// console.log(data);

//Classes
class User {
  #income = null;
  constructor(name, email, income) {
    this.name = name;
    this.email = email;
    this.#income = income;
  }
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
  getIncome() {
    return this.#income;
  }
}
class Auth extends User {
  constructor(name, email, income) {
    super(name, email, income);
    this.status = true;
  }
  getInfo() {
    return `- Name: ${this.name} - Email: ${
      this.email
    } - Income: ${this.getIncome()}`;
  }
  static message = "Ahihi";
  static getMessage() {
    return "Unicode";
  }
}
// const auth = new Auth("Hoàng An", "contact@unicode.vn", 1000);
// console.log(auth);
// console.log(auth.getInfo());
// console.log(auth.status);
console.log(Auth.message);
console.log(Auth.getMessage());

// class Person {
//   #data = ["Item 1", "Item 2", "Item 3"];
//   get latest() {
//     return this.#data[this.#data.length - 1];
//   }
//   set latest(value) {
//     this.#data.push(value);
//   }
// }
// const person = new Person();
// person.latest = "Item 4";
// console.log(person.latest);

// const users = ["User 1", "User 2", "User 3", "User 4"];
// console.log(users.length);
// users.length = 2; //setter
// console.log(users);

// document.body.innerHTML = `Ahihi`; //setter
// console.log(document.body.innerHTML); //getter
