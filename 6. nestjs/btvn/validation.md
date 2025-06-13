## Bài 1

Tạo 1 API POST /users để tạo người dùng mới.

Yêu cầu:

- Tạo DTO CreateUserDto với các field:

- username (string, bắt buộc, độ dài min 4)

- email (string, phải đúng định dạng email)

- age (number, lớn hơn hoặc bằng 18)

- Sử dụng @Body() để validate dữ liệu khi tạo user.

## Bài 2

Tạo API GET /users/:id

Yêu cầu:

- Dữ liệu id phải là số nguyên dương.

- Tạo DTO UserParamDto để validate id.

## Bài 3

Tạo API GET /search?keyword=abc&page=1&limit=10

Validate:

- keyword là chuỗi không được rỗng.

- page và limit là số, lớn hơn 0.

- Tạo SearchQueryDto để áp dụng validation.

## Bài 4

Tạo API POST /orders với dữ liệu như sau:

```js
{
  "customerName": "An",
  "items": [
    { "productId": 1, "quantity": 2 },
    { "productId": 2, "quantity": 0 }
  ]
}
```

Validate:

- customerName: không rỗng

- items: mảng có ít nhất 1 phần tử

- productId: số nguyên dương

- quantity: lớn hơn 0

## Bài 5

Tạo API POST /auth/register với password có quy định:

- Ít nhất 8 ký tự

- Chứa cả chữ hoa, chữ thường, số

Yêu cầu:

- Tạo custom decorator @IsStrongPassword().
