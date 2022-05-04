import React, { createContext, useState } from 'react';

export const CalcContext = createContext();

const CalcContextProvider = (props) => {
  const [total, setTotal] = useState(0);

  const add = (value) => {
    setTotal(total+parseInt(value));
  }

  const subtract = (value) => {
    setTotal(total-parseInt(value));
  }

  return ( 
    <CalcContext.Provider value={{ total, add, subtract}}>
      { props.children }
    </CalcContext.Provider>
   );
}
 
export default CalcContextProvider;