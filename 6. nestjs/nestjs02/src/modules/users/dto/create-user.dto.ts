/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Exclude, Transform } from 'class-transformer';
import {
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsOptional,
  MinLength,
  Validate,
  ValidateIf,
} from 'class-validator';
import { EmailBlacklist } from 'src/common/validations/email-blacklist';

export default class CreateUserDto {
  @IsNotEmpty({
    message: 'Tên bắt buộc phải nhập',
  })
  name: string;
  @IsEmail(
    {},
    {
      message: 'Email không đúng định dạng',
    },
  )
  @IsNotEmpty({
    message: 'Email bắt buộc phải nhập',
  })
  @Validate(EmailBlacklist, {
    message: 'Email ($value) bị dính danh sách đen!',
  })
  email: string;

  @IsOptional()
  @IsIn(['active', 'inactive'], {
    message: 'Trạng thái không hợp lệ',
  })
  status: string = 'active';

  @Transform((o) => {
    if (o.value === 'true' || o.value === true) {
      return true;
    }
    return false;
  })
  @IsOptional()
  statusBool: boolean;

  @ValidateIf((o: { email: string }, value: string) => {
    if (value === 'admin' || o.email === 'contact@unicode.vn') {
      return false;
    }
    return true;
  })
  @MinLength(8, {
    message: 'Mật khẩu phải từ 8 ký tự',
  })
  password: string;

  @MinLength(8, {
    message: 'Nhập lại mật khẩu phải từ 8 ký tự',
  })
  @ValidateIf((o: { password: string }, value) => o.password !== value)
  @IsIn([Math.random()], {
    message: 'Mật khẩu không khớp nhau',
  })
  @Exclude({
    toPlainOnly: true,
  })
  confirmPassword: string;
}
