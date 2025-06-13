/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEmail, IsIn, IsNotEmpty, IsOptional } from 'class-validator';

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
  email: string;

  @IsOptional()
  @IsIn(['active', 'inactive'], {
    message: 'Trạng thái không hợp lệ',
  })
  status?: string;
}
