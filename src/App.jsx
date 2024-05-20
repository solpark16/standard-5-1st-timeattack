import { useState } from "react";
export default function App() {
  const [value, setValue] = useState(1);
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input
          type="number"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />{" "}
        만큼을{" "}
        <button
          onClick={() => {
            setCount(count + +value);
          }}
        >
          더할게요
        </button>{" "}
        <button
          onClick={() => {
            setCount(count - +value);
          }}
        >
          뺄게요
        </button>
        <button
          onClick={() => {
            setCount(0);
          }}
        >
          초기화
        </button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{count}</p>
      </div>
    </div>
  );
}
