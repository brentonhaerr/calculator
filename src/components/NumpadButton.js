import React, { useContext } from 'react';
import { CalcContext } from '../contexts/CalcContext';
import * as acts from '../constants/calc_actions';

const NumpadButton = (props) => {
  const { dispatch } = useContext(CalcContext);

  return (
      <button id={props.id} className={"numpad-button " + props.classes}
        onClick={() => {
          dispatch({ type: acts.NUMBER_ENTRY, value: props.value })
        }}>
        <span className="button-text">{props.value}</span>
      </button>
  );
}

export default NumpadButton;