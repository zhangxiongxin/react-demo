import * as React from 'react';
import { useState } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  function add(e, number) {
    setCount(count + number);
  }
  return (
    <div>
      <button
        className="btn"
        onClick={(e) => {
          add(e, 2);
        }}
      >
        添加
      </button>
      <p>{count}</p>
    </div>
  );
}
