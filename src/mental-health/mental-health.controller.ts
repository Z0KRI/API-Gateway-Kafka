import { Controller, Get } from '@nestjs/common';
import { MentalHealthService } from './mental-health.service';

@Controller()
export class MentalHealthController {
  constructor(private readonly mentalHealthService: MentalHealthService) {}

  @Get('mental-health/violent-suicides/indicator')
  getMentalHealth() {
    return this.mentalHealthService.getMentalHealth();
  }

  @Get('/mental-health/suicides-registered')
  getSuicidesRegistered() {
    return this.mentalHealthService.getSuicidesRegistered();
  }

  @Get('/mental-health/entities-violent-death')
  getEntitiesViolentDeaths() {
    return this.mentalHealthService.getEntitiesViolentDeaths();
  }
}
