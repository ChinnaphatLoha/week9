class Todo {
  constructor(id, description) {
    this.id = id;
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
  let currentId = 0;

  const addTodo = (desc) => {
    const todo = new Todo(++currentId, desc).getTodo();
    return todos.push(todo);
  };

  const findTodo = (searchId) => todos.find((todo) => todo.id === searchId);

  const findIndexTodo = (searchId) =>
    todos.findIndex((todo) => todo.id === searchId);

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

module.exports = { TodoManagement, Todo };
