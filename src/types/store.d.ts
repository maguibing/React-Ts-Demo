import store from "../store";

type RootAction = unknown

export type RootState = ReturnType<typeof store.getState>

export type ThunkAction = ReturnType<void, RootState, unknown, RootAction>
