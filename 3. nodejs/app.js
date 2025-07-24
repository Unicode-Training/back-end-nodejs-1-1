const dotenv = require("dotenv");
dotenv.config();
const http = require("http");
const url = require("url");
//Khởi tạo server
const routes = require("./route");

const server = http.createServer((req, res) => {
  const urlParse = url.parse(req.url, true);
  const pathname = urlParse.pathname;
  let func;

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  for (let route in routes) {
    const value = routes[route];
    const key = route.replace(/\:\w+/g, "(.+?)");
    const paramList = route.match(/\:\w+/g);
    const pattern = new RegExp(`^${key}$`);
    const match = pathname.match(pattern);
    if (match) {
      func = value;

      //Xử lý url params
      if (paramList?.length) {
        if (!req.params) {
          req.params = {};
        }
        for (let i = 0; i < paramList.length; i++) {
          const param = match[i + 1];
          const paramName = paramList[i].replace(":", "");
          if (param && paramName) {
            req.params[paramName] = param;
          }
        }
      }

      //Xử lý url query string
      if (urlParse.search) {
        const searchQuery = new URLSearchParams(urlParse.search);
        req.query = Object.fromEntries(searchQuery.entries());
      } else {
        req.query = {};
      }

      //Xử lý headers
      if (req.headers) {
        req.get = (key) => req.headers[key];
      }

      //Xử lý response
      res.json = (data) => {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        return res.end(JSON.stringify(data));
      };
      res.send = (data) => {
        res.end(data);
      };
      res.status = (code) => {
        res.statusCode = code;
        return res;
      };
      res.set = res.setHeader;
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
