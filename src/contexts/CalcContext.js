import React, { createContext, useState, useReducer } from 'react';
import { calcReducer } from '../reducers/calcReducer';
import * as modes from '../constants/calc_modes';

export const CalcContext = createContext();

const CalcContextProvider = (props) => {
  const [{total, display, ops_list, last_action, mode }, dispatch] = useReducer(calcReducer, { display: "0", ops_list: "", mode: modes.DISPLAY_INPUT });

  return ( 
    <CalcContext.Provider value={{ display, ops_list, mode, dispatch }}>
      { props.children }
    </CalcContext.Provider>
   );
}
 
export default CalcContextProvider;