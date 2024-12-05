import { MentalHealthPatters } from 'src/common/const/mental-health.const';
import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class MentalHealthService {
  constructor(
    @Inject('INFORMATION_SERVICE')
    private readonly client: ClientKafka,
  ) {
    this.client.subscribeToResponseOf(MentalHealthPatters.INDICATOR);
    this.client.subscribeToResponseOf(MentalHealthPatters.SUICIDES_REGISTERED);
    this.client.subscribeToResponseOf(
      MentalHealthPatters.Entities_Violent_Deaths,
    );
  }

  async getMentalHealth() {
    const response = await firstValueFrom(
      this.client.send(MentalHealthPatters.INDICATOR, {}),
    );

    return response;
  }

  async getSuicidesRegistered() {
    const response = await firstValueFrom(
      this.client.send(MentalHealthPatters.SUICIDES_REGISTERED, {}),
    );

    return response;
  }

  async getEntitiesViolentDeaths() {
    const response = await firstValueFrom(
      this.client.send(MentalHealthPatters.Entities_Violent_Deaths, {}),
    );

    return response;
  }
}
