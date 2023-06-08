import * as React from 'react';
export default function GoodsDetail(props) {
  const { children, Footer } = props;
  return (
    <>
      {children}
      <div>商品详情</div>
      {Footer}
    </>
  );
}
