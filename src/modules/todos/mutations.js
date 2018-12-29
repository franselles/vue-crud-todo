export function setTodos(state, payload) {
  state.todos = payload;
}

export function setTodo(state, payload) {
  state.selectedTodo = payload
}

export function updateTodoStatus(state, payload) {
  const todo = state.todos.find(t => t.id === payload.id)
  if (todo) {
    todo.done = !todo.done
  }
}

export function todosError(state, payload) {
  state.error = true
  state.errorMessage = payload
  state.todos = []
}