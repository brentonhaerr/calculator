import React, { createContext, useState, useReducer } from 'react';
import { calcReducer } from '../reducers/calcReducer';

export const CalcContext = createContext();

const CalcContextProvider = (props) => {
  const [total, dispatch] = useReducer(calcReducer, 0);

  return ( 
    <CalcContext.Provider value={{ total, dispatch }}>
      { props.children }
    </CalcContext.Provider>
   );
}
 
export default CalcContextProvider;