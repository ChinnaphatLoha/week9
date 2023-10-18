class Todo {
  static lastId = 0;

  constructor(description) {
    this.id = ++Todo.lastId;
    this.description = description;
  }

  getTodo() {
    return {
      id: this.id,
      description: this.description,
    };
  }

  setDescription(newDescription) {
    this.description = newDescription;
  }
}

const TodoManagement = () => {
  let todos = [];

  const addTodo = (desc) => {
    const todo = new Todo(desc);
    todos.push(todo.getTodo());
    return todos.length;
  };

  const findTodo = (searchId) => 
    todos.find((todo) => {
      console.log(todo.id, searchId);
      return todo.id === searchId
    });

  const findIndexTodo = (searchId) =>
    todos.findIndex((todo) => {
      console.log(todo.id, searchId);
      return todo.id === searchId;
    });

  const removeTodo = (searchId) => {
    todos = todos.filter((todo) => todo.id !== searchId);
  };

  const setDescription = (searchId, newDescription) => {
    const index = findIndexTodo();
    if (index !== -1) {
      todos[index].setDescription(newDescription);
    }
  };

  const getTodos = () => todos;

  return {
    addTodo,
    findTodo,
    findIndexTodo,
    removeTodo,
    setDescription,
    getTodos,
  };
};

exports.TodoManagement = TodoManagement;
