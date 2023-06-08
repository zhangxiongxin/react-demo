import * as React from 'react';
import { useState } from 'react';
import GoodsDetail from './GoodsDetail';
import Banner from './Banner';
import './style.css';
function footer() {
  return <div>底部按钮</div>;
}
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
      <GoodsDetail Footer={footer()}>
        <Banner />
      </GoodsDetail>
    </div>
  );
}
