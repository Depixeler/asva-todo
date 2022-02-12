import { combineReducers, createStore } from "redux";
import todoReducer from "./todos/todoReducers";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  user: userReducer,
});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
