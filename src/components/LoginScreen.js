import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser, logOutUser } from "../redux/user/userAction";
const LoginScreen = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isLoggedIn);
  return (
    <div>
      <h1>Dummy Login screen</h1>
      {console.log(isAuth)}
      {isAuth ? (
        <div>
          <Link to="/todo"> Link to Todo List Screen</Link> <br />
          <Link to="/todoInput"> Link to Todo Input page</Link> <br />
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(logOutUser());
            }}
          >
            Logout User
          </button>
        </div>
      ) : (
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(loginUser());
          }}
        >
          Login User
        </button>
      )}
    </div>
  );
};

export default LoginScreen;
