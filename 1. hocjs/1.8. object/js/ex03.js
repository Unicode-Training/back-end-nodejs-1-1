//Function Constructor

//this: context (Ngữ cảnh)

// const user = {
//   fullname: "Hoàng An",
//   email: "contact@unicode.vn",
//   getInfo: function () {
//     // console.log(this);
//     const _this = this;
//     return {
//       age: 32,
//       //   getAge() {
//       //     console.log(_this.email);
//       //   },
//       getAge: () => {
//         console.log(this.email);
//       },
//     };
//   },
// };

// user.getInfo().getAge();

// function helloWorld(a, b) {
//   console.log(this);
//   console.log(a);
//   console.log(b);
// }
// const hello = helloWorld.bind("Unicode");
// hello();
// console.log(this);

// helloWorld.call("Unicode", 10, 20);
// helloWorld.apply("Unicode", [10, 20]);

//Dùng hàm để định nghĩa object

//PascalCase: XinChaoAnhEm
// function User(name, email) {
//   this.name = name; //non-static property
//   this.email = email; //non-static property
//   this.getName = function () {
//     //non-static method
//     return this.name;
//   };
//   this.getEmail = function () {
//     //non-static method
//     return this.email;
//   };
// }
// User.message = "Ahihi"; //static property
// User.getMessage = function () {
//   //static method
//   return "Bhihi";
// };
//Khởi tạo object từ constructor
// const user = new User("Hoàng An", "hoangan.web@gmail.com");
// console.log(user);

// const customer = new User("Nguyen Van B", "nguyenvanb@gmail.com");
// console.log(customer);

//user, customer gọi là sự thể hiện của User (instance)

// console.log(User.message);
// console.log(User.getMessage());
// User.prototype.something = function () {
//   console.log("something");
//   //Làm thế nào để từ hàm này gọi đến được static property
//   console.log(this.constructor.message);
// };
// const user = new User("Hoàng An", "hoangan.web@gmail.com");
// user.something();

// User.prototype.compnay = "Unicode";
// User.getCompany = function () {
//   //Làm thế nào để truy cập vào thuộc tính / phương thức non-static
//   const instance = new this();
//   console.log(instance.compnay);
// };
// User.getCompany();

// function User(name, email) {
//   this.name = name;
//   this.email = email;
//   this.getInfo = function () {
//     return "Ahihi";
//   };
// }
// User.prototype.message = `Hello anh em`;

// function Auth(name, email) {
//   User.call(this, name, email);
//   this.getProfile = function () {
//     //Kế thừa 2 thuộc tính: name và email của User
//     console.log(this.name);
//     console.log(this.email);
//     // console.log(this.message);
//   };
// }

// const auth = new Auth("Hoàng An", "hoangan.web@gmail.com");
// console.log(auth);
// auth.getProfile();
// console.log(auth.name);
// console.log(auth.email);
// console.log(auth.getInfo());
