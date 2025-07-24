//Câu lệnh switch case

const action = `edit`;
switch (action) {
  case "create":
  case "add":
  case "insert":
    console.log("Thêm");
    break;
  case "update":
  case "edit":
    console.log("Sửa");
    break;
  case "delete":
  case "remove":
  case "destroy":
    console.log("Xóa");
    break;
  default:
    console.log("Danh sách");
    break;
}

//Bài tập: Chuyển đoạn code trên thành if else
