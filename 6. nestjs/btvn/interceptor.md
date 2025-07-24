## Bài 1

Tạo một interceptor ghi log thời gian bắt đầu và kết thúc của mỗi request (cùng với tên route).

## Bài 2

Tạo interceptor để định dạng lại response theo cấu trúc:

```
{
  statusCode: 200,
  data: ...,
  timestamp: ...
}
```

## Bài 3

Tạo một interceptor giới hạn thời gian xử lý của handler

Ví dụ: 3s (Giá trị này thay đổi được)

## Bài 4

Với các DTO trả về từ controller, loại bỏ các trường có tên bắt đầu bằng `_` (underscore) trong kết quả response.
