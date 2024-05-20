import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: crypto.randomUUID(),
      title: "todo 1",
      content: "content 1",
      isDone: false,
    },
    {
      id: crypto.randomUUID(),
      title: "todo 2",
      content: "content 2",
      isDone: true,
    },
  ]);
  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);
  const deleteTodoHandler = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };
  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id !== id ? todo : { ...todo, isDone: !todo.isDone };
      })
    );
  };
  return (
    <>
      <h1>투두리스트 타임어택</h1>
      <TodoForm setTodos={setTodos}></TodoForm>
      <TodoList
        isDone={false}
        todos={workingTodos}
        deleteTodoHandler={deleteTodoHandler}
        toggleTodoHandler={toggleTodoHandler}
      ></TodoList>
      <TodoList
        isDone={true}
        todos={doneTodos}
        deleteTodoHandler={deleteTodoHandler}
        toggleTodoHandler={toggleTodoHandler}
      ></TodoList>
    </>
  );
}
