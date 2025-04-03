const http = require("http");
const url = require("url");
//Khởi tạo server
// const server = http.createServer((req, res) => {
//   const urlParse = url.parse(req.url, true);
//   const pathname = urlParse.pathname;
//   //   const queryString = urlParse.search;
//   //   const searchParams = new URLSearchParams(queryString);
//   //   const searchValue = searchParams.get("search");
//   //   console.log(`Search value: ${searchValue}`);

//   //   const method = req.method;
//   //   console.log(`Method: ${method}`);
//   //   const xApiKey = req.headers["x-api-key"];
//   //   console.log(`x-api-key: ${xApiKey}`);
//   //   let body = "";
//   //   req.on("data", (buffer) => {
//   //     body += buffer.toString();
//   //   });

//   //   return req.on("end", () => {
//   //     console.log(body);
//   //     res.end(body);
//   //   });

//   res.setHeader("Content-Type", "application/json; charset=utf-8");
//   res.setHeader("x-api-key", "ahihi");
//   const users = [
//     {
//       id: 1,
//       name: "Hoàng An",
//     },
//     {
//       id: 2,
//       name: "Hoàng An 2",
//     },
//     {
//       id: 3,
//       name: "Hoàng An 3",
//     },
//   ];
//   res.end(JSON.stringify(users));
// });
const users = require("./modules/users");
const products = require("./modules/products");
const routes = {
  "/users": users.index,
  "/products": products.index,
  "/users/:userId": users.detail,
};

const server = http.createServer((req, res) => {
  const urlParse = url.parse(req.url, true);
  const pathname = urlParse.pathname;
  let func;

  res.setHeader("Content-Type", "application/json; charset=utf-8");
  for (let route in routes) {
    const value = routes[route];
    const key = route.replace(/\:.+/g, "(.+?)");
    const paramList = route.match(/\:.+/g);
    const pattern = new RegExp(`^${key}$`);
    const match = pathname.match(pattern);
    if (match) {
      const param = match[1];
      func = value;
      if (!req.params) {
        req.params = {};
      }
      req.params[paramList[0].replace(":", "")] = param;
      break;
    }
  }
  if (typeof func === "function") {
    return func(req, res);
  }
  res.statusCode = 404;
  return res.end(
    JSON.stringify({
      status: 404,
      message: "Not Found",
    })
  );
});

const port = 6969;
server.listen(port, "localhost", () => {
  console.log(`Đang chạy với server: http://localhost:${port}`);
});
