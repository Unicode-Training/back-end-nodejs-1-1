"use strict";
// type User = {
//   [key: string]: string | boolean | object;
// };
// interface User {
//   [key: string]: string | boolean | object;
// }
// const user: User = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   info: {
//     address: "Hà Nội",
//   },
//   status: false,
// };
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getData = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const headers = {
        "Content-Type": "application/json",
    };
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }
    const options = {
        method: "GET",
        headers,
    };
    const response = yield fetch(`https://jsonplaceholder.typicode.com/todos`, options);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const data = yield response.json();
    return data;
});
getData("ahihi");
