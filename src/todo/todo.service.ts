import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoInput, UpdateTodoInput, StatusArgs } from './dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    { id: 1, description: 'Piedra del alma', done: false },
    { id: 2, description: 'Piedra del espacio', done: true },
    { id: 3, description: 'Piedra del poder', done: false },
  ];

  findAll(statusArgs: StatusArgs): Todo[] {
    const { statusTodos } = statusArgs;
    if (statusTodos !== undefined)
      return this.todos.filter((todo) => todo.done === statusTodos);
    return this.todos;
  }

  findOne(id: number): Todo {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo)
      throw new NotFoundException(`El todo con el id: ${id} no existe`);
    return todo;
  }

  create(createTodoInput: CreateTodoInput): Todo {
    const todo = new Todo();
    todo.id = Math.max(...this.todos.map((t) => t.id), 0) + 1;
    todo.description = createTodoInput.description;
    todo.done = false;
    this.todos.push(todo);
    return todo;
  }

  update(updateTodoInput: UpdateTodoInput): Todo {
    const { id, description, done } = updateTodoInput;
    const todoToUpdate = this.findOne(id);
    if (description) todoToUpdate.description = description;
    if (done !== undefined) todoToUpdate.done = done;
    this.todos = this.todos.map((t) => (t.id === id ? todoToUpdate : t));
    return todoToUpdate;
  }

  remove(id: number): boolean {
    const todo = this.findOne(id);
    this.todos = this.todos.filter((t) => t.id !== id);
    return true;
  }
}
