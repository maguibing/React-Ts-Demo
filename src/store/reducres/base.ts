import { TodoActions } from "../actions"

export type Names = {
  id: number,
  name: string
}

const initialState: number = 1

export const base = (state = initialState, action: TodoActions) => {
  return state
}
