import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SampleModel {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  freeInput: string;
}
