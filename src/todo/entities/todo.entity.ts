import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field(() => Int, {
    description: 'Es el id del todo',
  })
  id: number;

  @Field(() => String, {
    description: 'Es la descripcion del todo',
  })
  description: string;

  @Field(() => Boolean, {
    description: 'Es el estado de la aplicación',
  })
  done: boolean = false;
}
