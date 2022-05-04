import React, { createContext, useState } from 'react';

export const CalcContext = createContext();

const CalcContextProvider = (props) => {
  return ( 
    <CalcContext.Provider>
      { props.children }
    </CalcContext.Provider>
   );
}
 
export default CalcContextProvider;