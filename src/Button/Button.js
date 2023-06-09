import * as React from 'react';
import PropTypes from 'prop-types';
export default function Button({ id, size, type, disabled, children, onClick }) {
  return (
    <button disabled={disabled} onClick={onClick} id={id}>
      {children}
    </button>
  );
}

Button.PropTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  id: PropTypes.number
}
