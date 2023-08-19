import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RegisterAdminService } from './register-admin/register-admin.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Check if the default super admin exists, if not, create one
  const registerAdminService = app.get(RegisterAdminService);
  await registerAdminService.createDefaultSuperAdmin();

  // Enable CORS for the application
  app.enableCors();

   // // Configure CORS to allow requests only from localhost:3000
  // app.enableCors({
  //   origin: 'http://localhost:3000',
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //   credentials: true,
  // });

  await app.listen(3000);
}

bootstrap();
