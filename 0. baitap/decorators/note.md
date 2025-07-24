## Bài tập 1: Auto log thời gian thực thi method

Viết decorator @LogTime() để tự động log thời gian chạy của method (thực thi bao lâu).

```ts
class TaskService {
  @LogTime()
  doHeavyTask() {
    // giả lập task nặng
    for (let i = 0; i < 1e7; i++) {}
  }
}
```

Kết quả mong đợi:

Method doHeavyTask executed in 234ms

## Bài tập 2: Tự động validate kiểu dữ liệu của tham số hàm

Yêu cầu:
Viết decorator @ValidateTypes() để validate các kiểu dữ liệu truyền vào method (Dựa vào type của tham số hàm)

```ts
class ProductService {
  @ValidateTypes()
  updateProduct(id: number, name: string, price: number) {
    // logic update
  }
}
```

Nếu gọi:

```ts
productService.updateProduct("abc", "New Name", 100); //Lỗi: id phải là số
```

Gợi ý: Dùng Reflect.getMetadata("design:paramtypes", target, propertyKey) để lấy kiểu dữ liệu.

## Bài tập 3: Ghi đè constructor để inject giá trị mặc định từ config

Yêu cầu: Viết class decorator @InjectDefaults() để tự động gán giá trị mặc định cho các thuộc tính từ một object config bên ngoài.

```ts
const defaultConfig = {
  apiUrl: "https://api.example.com",
  retry: 3,
};

@InjectDefaults(defaultConfig)
class ApiService {
  apiUrl!: string;
  retry!: number;
}
```

Sau khi new ApiService(), thì apiUrl và retry đã có sẵn giá trị tương ứng.

Lưu ý: Ae có thể tìm hiểu thêm cú pháp tenbien! để sử dụng sau này

## Bài tập 4: Viết Decorator kết hợp @Controller và @Route(method, path)

Yêu cầu:

Giống cách NestJS hoạt động:

@Controller('/users') định nghĩa base path.

@Route('GET', '/') áp dụng cho method.

Tạo metadata để sau này router có thể lấy ra được endpoint.

```ts
@Controller("/users")
class UserController {
  @Route("GET", "/")
  getAll() {}

  @Route("POST", "/")
  create() {}
}
```

Kết quả mong đợi: Metadata dạng:

```ts
[
  { method: "GET", fullPath: "/users/" },
  { method: "POST", fullPath: "/users/" },
];
```
