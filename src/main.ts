import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RegisterAdminService } from './register-admin/register-admin.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Check if the default super admin exists, if not, create one
  const registerAdminService = app.get(RegisterAdminService);
  await registerAdminService.createDefaultSuperAdmin();

  await app.listen(3001);
}

bootstrap();
