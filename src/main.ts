import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableVersioning({    type: VersioningType.URI, defaultVersion: '1' });
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('API LAB Ronaldo Cahuasiri Colque')
    .setDescription('Desarrollo de Aplicaciones Int/Internet II')
    .setVersion('0.0.1')
    .addTag('Series')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('apidoc', app, document);
  await app.listen(process.env.PORT)
  console.log(`API corriendo en : ${await app.getUrl()}/apidoc`); 
}
bootstrap();
