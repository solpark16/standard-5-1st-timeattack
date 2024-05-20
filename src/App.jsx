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
  return (
    <>
      <h1>투두리스트 타임어택</h1>
      <TodoForm setTodos={setTodos}></TodoForm>
      <TodoList setTodos={setTodos} isDone={false} todos={todos}></TodoList>
      <TodoList setTodos={setTodos} isDone={true} todos={todos}></TodoList>
    </>
  );
}
