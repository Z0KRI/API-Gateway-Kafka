import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaClientModule } from './kafka-client/kafka-client.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    KafkaClientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
