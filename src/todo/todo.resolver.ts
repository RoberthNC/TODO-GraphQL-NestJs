import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { Todo } from './entities/todo.entity';
import { CreateTodoInput, UpdateTodoInput, StatusArgs } from './dto';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [Todo], {
    description: 'Retorna  todos los todos',
    name: 'todos',
  })
  findAll(@Args() statusArgs: StatusArgs): Todo[] {
    return this.todoService.findAll(statusArgs);
  }

  @Query(() => Todo, {
    description: 'Retorna un todo por id',
    name: 'todo',
  })
  findOne(@Args('id', { type: () => Int }) id: number): Todo {
    return this.todoService.findOne(id);
  }

  @Mutation(() => Todo, {
    description: 'Crea un todo',
    name: 'create',
  })
  create(@Args('createTodoInput') createTodoInput: CreateTodoInput) {
    return this.todoService.create(createTodoInput);
  }

  @Mutation(() => Todo, {
    description: 'Actualiza un todo',
    name: 'update',
  })
  update(@Args('updateTodoInput') updateTodoInput: UpdateTodoInput) {
    return this.todoService.update(updateTodoInput);
  }

  @Mutation(() => Boolean, {
    description: 'Elimina un todo',
    name: 'remove',
  })
  remove(@Args('id', { type: () => Int }) id: number) {
    return this.todoService.remove(id);
  }
}
