import React, { createContext, useState, useReducer } from 'react';
import { calcReducer } from '../reducers/calcReducer';

export const CalcContext = createContext();

const CalcContextProvider = (props) => {
  const [{total, display, current_op}, dispatch] = useReducer(calcReducer, {total: 0, display: 0, current_op: "INPUT"});

  return ( 
    <CalcContext.Provider value={{ total, display, current_op, dispatch }}>
      { props.children }
    </CalcContext.Provider>
   );
}
 
export default CalcContextProvider;