import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

@InputType()
export class UpdateTodoInput {
  @Field(() => Int)
  @IsInt()
  @Min(1)
  id: number;

  @Field(() => String, {
    description: 'Descripcion del todo (opcional)',
    nullable: true,
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  description?: string;

  @Field(() => Boolean, {
    description: 'Estado del todo (todo)',
    nullable: true,
  })
  @IsBoolean()
  @IsOptional()
  done?: boolean;
}
