import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeTodo } from "../redux/todos/todoActions";

const TodoList = () => {
  const dispatch = useDispatch();
  const todoArr = useSelector((state) => state.todo.todoList);
  {
    console.log(todoArr);
  }
  return (
    <div>
      <h1>Todo List is Here</h1>
      {todoArr.length > 0 ? (
        todoArr.map((item, index) => {
          return (
            <div key={index}>
              <h3>{item}</h3>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(removeTodo(item));
                }}
              >
                remove
              </button>
            </div>
          );
        })
      ) : (
        <div>
          There is no todo to display please add some todo in todo input page
          <br />
          <Link to="/todoInput"> Link to Todo Input</Link>
          <br />
        </div>
      )}
    </div>
  );
};

export default TodoList;
