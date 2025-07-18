import {
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
  Validate,
} from 'class-validator';
import * as messages from '../messages/validation.json';
import { Unique } from 'src/validation/unique-constraint';
export default class UpdateUserDto {
  @IsString()
  id: number;

  @IsOptional()
  name: string;

  @IsOptional()
  @IsEmail(
    {},
    {
      message: messages['email.email'],
    },
  )
  @Validate(Unique, ['users', 'email', 'id'], {
    message: messages['email.unique'],
  })
  email: string;

  @IsOptional()
  @IsIn([true, false], {
    message: messages['status.invalid'],
  })
  status: boolean = true;

  @IsOptional()
  @MinLength(6, {
    message: messages['password.invalid'],
  })
  password: string;

  @IsOptional()
  phone: string;
}
