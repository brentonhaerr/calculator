import React, { useContext, useEffect } from 'react';
import { CalcContext } from '../contexts/CalcContext';
import * as modes from '../constants/calc_modes';

const NumpadButton = (props) => {
  const { dispatch } = useContext(CalcContext);

  return (
    <button id={props.id} className="m-1"
      onClick={() => {
        dispatch({ type: modes.NUMBER_ENTRY, value: props.value })
      }}>
      {props.value}
    </button>
  );
}

export default NumpadButton;