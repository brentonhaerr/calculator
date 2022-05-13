import React, { createContext, useReducer } from 'react';
import * as acts from '../constants/calc_actions';
import * as modes from '../constants/calc_modes';
import { newCalcReducer } from '../reducers/newCalcReducer';

export const CalcContext = createContext();

const CalcContextProvider = (props) => {
  const [{display, ops_list, last_action, mode }, dispatch] = useReducer(newCalcReducer, { display: "0", ops_list: "", last_action: {type: acts.EQUALS}, mode: modes.SHOW_TOTAL });

  return ( 
    <CalcContext.Provider value={{ display, ops_list, last_action, mode, dispatch }}>
      { props.children }
    </CalcContext.Provider>
   );
}
 
export default CalcContextProvider;