import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { jwtConstant } from '../constant';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Admin } from 'src/register-admin/entities/register-admin.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstant.secret,
    });
  }

  async validate(payload: Admin) { 
    return { id: payload.id, email: payload.email, role: payload.role };
  }
}