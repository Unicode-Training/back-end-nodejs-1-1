/*
Kiểm tra độ mạnh yếu mật khẩu

- Có từ 8 ký tự trở lên
- Có ít nhất 1 ký tự hoa
- Có ít nhất 1 ký tự thường
- Có ít nhất 1 số
- Có ít nhất 1 ký tự đặc biệt: !@#$%^&*()

Lưu ý: Không được dùng regex, array, object
*/

const isStrengthPassword = function (password) {
  const number = "0123456789";
  const symbol = "!@#$%^&*()";
  let isUpper = false;
  let isLower = false;
  let isNumber = false;
  let isSymbol = false;
  if (password.length < 8) {
    return false;
  }

  for (let i = 0; i < password.length; i++) {
    const char = password.charAt(i);
    if (char >= "A" && char <= "Z") {
      isUpper = true;
    }
    if (char >= "a" && char <= "z") {
      isLower = true;
    }

    if (number.includes(char)) {
      isNumber = true;
    }
    if (symbol.includes(char)) {
      isSymbol = true;
    }
  }

  return isUpper && isLower && isNumber && isSymbol;
};
console.log(isStrengthPassword("Hoangan@123"));

const partialMaskEmail = function (email) {
  const position = email.indexOf("@");
  const username = email.slice(0, position);
  const remainCount = username.length - 4;
  const newEmail =
    email.slice(0, 4) + "*".repeat(remainCount) + email.slice(position);
  console.log(newEmail);
};

partialMaskEmail("hoangan.web@gmail.com");
