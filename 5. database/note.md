# Database

## Cơ sở dữ liệu

- Nơi lưu trữ, tổ chức dữ liệu một cách khoa học (Tủ tài liệu)
- Không thể thực hiện các thao tác: Thêm, sửa, xóa, truy vấn...
- 2 loại:

* Cơ sở dữ liệu quan hệ (Làm việc dưới dạng bảng)
* Cơ sở dữ liệu phi quan hệ

## Hệ quản trị cơ sở dữ liệu

- Phần mềm để quản lý cơ sở dữ liệu
- Có phiên bản rõ ràng
- Truy vấn cơ sở dữ liệu: Thêm, sửa, xóa, lọc, hiển thị,...
- Ví dụ: MariaDB, MySQL, SQL Server, PosgreSQL...

Khi làm việc với CSDL quan hệ --> Dùng ngôn ngữ truy vấn SQL

Đặc điểm khác giữa các hệ quản trị CSDL

- Khả năng lưu trữ
- Kiểu dữ liệu
- Hàm hỗ trợ
- Đặc điểm riêng

* MySQL/MariaDB: Tìm kiếm bằng LIKE --> Không phân biệt hoa thường, không phân biệt có dấu và không dấu
* PosgreSQL: Tìm kiếm bằng LIKE --> Phân biệt hoa thường, phân biệt có dấu và không dấu --> Chuyển qua dùng ILIKE

- Hiệu năng

## Kiểu dữ liệu

1. Number

- tinyint --> Số nguyên với mức lưu trữ nhỏ
- int --> Số nguyên
- bigint --> Số nguyên
- double --> Số thực

2. String

- char(n) --> Ký tự cố định
- varchar(n) --> Chuỗi biến đổi (n là độ dài tối đa)
- text --> Văn bản dài

3. DateTime

- date --> ngày tháng năm
- time --> thời gian
- datetime --> Ngày tháng năm và thời gian
- timestamp --> Ngày tháng năm và thời gian

## Ngôn ngữ truy vấn SQL

Comment: --

1. Cấu trúc

- Các câu lệnh để tạo nên các bảng, khóa,...

Làm việc với Database:

1.1. Tạo database

```
CREATE DATABASE ten_database;
```

1.2. Xóa database

```
DROP DATABASE ten_database;
```

1.3. Xem danh sách database

```
SHOW DATABASES;
```

1.4. Chọn database để làm việc

```
use ten_database;
```

Làm việc với bảng

- Tạo bảng
- Xem danh sách bảng trong database: `SHOW TABLES`
- Xem cấu trúc của 1 bảng trong database: `DESCRIBE ten_bang`
- Xóa bảng: `DROP TABLE ten_bang`

2. Truy vấn

- Thêm
- Sửa
- Xóa
- Lấy dữ liệu

3. Toán tử và mệnh đề

Toán tử: =, >, >=, <, <=, <>, !=

Mệnh đề: between, like, in, or, not,
and, is null, exists

Ví dụ: id IN (1,2,3)

## Bài tập 1

Tạo bảng customers có các trường sau:

- id int
- name varchar(15)
- email varchar(100)
- password varchar(100)
- verfication_at timestamp
- created_at timestamp
- updated_at timestamp

Thêm 2 cột mới sau cột password

- phone varchar(15)
- status tinyint(1)

Unique nhiều cột

Name: User 1
Email: user1@gmail.com

Name: User 1
Email: user2@gmail.com

--> Không bị ràng buộc unique

## Các loại quan hệ trong Database

1. One to one

- 1 bản ghi của bảng này liên kết tới 1 bản ghi của bảng khác và ngược lại
- Ví dụ: 1 người đàn ông chỉ có 1 vợ

2. One to many

- 1 bản ghi của bảng này liên kết tới 1 hoặc nhiều bản ghi của bảng khác
- Quan hệ ngược lại gọi là thuộc về

Ví dụ:

- 1 user sẽ có 1 hoặc nhiều posts
- 1 post chỉ thuộc 1 user (Thuộc về, Many to one)

3. Many to many

- 1 bản ghi của bảng này có thể liên kết tới 1 hoặc nhiều bản ghi của bảng khác
- 1 bản ghi của bảng khác có thể liên kết tới 1 hoặc nhiều bản ghi của bảng này

Để giải quyết bài toán này --> Cần phải có bảng trung gian

Ví dụ:

users

- id
- name
- email
- group_id

groups

- id
- name

Cần thể hiện các thông tin

- id
- name
- email
- group_name

SELECT \* FROM users; (Giả sử có 4 users)

App: Lặp qua từng user

1. SELECT \* FROM group WHERE group_id = 1
2. SELECT \* FROM group WHERE group_id = 1
3. SELECT \* FROM group WHERE group_id = 2
4. SELECT \* FROM group WHERE group_id = 2

==> Query N + 1
