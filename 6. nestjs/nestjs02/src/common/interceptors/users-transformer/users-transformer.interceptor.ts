import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { map, Observable, tap } from 'rxjs';
interface User {
  id: number;
  full_name: string;
  email: string;
  created_at: string;
  updated_at: string;
}
@Injectable()
export class UsersTransformerInterceptor implements NestInterceptor {
  transform(data: User) {
    return {
      UID: data.id,
      fullName: data.full_name,
      email: data.email,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
    };
  }
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before Interceptor');
    // const request: Request = context.switchToHttp().getRequest();
    // console.log(request);
    return next
      .handle()
      .pipe(
        map(({ data }: { data: User[] | User }) => {
          console.log('After Interceptor');

          if (Array.isArray(data)) {
            const transform = data.map((user: User) => {
              return this.transform(user);
            });
            return { data: transform };
          }

          return {
            data: this.transform(data),
          };
          // const response: Response = context.switchToHttp().getResponse();
          // console.log(response);
        }),
      )
      .pipe(tap((data) => console.log(data)));
  }
}
