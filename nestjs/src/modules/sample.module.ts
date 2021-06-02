import { Module } from '@nestjs/common';
import { SampleResolver } from 'src/resolvers/sample.resolver';
import { SampleService } from 'src/services/sample.service';

@Module({
  providers: [SampleResolver, SampleService],
})
export class SampleModule {}
