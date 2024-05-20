import TodoItem from "./TodoItem";
export default function TodoList({ todos, setTodos, isDone }) {
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
      <h2>{isDone ? "Done" : "Working"}</h2>
      <ul
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        {todos
          .filter((todo) => {
            return todo.isDone === isDone;
          })
          .map((todo) => {
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
    </>
  );
}
