//IIFE
// (function (message) {
//   console.log(message);
// })("Unicode");

//Đệ quy
/*
- Gọi lại chính hàm đang định nghĩa
- Giải quyết các bài toán lặp
- Trong web thường được sử dụng xử lý các bài toán đa cấp

Lưu ý: Xác định điều kiện dừng --> Vô hạn
*/

// function showNumber(n) {
//   console.log(n);
//   if (n > 1) {
//     showNumber(n - 1);
//   }
// }
// showNumber(10);

// S = 1 + 2 + 3 +... + n
// function getTotal(n) {
//   if (n === 1) {
//     return n;
//   }
//   return n + getTotal(n - 1);
// }

// const result = getTotal(10);
// console.log(result);

// function fibonacci(n) {
//   //Điều kiện dừng
//   if (n === 1 || n === 2) {
//     return 1;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(10));

//Closure
// let data = "ok chưa";

// function display(message) {
//   let a = 10;
//   function getMessage() {
//     console.log(`getMessage`);
//     //   console.log(message);
//     //   console.log(a);
//     console.log(data);
//   }
//   getMessage();
// }
// display("Unicode");

function display() {
  //   function getMessage() {
  //     console.log("Unicode");
  //   }
  //   return getMessage;
  return function () {
    console.log("Unicode");
  };
}
// const getMessage = display();
// console.log(getMessage);

// getMessage();

/*
Bài toán: Hiển thị kết quả 3 phép toán sau

5 + 1 = ?
5 + 5 = ?
5 + 10 = ?
*/
// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// const adder = sum(5);
// console.log(adder(1));
// console.log(adder(5));
// console.log(adder(10));

const menus = [
  {
    id: 1,
    title: "Menu 1",
    parent: 0,
  },
  {
    id: 2,
    title: "Menu 2",
    parent: 0,
  },
  {
    id: 3,
    title: "Menu 3",
    parent: 0,
  },
  {
    id: 4,
    title: "Menu 2.1",
    parent: 2,
  },
  {
    id: 5,
    title: "Menu 2.2",
    parent: 2,
  },
  {
    id: 6,
    title: "Menu 2.3",
    parent: 2,
  },
  {
    id: 7,
    title: "Menu 2.2.1",
    parent: 5,
  },
  {
    id: 8,
    title: "Menu 2.2.2",
    parent: 5,
  },
];
console.log(menus);

/*
Nested Object
[
   {
    id: 1,
    title: "Menu 1",
    parent: 0,
  },
  {
    id: 2,
    title: "Menu 2",
    parent: 0,
    children: [
        {
            id: 4,
            title: "Menu 2.1",
            parent: 2,
        },
        {
            id: 5,
            title: "Menu 2.2",
            parent: 2,
            children: [
                {
                id: 7,
                title: "Menu 2.2.1",
                parent: 5,
                },
                {
                    id: 8,
                    title: "Menu 2.2.2",
                    parent: 5,
                },
            ]
        },
        {
            id: 6,
            title: "Menu 2.3",
            parent: 2,
        }
    ]
  },
  {
    id: 3,
    title: "Menu 3",
    parent: 0,
  }
]
*/
// const newArr = [];
// for (let i = 0; i < menus.length; i++) {
//   //Lấy tất cả menuItem có parent = 0
//   if (menus[i].parent === 0) {
//     //Thêm các menu item tìm được vào mảng newArr
//     newArr[newArr.length] = menus[i];
//     for (let j = 0; j < menus.length; j++) {
//       //Tìm các menu item cấp 2 là con của 1 menu id nào đó
//       if (menus[j].parent === menus[i].id) {
//         if (!menus[i].children) {
//           menus[i].children = [];
//         }
//         const menuChildren = menus[i].children;
//         menuChildren[menuChildren.length] = menus[j];
//       }
//     }
//   }
// }
// console.log(newArr);

// const getMenuTree = function (menuData, parentId = 0) {
//   const newArr = [];
//   for (let i = 0; i < menuData.length; i++) {
//     if (menuData[i].parent === parentId) {
//       newArr[newArr.length] = menuData[i];
//       const children = getMenuTree(menuData, menuData[i].id);
//       if (children.length) {
//         menuData[i].children = children;
//       }
//     }
//   }
//   return newArr;
// };

// const result = getMenuTree(menus);
// console.log(result);

// document.body.innerHTML = `<select name="" id="">
//       <option value="">Front-End</option>
//       <option value="">--| HTML-CSS</option>
//       <option value="">Back-End</option>
//     </select>`;

// setTimeout(function () {
//   console.log(1);
// }, 0);
// console.log(2);

// const getMessage = (msg) => {
//   console.log("Ok chưa?", msg);
// };
// getMessage("Unicode");

// const sum = (a, b) => a + b;
// console.log(sum(10, 20));

const getUser = () => ({ id: 1, email: "hoangan.web@gmail.com" });
console.log(getUser());
