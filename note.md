# Back-End NodeJS

## Lộ trình

1. Ngôn ngữ lập trình

- JavaScript (Trừ DOM)
- TypeScript

2. Package Manager & Bundler (Webpack)

- npm
- Tạo dự án bằng npm + webpack

3. Setup Server NodeJS (Thuần)

- Build thuần
- HTTP Request, HTTP Response

4. ExpressJS

- Setup
- Routing
- Middleware
- Session
- Cookie
- Request, Response,
  ...

5. NestJS

- Đầy đủ các kiến thức liên quan đến Back-End nói chung và NestJS nói riêng
  Yêu cầu: Thành tạo TypeScript

6. Deploy Server

- Thuê Server Linux
- Setup và Deploy

## Javascript

1. Bắt đầu

- JS chạy trên trình duyệt hoặc thông qua NodeJS
- JS chạy thông qua môi trường NodeJS sẽ không sủ dụng được: window, document

2. Biến

2.1. Khai báo biến

```
let tenbien;
```

Quy tắc đặt tên biến

- Chấp nhận: Số, chữ cái (thường, hoa), gạch dưới, $
- Không được bắt đầu bằng số

Ví dụ: customer, customer_name,...

Lưu ý:

- Nên đặt bằng Tiếng Anh
- Nên sử dụng quy tắc camelCase khi đặt tên
- Không đặt tên biến trùng với các từ khóa được sử dụng trong JS (Cú pháp)

Cú pháp: world1Word2Word3

Ví dụ: userId, customerName, userShippingAddress

userName --> Sai
fullName --> Đúng

Nếu khai báo biến mà không gán dữ liệu --> Giá trị mặc định sẽ undefined (Không xác định)

Trong JS, không cần khai báo kiểu dữ liệu --> JS sẽ tự động phát hiện kiểu dữ liệu

Muốn kiểm tra kiểu dữ liệu của 1 biến --> Dùng từ khóa typeof: typeof tenbien|dulieu

Khi dùng let để khai báo biến --> Không được khai báo lại trong cùng 1 phạm vi

2.2. Khai báo hằng số

Hằng số: Không thay đổi được

```
const tenhang = giatri;
```

- Không được phép khai báo lại, gán lại hằng số
- Quy tắc đặt tên giống như phần biến

3. Kiểu dữ liệu

3.1. Kiểu dữ liệu nguyên thủy

- number --> Số
- string --> Chuỗi
- undefined --> Không xác định
- null --> Giá trị rỗng
- boolean --> Logic (Đúng, sai)
- bigInt --> Số lớn khi number không chứa được
- symbol

  3.2. Kiểu dữ liệu tham chiếu

- object --> Đối tượng

4. Toán tử

Biểu thức = toán tử + toán hạng

Ví dụ: S = a + b - c;

4.1. Toán tử số học

```
+, -, *, /, % (Chia lấy dư), ** (lũy thừa)

++, --
```

So sánh count++ và ++count

TH1: Nếu count++, ++count không nằm trong 1 biểu thức khác ==> Giống nhau

TH2: Nằm trong 1 biểu thức khác

- count++ ==> Trả về giá trị trước khi tăng
- ++count ==> Trả về giá trị sau khi tăng

Lưu ý: Trong biểu thức số học --> JS tự động ép kiểu về số để tính toán (Trừ phép cộng)

4.2. Toán tử gán (=)

- Gán khi khai báo biến hoặc gán sau

Một số cách viết tắt khi gán

```
a = a + 10 ==> a += 10
a = a * 10 ==> a *= 10
a = a / 10 ==> a /= 10
a = a - 10 ==> a -= 10
a = a % 10 ==> a %= 10
a = a ** 10 ==> a **= 10
```

4.3. Toán tử so sánh

- Kết quả so sánh luôn trả về boolean
- So sánh 2 toán hạng với nhau

```
>, <, >=, <=
==, ===
!=, !==
```

4.4. Toán tử luận lý

```
&& => Và
|| => Hoặc
! => Phủ định
```

