import {
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsOptional,
  MinLength,
  Validate,
} from 'class-validator';
import * as messages from '../messages/validation.json';
import { Unique } from 'src/validation/unique-constraint';
export default class CreateUserDto {
  @IsNotEmpty({
    message: messages['name.required'],
  })
  name: string;
  @IsEmail(
    {},
    {
      message: messages['email.email'],
    },
  )
  @Validate(Unique, ['users', 'email'], {
    message: messages['email.unique'],
  })
  email: string;
  @IsOptional()
  @IsIn([true, false], {
    message: messages['status.invalid'],
  })
  status: boolean = true;
  @MinLength(6, {
    message: messages['password.invalid'],
  })
  password: string;

  @IsNotEmpty()
  phone: string;
}
