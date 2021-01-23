import Dexie from 'dexie'

export const db = new Dexie("TodoDatabase");
db.version(1).stores({
  todos: "++id,title,done"
})

export function loadTodos() {
  return db.todos.toArray()
}

export function addTodo(todo) {
  return db.todos.add(todo)
}

export function removeTodo(id) {
  return db.todos.where({ id }).delete()
}

export function updateTodo(id, changes) {
  return db.todos.where({ id }).modify(changes)
}