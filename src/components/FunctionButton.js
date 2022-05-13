import React, { useContext } from 'react';
import { CalcContext } from '../contexts/CalcContext';

const FunctionButton = (props) => {
  const { dispatch } = useContext(CalcContext);

  return (
    <button id={props.id} className="btn btn-info btn-lg m-1" onClick={() => {dispatch({type: props.action})}}>{props.name}</button>
  );
}

export default FunctionButton;