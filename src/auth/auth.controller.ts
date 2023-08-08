import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Role } from 'src/register-admin/role.enum';
import { LocalAuthGuard } from './guards/local.guards';
import { Roles } from './decorators/roles.decorators';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Roles(Role.Admin, Role.Super)
  @Post('/login')
  async login(@Request() req) {
    return this.authService.login(req);
  }
} 