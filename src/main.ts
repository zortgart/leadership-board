import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LibraryMenu } from './library/library.menu'; // Adjust import as per your project structure

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const libraryMenu = app.get<LibraryMenu>(LibraryMenu);
  await libraryMenu.start();
}

bootstrap();