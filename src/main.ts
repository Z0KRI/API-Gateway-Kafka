import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const API_VERSION = configService.get<string>('API_VERSION');

  app.setGlobalPrefix(`api/${API_VERSION}`);
  await app.listen(configService.get<number>('PORT') ?? 3000);
}
bootstrap();
