## Bài 1: Thêm route `POST /users` để tạo người dùng

- Khi client gửi dữ liệu JSON chứa `name`, sẽ thêm vào một mảng users giả lập.
- Trả về thông báo đã thêm cùng với danh sách user hiện tại.

## Bài 2: Route `GET /users/search?keyword=abc`

- Tìm kiếm tên người dùng theo keyword.
- Trả về danh sách user có chứa từ khóa.

## Bài 3: Route `DELETE /users/:userId`

- Xóa user theo id trong mảng giả lập.
- Trả về danh sách user còn lại hoặc thông báo nếu không tìm thấy.

## Bài 4: Tạo middleware đơn giản

- Tạo một middleware kiểm tra nếu URL chứa từ "hack" thì trả về 403 Forbidden.
- Chèn middleware vào `createServer` trước khi định tuyến.

## Bài 5: Tạo file `logger.js` ghi log các request vào file log.txt

- Ghi lại method, url, thời gian mỗi khi có request.
- Sử dụng `fs.appendFile`.

## Bài 6: Thêm route `GET /products/:id/reviews`

- Trả về danh sách đánh giá giả lập của 1 sản phẩm theo `id`.

## Bài 7: Tạo module `orders.js`

- Thêm các route:
  - `GET /orders` → trả danh sách đơn hàng
  - `POST /orders` → tạo đơn hàng mới
  - `GET /orders/:orderId` → chi tiết đơn hàng
