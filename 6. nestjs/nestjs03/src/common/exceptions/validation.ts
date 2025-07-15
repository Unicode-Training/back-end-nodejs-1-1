import { HttpException, HttpStatus, ValidationError } from '@nestjs/common';

export const validationException = (errors: ValidationError[]) => {
  if (!errors.length) {
    return;
  }
  const messages: any[] = errors.map((error: ValidationError) => {
    // console.log(error);
    if (error.constraints) {
      const values = Object.values(error.constraints);
      return [error.property, values.length > 1 ? values : values[0]];
    }
  });

  return new HttpException(
    {
      error: Object.fromEntries(messages),
      message: 'Validation failed',
    },
    HttpStatus.BAD_REQUEST,
  );
};
