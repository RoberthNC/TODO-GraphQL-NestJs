import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
  @Query(() => String, {
    description: 'Retorna un Hola Mundo',
    name: 'hello',
  })
  helloWorld(): string {
    return 'Hola Mundo';
  }

  @Query(() => Float, {
    description: 'Retorna un número random',
    name: 'randomNumber',
  })
  getRandomNumber(): number {
    return Math.random() * 100;
  }

  @Query(() => Int, {
    description:
      'Retorna un número random entero entre 0 a to (10 por defecto)',
    name: 'randomNumberFromZero',
  })
  getRandomFromZeroTo(
    @Args('to', { nullable: true, type: () => Int }) to: number = 10,
  ): number {
    const max = to;
    const min = 0;
    return Math.floor(Math.random() * (max - min) + min);
  }
}
