import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

// File that initializes the project
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
