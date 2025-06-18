import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  //   ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'EmailBlacklist', async: false })
export class EmailBlacklist implements ValidatorConstraintInterface {
  validate(text: string) {
    // for async validations you must return a Promise<boolean> here
    // console.log(text);
    // console.log(args);
    const blacklist = [
      'admin@gmail.com',
      'admin@mail.com',
      'quantrivien@mail.com',
    ];

    return !blacklist.includes(text);
  }

  defaultMessage() {
    // here you can provide default error message if validation failed
    return 'Email ($value) is blacklisted!';
  }
}
