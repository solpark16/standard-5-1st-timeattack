import { useState } from "react";

export default function TodoForm({ setTodos }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 모두 입력하세요.");
      return;
    }
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTitle("");
    setContent("");
  };
  return (
    <form
      onSubmit={addTodoHandler}
      style={{
        display: "flex",
        gap: "10px",
      }}
    >
      <input
        placeholder="제목을 입력하세요."
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        placeholder="내용을 입력하세요."
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button>추가하기</button>
    </form>
  );
}
