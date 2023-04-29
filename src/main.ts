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
        host: 'db-redis-blr1-95522-do-user-11648032-0.b.db.ondigitalocean.com',
        port: 25061,
        password: 'AVNS_4wCbQZV7k6pJVOZUKsB',
        username: 'default',
      },
    },
  );
  await app.listen();
}
bootstrap();
