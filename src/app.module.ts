import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MentalHealthModule } from './mental-health/mental-health.module';
import { KafkaClientModule } from './kafka-client/kafka-client.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MentalHealthModule,
    KafkaClientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
