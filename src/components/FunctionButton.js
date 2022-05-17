import React, { useContext } from 'react';
import { CalcContext } from '../contexts/CalcContext';

const FunctionButton = (props) => {
  const { dispatch } = useContext(CalcContext);

  return (
    <button id={props.id} className={"function-button " + props.classes} onClick={() => { dispatch({ type: props.action }) }}>
      <span className="button-text">{props.name}</span>
    </button>
  );
}

export default FunctionButton;