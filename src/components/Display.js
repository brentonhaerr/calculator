import React, { useContext } from 'react';
import { CalcContext } from '../contexts/CalcContext';
import * as modes from '../constants/calc_modes';

const Display = () => {
  const { display, total, ops_list, mode } = useContext(CalcContext);
  return (
    <div id="screen">
      <div className="row justify-content-center">
        <div id='ops-list' className="col-11 text-end fs-2 text-muted">
          { ops_list }
        </div>
        <div id="display" className="col-11 text-end fs-1">
          { 
            display
          }
        </div>
      </div>
    </div>
  );
}

export default Display;