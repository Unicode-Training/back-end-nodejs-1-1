## Các bước thực hiện đăng nhập thông qua bên thứ 3

1. Lấy Auth Code

Gửi yêu cầu sang server auth của bên thứ 3 (Thường là OAuth 2.0 hoặc OpenId Connect)

Chuyển hướng đăng nhập -> sau khi đăng nhập xong -> Redirect về ứng dụng

2. Lấy access token (Của bên thứ 3)

Dùng Auth Code nhận được ở bước trên --> Gửi lên Server Auth của bên thứ 3 --> Trả về access token

3. Lấy thông tin profile của bên thứ 3

Dùng access token lấy được ở bước trên --> Gửi lên Server Auth của bên thứ 3 --> Trả về thông tin user của bên thứ 3

4. Xử lý đăng nhập trên ứng dụng

Dùng thông tin user nhận được của bên thứ 3 --> Kiểm tra với database của back-end. Nếu trùng, tạo JWT

Nếu tài không tồn tại trong Database --> Insert dữ liệu vào database --> Tạo jwt
