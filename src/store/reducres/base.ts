export type Names = {
  id: number,
  name: string
}

type Action = {
  type: string,
  payload: any
}

const initialState: number = 1

export const base = (state = initialState, action: Action) => {
  return state
}
