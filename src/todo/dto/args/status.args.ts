import { ArgsType, Field } from '@nestjs/graphql';
import { IsBoolean, IsOptional } from 'class-validator';

@ArgsType()
export class StatusArgs {
  @Field(() => Boolean, {
    description: 'Estado para obtener los realizados ó pendientes',
    name: 'statusTodos',
    nullable: true,
  })
  @IsOptional()
  @IsBoolean()
  statusTodos?: boolean;
}
