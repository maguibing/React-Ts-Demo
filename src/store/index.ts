import { applyMiddleware, legacy_createStore as createStore } from "redux";

import rootReducres from "./reducres";
import thunk, { ThunkAction } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { TodoActions } from "./actions";

const store = createStore(rootReducres, composeWithDevTools(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof store.getState>

export type RooteAction = ThunkAction<void, RootState, unknown, TodoActions>

export default store
