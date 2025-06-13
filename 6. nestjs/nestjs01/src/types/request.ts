import { Request } from 'express';

export interface RequestWithUser extends Request {
  user: {
    [key: string]: string | number | boolean;
  };
}
