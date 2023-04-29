import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
console.log(process.env.HOST);
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.REDIS,
      options: {
        host: 'some host name',
        port: 25061,
        password: 'some password',
        username: 'default',
      },
    },
  );
  await app.listen();
}
bootstrap();
