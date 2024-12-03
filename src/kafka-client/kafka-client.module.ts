import { ClientsModule, Transport } from '@nestjs/microservices';
import { Module } from '@nestjs/common';

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
  exports: [ClientsModule],
})
export class KafkaClientModule {}
