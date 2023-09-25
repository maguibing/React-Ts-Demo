export const delTodo = (id: string) => ({
  type: "todos/del",
  payload: id
})

export const addTodo = (id: string) => ({
  type: "todos/add",
  payload: id
})

type DelTodo = ReturnType<typeof delTodo>
type AddTodo = ReturnType<typeof addTodo>

export type TodoActions = DelTodo | AddTodo
