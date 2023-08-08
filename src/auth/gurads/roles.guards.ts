import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { Role } from "src/register-admin/role.enum";
import { ROLES_KEY } from "../decorators/roles.decorators";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(
        context: ExecutionContext): boolean {
        const requiredRole = this.reflector.get<Role[]>('role',
            context.getHandler(),
        );

        if (!requiredRole) {
            return true;
        }    
          
        const { admin } = context.switchToHttp().getRequest();
        return requiredRole.some((role) => admin.role?.includes(role));
    }
}