import React, { useContext } from 'react';
import { CalcContext } from '../contexts/CalcContext';

const Display = () => {
  const { display, ops_list } = useContext(CalcContext);
  return (
    <div id="screen">
      <div className="row justify-content-center">
        <div id='ops-list' className="col-11 text-end text-muted">
          { ops_list }
        </div>
        <div id="display" className="col-11 text-end">
          { 
            display
          }
        </div>
      </div>
    </div>
  );
}

export default Display;