//API = Application Programming Interface
// - Giao diện lập trình ứng dụng
// - Cho phép các ứng dụng giao tiếp với nhau
// Các loại API
// 1. API trong các thư viện / framework (Các hàm)
// 2. API trong các hệ điều hành
// 3. API trong web (HTTP, Websocket)
// - Có các chuẩn xây dựng API: RESTful, Soap,...

/*
Cần xác định: 
- URL
- Method: GET, POST, PUT, PATCH, DELETE
- Headers
- Params
- Body

Ví dụ:
- URL: https://api.unicode.vn?page=1&limit=10

Trong JavaScript, dùng fetch để make http request
*/

const getProducts = async () => {
  try {
    const response = await fetch(`https://api.escuelajs.co/api/v1/products`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.text();
    const products = JSON.parse(data);
    console.log(products);
  } catch (error) {
    console.log(error);
  }
};
// getProducts();

const getProduct = async (id) => {
  try {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.text();
    const products = JSON.parse(data);
    console.log(products);
  } catch (error) {
    console.log(error);
  }
};
// getProduct(7);

const crateProduct = async (data) => {
  const response = await fetch(`https://api.escuelajs.co/api/v1/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const dataServer = await response.json(); //Tự động parse chuỗi json thành mảng/object
  console.log(dataServer);
};
// crateProduct({
//   title: "New Product An",
//   price: 10,
//   description: "A description An",
//   categoryId: 1,
//   images: ["https://placehold.co/600x400"],
// });

const updateProduct = async (data, id) => {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/products/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const dataServer = await response.json(); //Tự động parse chuỗi json thành mảng/object
  console.log(dataServer);
};
// updateProduct(
//   {
//     title: "Change title",
//     price: 13000,
//     description: "A description An",
//     categoryId: 1,
//     images: ["https://placehold.co/600x400"],
//   },
//   65
// );

// const deleteProduct = async (id) => {
//   const response = await fetch(
//     `https://api.escuelajs.co/api/v1/products/${id}`,
//     {
//       method: "DELETE",
//     }
//   );
//   const dataServer = await response.json(); //Tự động parse chuỗi json thành mảng/object
//   console.log(dataServer);
// };
// deleteProduct(65);
