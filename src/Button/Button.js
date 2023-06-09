import * as React from 'react';
export default function Button({ size, type, disabled, children, onClick }) {
  return (
    <button disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
