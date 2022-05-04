import React, { createContext, useState, useReducer } from 'react';
import { calcReducer } from '../reducers/calcReducer';

export const CalcContext = createContext();

const CalcContextProvider = (props) => {
  const [{total, input}, dispatch] = useReducer(calcReducer, {total: 0, input: 0});

  return ( 
    <CalcContext.Provider value={{ total, input, dispatch }}>
      { props.children }
    </CalcContext.Provider>
   );
}
 
export default CalcContextProvider;