/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
export const PermissionGuard = (permission: string) => {
  return class PermissionGuardMixin implements CanActivate {
    canActivate(
      context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
      const request = context.switchToHttp().getRequest();
      const user = request.user;
      if (user.permissions.includes(permission)) {
        return true;
      }
      return false;
    }
  };
};
