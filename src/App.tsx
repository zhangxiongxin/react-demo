import * as React from 'react';
import { useState } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  function add() {
    setCount(count + 1);
  }
  return (
    <div>
      <button className="btn" onClick={add}>
        添加
      </button>
      <p>{count}</p>
    </div>
  );
}
