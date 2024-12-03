import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class MentalHealthService {
  constructor(
    @Inject('INFORMATION_SERVICE')
    private readonly client: ClientKafka,
  ) {}

  async getMentalHealth() {
    this.client.subscribeToResponseOf('get.mentalHealth');

    const response = await firstValueFrom(
      this.client.send('get.mentalHealth', {}),
    );

    return response;
  }
}
