//String
// let message = "Unicode"; //Chuỗi
// console.log(message, typeof message);

// let message = String("Unicode");
// console.log(message, typeof message);

// let message = new String("Unicode"); //Đối tượng chuỗi
// console.log(message, typeof message);

//Lưu ý: Các kiểu nguyên thủy trong JS đều có 1 đối tượng bọc ra ngoài, mỗi 1 đối tượng sẽ có 1 hàm tạo (Function Constructor)

// Chuỗi --> có hàm tạo String
// Số --> Có hàm tạo Number
// Logic --> Có hàm tạo Boolean

console.log(String.prototype);
// console.log(Number.prototype);
// console.log(Array.prototype);

// let fullname = "Hoàng An";
// console.log(fullname.toLowerCase());

let str = "Học lập trình không trình khó";
//1. length --> Trả về độ dài của chuỗi
// console.log(str.length);

//2. charAt() --> Trả về ký tự trong chuỗi theo index
// console.log(str.charAt(0));
// console.log(str[0]);

//3. charCodeAt() --> Trả về mã ASCII của ký tự trong chuỗi theo index
// console.log(str.charCodeAt(0));

//4. indexOf() --> Tìm chuỗi con trong chuỗi cha và trả về vị trí đầu tiên tìm được, nếu không tìm thấy trả về -1

//5. lastIndexOf() --> Tìm chuỗi con trong chuỗi cha và trả về vị trí cuối tìm được, nếu không tìm thấy trả về -1
// console.log(str.lastIndexOf("trình"));

//6. includes() --> Tìm chuỗi con trong chuỗi cha --> Nếu tìm thấy trả về true, ngược lại trả về false
// console.log(str.includes("khó1"));

//7. slice(start, end) --> Cắt chuỗi từ vị trí start đến end - 1
// console.log(str);

// console.log(str.slice(1, 3));
// console.log(str.slice(1));
// console.log(str.slice(-5));

//8. replace() --> Thay thế chuỗi đầu tiên tìm được
// console.log(str.replace("trình", "Unicode"));

//9. replaceAll() --> Thay thế tất cả
// console.log(str.replaceAll("trình", "Unicode"));

//Lưu ý: Hàm replace hỗ trợ tìm theo biểu thức chính quy
// let content = `Xin chào 0388874512 và 0394822896`;
// let pattern = /0\d{9}/g;
// console.log(content.replace(pattern, "***"));

//10. repeat() --> Nhân bản chuỗi theo số lần xác định
// let char = "*";
// console.log(char.repeat(10));

//11. toUpperCase() --> Chuyển thành chữ hoa

//12. toLowerCase() --> Chuyển thành chữ thường

// const email = "contact@unicode.vn";
// //Lấy username của email
// const position = email.indexOf("@");
// const username = email.slice(0, position);
// console.log(username);

// let fullname = "TẠ HOÀNG An";
// //Kiểm tra chuỗi xem có phải tất cả ký tự đều viết hoa không?
// const status = fullname === fullname.toUpperCase();
// console.log(status);

//Nguyên tắc xử lý chuỗi --> 3 phần
//Ví dụ
let keyword = "trình";
let content = `Học lập trình không khó`;

//B1: Tìm vị trí
const position = content.toLowerCase().indexOf(keyword.toLowerCase());

//B2: Tách 3 phần
// Phần 1: Từ đầu đến vị trí tìm được
// Phần 2: Đối tượng cần xử lý
// Phần 3: Phần sau đối cần xử lý đến hết

if (position !== -1) {
  let newContent =
    content.slice(0, position) +
    keyword.toUpperCase() +
    content.slice(position + keyword.length);
  console.log(newContent);
}

let fullName = "tạ hoàng an";
fullName = fullName.charAt(0).toUpperCase() + fullName.slice(1);
for (let i = 0; i < fullName.length; i++) {
  const char = fullName.charAt(i);
  const charNext = fullName.charAt(i + 1);
  if (char === " " && charNext !== " ") {
    const position = i + 1;
    fullName =
      fullName.slice(0, position) +
      fullName.charAt(position).toUpperCase() +
      fullName.slice(position + 1);
  }
}
console.log(fullName);
