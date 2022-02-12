import { ADD_TODO, REMOVE_TODO } from "./todoTypes";
const initialState = {
  todoList: [],
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [action.payload, ...state.todoList],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => {
          return todo !== action.payload;
        }),
      };
    default:
      return state;
  }
};
export default todoReducer;
