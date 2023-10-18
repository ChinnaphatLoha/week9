const { TodoManagement } = require('./todolist-management');

describe('TodoManagement', () => {
  const initTodoDesc = [
    'Learn JavaScript',
    'Learn React',
    'Learn Redux',
    'Learn Node.js',
  ];
  
  let todoManager;

  beforeEach(() => {
    todoManager = TodoManagement();
  });

  test('addTodo should add a new todo and return the new length of todos array', () => {
    const initialLength = todoManager.getTodos().length;
    const newLength = todoManager.addTodo(initTodoDesc[0]);
    expect(newLength).toBe(initialLength + 1);

    const todos = todoManager.getTodos();
    const lastTodo = todos[todos.length - 1];
    expect(lastTodo.description).toBe(initTodoDesc[0]);
  });

  test('findTodo should return the correct todo', () => {
    const todoId = todoManager.addTodo(initTodoDesc[1]);
    const foundTodo = todoManager.findTodo(todoId);
    expect(foundTodo.description).toBe(initTodoDesc[1]);
  });

  test('findIndexTodo should return the correct index', () => {
    const todoId = todoManager.addTodo(initTodoDesc[2]);
    const index = todoManager.findIndexTodo(todoId);
    expect(index).toBeGreaterThanOrEqual(0);
  });

  test('findIndexTodo should return -1 if todo is not found', () => {
    const nonExistentTodoId = 999;
    const index = todoManager.findIndexTodo(nonExistentTodoId);
    expect(index).toBe(-1);
  });

  test('removeTodo should remove the specified todo', () => {
    const todoId = todoManager.addTodo(initTodoDesc[3]);
    const initialLength = todoManager.getTodos().length;
    todoManager.removeTodo(todoId);
    const newLength = todoManager.getTodos().length;
    expect(newLength).toBe(initialLength - 1);
  });

  test('removeTodo should not affect todos array if specified todo is not found', () => {
    const nonExistentTodoId = 999;
    const initialLength = todoManager.getTodos().length;
    todoManager.removeTodo(nonExistentTodoId);
    const newLength = todoManager.getTodos().length;
    expect(newLength).toBe(initialLength);
  });
});
