//try catch finally
// try {
//   const getA = () => {
//     console.log("Ok");
//   };
//   getA(); //Lỗi
//   //   getB(); //Lỗi
//   //Lỗi logic --> Bắt lỗi
//   const a = 0;
//   if (a === 0) {
//     const error = new Error("a phải là số khác 0");
//     error.status = 400;
//     throw error;
//   }
//   console.log(1);
// } catch (error) {
//   console.dir(error);
// } finally {
//   console.log("Finish");
// }

// console.log("Chạy tiếp");

//async, await
//- async function
/*
- Luôn trả về 1 promise
- Để sử dụng từ khóa await
*/
//- Từ khóa await
/*
- Resolve promise
- Các nội dung bên dưới await sẽ chờ cho đến khi promise resolve xong
- Phải đặt trong async function
*/

// const demoPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const obj = {
//       getData: () => {
//         return new Promise((resolve) => {
//           resolve("Ok chưa?");
//         });
//       },
//     };
//     // resolve(obj);
//     reject("Lỗi gì đó");
//   }, 2000);
// });
// const demoPromise2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Ok chưa? 2");
//   }, 1000);
// });

// const something = async () => {
//   try {
//     const dataPs = await demoPromise;
//     const data = await dataPs.getData();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("Finish");
//   }
// };
// something();

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
//Tính tổng salary của 3 users trong ids sử dùng async await
const showTotal = async () => {
  //   let total = 0;
  //   for (let i in ids) {
  //     const user = await getUser(ids[i]);
  //     total += user.salary;
  //   }
  //   console.log(total);
  const users = await Promise.all(ids.map((id) => getUser(id)));
  const total = users.reduce((total, user) => total + user.salary, 0);
  console.log(total);
};
showTotal();
