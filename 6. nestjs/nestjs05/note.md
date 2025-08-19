# Bài tập

Tạo bảng orders

- id
- total
- status: pending | completed | cancel
- created_at
- updated_at

Viết API

POST /orders --> Thêm order mới

POST /orders/checkout --> Cập nhật trạng thái của đơn hàng thành completed

Body:

```
{
    orderId: 1
}
```

Nếu sau 5 phút không thanh toán --> Tự động cập nhật trạng thái thành cancel
