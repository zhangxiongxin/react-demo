import * as React from 'react';
import { useState } from 'react';
import GoodsDetail from './GoodsDetail';
import Banner from './Banner';
import Button from './Button';
import './style.css';
function footer() {
  function onFooterBtnClick(event) {
    console.log(event);
  }
  return <Button onClick={onFooterBtnClick}>购买</Button>;
}
export default function App() {
  const [count, setCount] = useState(0);
  function add(e, number) {
    setCount(count + number);
  }

  function onFooterBtnClick(event) {
    console.log(event);
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
        <Banner list={[1, 2, 3]} />
      </GoodsDetail>
    </div>
  );
}
