import { Float, Query, Resolver } from '@nestjs/graphql';

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
}
