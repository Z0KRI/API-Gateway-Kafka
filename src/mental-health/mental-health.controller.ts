import { Controller, Get } from '@nestjs/common';
import { MentalHealthService } from './mental-health.service';

@Controller()
export class MentalHealthController {
  constructor(private readonly mentalHealthService: MentalHealthService) {}

  @Get('mental-health')
  getMentalHealth() {
    return this.mentalHealthService.getMentalHealth();
  }
}
