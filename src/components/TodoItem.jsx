export default function TodoItem({
  todo,
  deleteTodoHandler,
  toggleTodoHandler,
  isDone,
}) {
  const { id, title, content } = todo;
  return (
    <li
      style={{
        border: "1px solid black",
        padding: "10px",
      }}
    >
      <h3>{title}</h3>
      <p>{content}</p>
      <button onClick={() => deleteTodoHandler(id)}>삭제</button>
      <button onClick={() => toggleTodoHandler(id)}>
        {isDone ? "취소" : "완료"}
      </button>
    </li>
  );
}
