import { Inject } from '@nestjs/common';
import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { SampleModel } from 'src/models/sample.model';
import { SampleService } from 'src/services/sample.service';

@Resolver(() => SampleModel)
export class SampleResolver {
  constructor(@Inject(SampleService) private sampleService: SampleService) {}

  @Query((returns) => SampleModel, { nullable: true })
  async sample(@Args('id') id: string) {
    return this.sampleService.sample(id);
  }

  @Query((returns) => [SampleModel], { nullable: true })
  async getDatas() {
    return this.sampleService.getDatas();
  }
}
