import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTodoInput {
  @Field(() => String, {
    description: 'Descripcion del todo',
  })
  description: string;
}