Truthy --> Khi nằm trong ngữ cảnh so sánh tự động chuyển về true

Falsy --> Khi nằm trong ngữ cảnh so sánh tự động chuyển false

```
0, "", false, null, undefined, NaN
```

Toán tử &&: Tìm falsy

- nếu tìm thấy falsy thì sẽ dừng lại và về kết quả falsy
- nếu không tìm thấy falsy trả về kết quả của biểu thức cuối cùng

Toán tử ||: Tìm truthy

- Nếu tìm thấy truthy thì sẽ dừng lại và trả về kết quả truthy
- Nếu không tìm thấy truthy sẽ trả về kết quả biểu thức cuối

  4.5. Toán tử 3 ngôi (?:)

Cú pháp:

```
dieukien ? giatridung : giatrisai
```

4.6. Toán tử nullish (??)

5. Câu lệnh rẽ nhánh

5.1. Câu lệnh if else

```
if (dieukien) {
    Lệnh code
}

if (dieukien) {
    Lệnh đúng
} else {
    Lệnh sai
}

if (dieukien1) {
    Lệnh đúng 1
} else if (dieukien2) {
    Lệnh đúng 2
} else if (dieukien3) {
    Lệnh đúng 3
} else {
    Lệnh sai
}

if (dieukien1) {
    if (dieukien2) {
        Lệnh đúng
    } else {
        Lệnh sai của dieukien2
    }
} else {
    Lệnh sai của điều kiện 1
}

```

5.2. Câu lệnh switch case

- Chỉ chấp nhận so sánh ===
- Áp dụng cho các trường có nhiều nhánh và nhiều điều kiện hoặc

6. Vòng lặp

Cú pháp trong lập trình cho phép đoạn chương trình chạy lặp đi lặp theo số lần nào đó để giải quyết bài toán

- Vòng lặp với số lần lặp xác định trước: for
- Vòng lặp với số lần lặp không xác định trước: while, do while

Từ khóa chung trong vòng lặp:

- break
- continue

  6.1. Vòng lặp for

```
for (bienchay = giatrikhoitao; dieukienchay; buocnhay) {
    Logic
}
```

6.2. Vòng lặp while

```
while (dieukien) {
    Câu lệnh
}

do {
    Câu lệnh
}
while (dieukien)
```

7. Function

- Cú pháp của ngôn ngữ lập trình
- Cho phép nhóm các đoạn chương trình để tiện cho việc tái sử dụng

Cú pháp:

```
function tenHam() {
    Code
}

function tenHam(thamso1, thamso2,...) {
    Code
}
```

--> Declaration function

Quy tắc đặt tên:

- Dùng động từ: make, get, set, print, show, is, check....
- Đặt theo camelCase

## Package

### Khởi tạo dự án sử dụng npm

npm init -y

### Cài đặt các dependencies

npm i hoặc npm install

### Cài đặt thư viện cụ thể

npm i tenthuvien hoặc npm install tenthuvien

Nếu muốn cài phiên bản cụ thể: npm i tenthuvien@phienban hoặc npm install tenthuvien@@phienban

### Các loại dependencies

- Simple Dependency: Các thư viện phục vụ cho môi trường product (Phải có nó thì mới chạy được dự án)

- Dev Dependency: Các thư viện phục vụ cho môi trường dev (Chỉ cần khi dev, khi deploy lên server thì không cần)

npm i tenthuvien --save-dev

Nếu chỉ muốn cài đặt các dependency ở simple dependency: npm i --product

### Gỡ bỏ dependency

npm uninstall tenthuvien

### Làm việc với phiên bản

npm i tenthuvien@phienban

npm update tenthuvien --> Cập nhật lên bản mới nhất của phiên bản đã được cấu hình trong package.json

### Sự khác nhau giữa npm install và npm update

- npm install: Cài theo package-log.json, nếu không có thì theo package.json
- npm update: Cài theo package.json

### Chế độ cài

- Local: Mặc định
- Global: npm i tenthuvien -g

Lưu ý: Cần phải đưa folder node_modules vào .gitignore --> Không push lên git
