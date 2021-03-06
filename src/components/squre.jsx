import React from 'react';

export default function Square(props) {
  return (
    <button data-cy={props.index} className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
