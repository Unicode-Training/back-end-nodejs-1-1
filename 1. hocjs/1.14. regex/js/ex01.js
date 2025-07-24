//Biểu thức chính quy: Biểu thức được sử dụng để xử lý chuỗi
// Pattern: /kyhieu/modifier

//Tác dụng:
// 1. So khớp --> pattern.test("chuoi")
// 2. Cắt chuỗi
// 3. Thay thế

// const pattern = /hoangan/g;
// console.log(pattern);

// const pattern2 = new RegExp("hoangan", "g");
// console.log(pattern2);

//Các ký hiệu cơ bản
/*
- chuoibatky --> Kiểm tra xem chuỗi có nằm trong chuỗi cần tìm không
- ^ --> Khớp đầu chuỗi
- $ --> Khớp cuối chuỗi
- [A-Z] --> Chữ hoa
- [a-z] --> Chữ thường
- [0-9] --> Số
- [char-list] --> Danh sách các ký tự muốn kiểm tra
Lưu ý: 
- Nếu dùng [], các biểu thức ở bên trong kết hợp với nhau theo điều kiện hoặc
- Viết ở ngoài, sẽ kết hợp theo điều kiện và, đúng thứ tự

Mặc định các biểu thức sẽ khớp độ dài là 1

Cú pháp khớp độ dài: 

{n} --> Độ dài cố định n
{min,} --> Độ dài >= min
{min, max} --> Độ dài từ min đến max

Cú pháp viết tắt của độ dài

+ --> {1,}
* --> {0,}
? --> {0,1}

Các ký hiệu đặc biệt: Là ký hiệu của biểu thức chính quy
. --> Khớp tất cả ký tự
[
]
+
?
*
/
==> Muốn kiểm tra, phải thêm ký tự \ phía trước

Hoặc: | --> Nên kết hợp với cặp ngoặc tròn để đạt kết quả chính xác
Phủ định: ^ (Viết trong biểu thức)

Greedy (Tham lam): Khi dùng dấu . --> Xảy ra tình huống khớp giá trị vượt quá phạm vi mong muốn

Để khắc phục, dùng kỹ thuật Lazy: Thêm dấu ? phía sau độ dài

Ký hiệu viết tắt khác: 

\w --> [a-zA-Z0-9_]
\W --> [^a-zA-Z0-9_]
\d --> [0-9]
\D --> [^0-9]
\s --> Khoảng trắng
\S --> Ngược lại của \s
*/
// const str = "tahoangan";
// const pattern = /abc/;
// const result = pattern.test(str);
// console.log(result);

//Bài tập 1: Kiểm tra biến hợp lệ trong js
// const variable = "_a123@";
// const pattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
// console.log(pattern.test(variable));

//Bài tập: Kiểm tra email hợp lệ

/*
Kiểm tra email hợp lệ
username@domain.ext
1. username
- Bắt đầu bằng chữ cái
- Chấp nhận chữ HOA, thường, gạch dưới, gạch ngang, . và số
- Tối thiểu 3 ký tự trở lên
2. domain
- Bắt đầu bằng chữ cái
- Chấp nhận chữ HOA, thường, gạch dưới, gạch ngang, . và số
- Tối thiểu 1 ký tự
3. ext
- Chữ cái thường, HOA
- Tối thiểu 2 ký tự

Test: 
hoangan.web-@gmail.com ==> failed
hoangan@fullstack-.edu.vn ==> failed

Ví dụ: hoangan.com.vn, khoahoc.hoangan.com.vn
*/

// const email = "hoangan.web@gmail.com";
// const pattern =
//   /^[a-zA-Z][a-zA-Z0-9-_.]+[a-zA-Z0-9]+@([a-zA-Z]\.|([a-zA-Z]+[A-Za-z0-9-_]*[a-zA-Z0-9]+)\.)+[a-zA-Z]{2,}$/;
// console.log(pattern.test(email));

//Cắt chuỗi
//string.match(pattern)
// const content = `Xin chào anh em 0388874512 và 0394822896`;
// const pattern = /(0|\+84)\d{9}/g;
// const result = content.match(pattern);
// console.log(result);

//Capturing groups: Kỹ thuật chụp 1 phần của biểu thức chính quy để trả về kết quả (Không áp dụng global)

//Non-Capturing groups: Kỹ thuật loại bỏ giá trị trong () ra khỏi kết quả
// const phone = "0388875179";
// const pattern = /(?:0|\+84)(\d{9})/;
// const result = phone.match(pattern);
// console.log(result);

//Thay thế
// const content = `Xin chào anh em 0388874512 và 0394822896`;
// const pattern = /(0|\+84)\d{9}/;
// const newContent = content.replace(pattern, "***");
// console.log(newContent);

//Đối sánh chuỗi: Lấy chính group ở trong biểu thức chính quy để đưa vào giá trị sau thay thế
/*
group 1 --> $1
group 2 --> $2
...
*/
// const content = `Xin chào anh em 0388874512 và 0394822896`;
// const pattern = /((0|\+84)\d{9})/g;
// const newContent = content.replace(pattern, `<a href="tel:$1">$1<a>`);
// console.log(newContent);
