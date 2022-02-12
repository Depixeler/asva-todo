import React from "react";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div>
      <Link to="/todo">Todo List Screen</Link> <br />
      <p>Login to add todo's</p>
      <Link to="/todoInput">Todo Input</Link> <br />
      <Link to="/login">Login</Link> <br />
      <h1>Here is the Home Page</h1>
    </div>
  );
};

export default HomeScreen;
