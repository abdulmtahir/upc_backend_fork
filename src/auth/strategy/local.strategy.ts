import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { Admin } from 'src/register-admin/entities/register-admin.entity';
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<Admin> {
    const user = await this.authService.validateUser(email, password);
    if (!user) {

      
      throw new UnauthorizedException('Invalid email or password!!!');
    }
    return user;
  }
}
