import "./App.css";
import TodoInput from "./components/TodoInput";
import { Provider } from "react-redux";
import store from "./redux/store";
import TodoList from "./components/TodoList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import ProtectedRoute from "./protectedRoutes/ProtectedRoute";
import LoginScreen from "./components/LoginScreen";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <h1>Todo Components</h1>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/todoInput" element={<TodoInput />} />
            </Route>
            <Route path="/todo" element={<TodoList />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
