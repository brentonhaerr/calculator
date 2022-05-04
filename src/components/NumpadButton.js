import React, { useContext, useEffect } from 'react';
import { CalcContext } from '../contexts/CalcContext';

const NumpadButton = (props) => {
  const { dispatch } = useContext(CalcContext);

  return (
    <button id={props.id} className="m-1"
      onClick={() => {
        dispatch({ type: "ADD", value: props.value })
      }}>
      {props.value}
    </button>
  );
}

export default NumpadButton;