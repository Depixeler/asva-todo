import { useState } from "react";
import React from "react";

import { addTodo } from "../redux/todos/todoActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import TodoList from "./TodoList";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  return (
    <div>
      <input
        placeholder="Get good marks"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
          console.log(todo);
        }}
      />{" "}
      <button
        onClick={(e) => {
          e.preventDefault();
          if (todo !== "") {
            dispatch(addTodo(todo));
            setTodo("");
          }
        }}
      >
        Submit
      </button>
      <br />
      <TodoList />
    </div>
  );
};

export default TodoInput;
