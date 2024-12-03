import { Module } from '@nestjs/common';
import { MentalHealthService } from './mental-health.service';
import { MentalHealthController } from './mental-health.controller';
import { KafkaClientModule } from 'src/kafka-client/kafka-client.module';

@Module({
  imports: [KafkaClientModule],
  controllers: [MentalHealthController],
  providers: [MentalHealthService],
})
export class MentalHealthModule {}
