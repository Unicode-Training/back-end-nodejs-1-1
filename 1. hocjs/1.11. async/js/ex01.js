//Biến các tác vụ bất đồng bộ --> hoạt động như đồng bộ
/*
3 cách xử lý bất đồng bộ

1. callback
2. promise
3. async/await
*/
// const downloadImage = (callback) => {
//   setTimeout(() => {
//     const image = "abc.jpg";
//     if (typeof callback === "function") {
//       callback(image);
//     }
//   }, 2000);
// };
// const showMessage = () => {
//   console.log("Show message");
// };
// downloadImage(function (data) {
//   console.log(data);
//   showMessage();
// });

//Chaining: a().b().c()

//Promise: Object đặc biệt dùng để xử lý các tác vụ bất đồng bộ
/*
1. Trạng thái của promise
- pending --> Chờ kết quả trả về
- fulfilled --> Kết quả trả về thành công
- rejected --> Kết quả trả về thất bại

2. Khởi tạo object Promise
*/
const myPromise = new Promise((resolve, reject) => {
  //Chứa logic của tác vụ bất đồng bộ
  //Nếu tác vụ bất đồng bộ trả về dữ liệu thành công --> gọi hàm resolve
  //Nếu tác vụ bất đồng bộ trả về dữ liệu thất bại --> gọi hàm reject
  setTimeout(() => {
    //Giả sử thành công
    const data = { name: "Hoàng An", email: "contact@unicode.vn" };
    resolve(data);
    // reject("Lỗi network");
  }, 2000);
});

//3. Lấy dữ liệu từ promise
const showMessage = () => {
  console.log("Trả về kết quả thành công");
};
// myPromise
//   .then((data) => {
//     console.log(data);
//     showMessage();
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Finally");
//   });
// const promise2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Promise 2");
//   }, 1000);
// });
// myPromise
//   .then((data) => {
//     console.log(data);
//     //Nếu muốn đưa giá trị vào resolve của promise then() --> return giá trị tương ứng
//     //Hoặc có thể return về 1 promise mới
//     //   return "A";
//     return promise2;
//   })
//   .then((data) => {
//     console.log(data);
//   });
// // --> Promise Chaining

const getUser = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const users = [
        {
          id: 1,
          name: "User 1",
          salary: 1000,
        },
        {
          id: 2,
          name: "User 2",
          salary: 2000,
        },
        {
          id: 3,
          name: "User 3",
          salary: 3000,
        },
        {
          id: 4,
          name: "User 4",
          salary: 4000,
        },
      ];
      const user = users.find((user) => user.id === userId);
      resolve(user);
    }, Math.random() * 1000);
  });
};
const ids = [1, 2, 4];
// const totalPromise = new Promise((resolve) => {
//   let total = 0;
//   let count = 0;
//   for (let i = 0; i < ids.length; i++) {
//     getUser(ids[i]).then((data) => {
//       total += data.salary;
//       count++;
//       if (count === ids.length) {
//         resolve(total);
//       }
//     });
//   }
// });
// totalPromise.then((data) => {
//   console.log(data);
// });

//Promise.all --> Resolve nhiều promise song song
// - Nhận vào 1 mảng chứa danh sách các promise
// - Trả về 1 mảng chứa các dữ liệu đã được resolve
const promiseArray = ids.map((id) => getUser(id));
Promise.all(promiseArray).then((users) => {
  const total = users.reduce((total, user) => total + user.salary, 0);
  console.log(total);
});
