import { applyMiddleware, legacy_createStore as createStore } from "redux";

import rootReducres from "./reducres";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducres, composeWithDevTools(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof store.getState>


/**
 * 获取函数的返回值类型
 */

// function incre(x: number): number {
//   return x
// }

// type temp1 = typeof incre
// type temp2 = ReturnType<temp1>

export default store
