import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'INFORMATION_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'information',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'information-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
