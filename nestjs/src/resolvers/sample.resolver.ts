import { Inject } from '@nestjs/common';
import { Args, ID, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AddSampleDto } from 'src/dto/sample.dto';
import { SampleModel } from 'src/models/sample.model';
// import { SampleService } from 'src/services/sample.service';

@Resolver(() => SampleModel)
export class SampleResolver {
  //   constructor(@Inject(SampleService) private sampleService: SampleService) {}

  @Query((returns) => SampleModel, { nullable: true })
  async sample(@Args('id') id: string) {
    return this.sampleService.sample(id);
  }

  }
}
