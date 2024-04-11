import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Todas las agregaciones' })
export class AggregationsType {
  @Field(() => Int)
  total: number;

  @Field(() => Int)
  pending: number;

  @Field(() => Int)
  completed: number;

  @Field(() => Int, { deprecationReason: 'Usar *completed* solamente.' })
  totalTodoCompleted: number;
}
