import TodoItem from "./TodoItem";
export default function TodoList({
  todos,
  isDone,
  deleteTodoHandler,
  toggleTodoHandler,
}) {
  return (
    <ul>
      <p>{isDone ? "Done" : "Working"}</p>
      {todos.map((todo) => {
        return (
          <TodoItem
            isDone={isDone}
            key={todo.id}
            todo={todo}
            deleteTodoHandler={deleteTodoHandler}
            toggleTodoHandler={toggleTodoHandler}
          />
        );
      })}
    </ul>
  );
}
