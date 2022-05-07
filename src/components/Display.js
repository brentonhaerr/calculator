import React, { useContext } from 'react';
import { CalcContext } from '../contexts/CalcContext';
import * as modes from '../constants/calc_modes';

const Display = () => {
  const { display, total, ops_list, mode } = useContext(CalcContext);
  return (
    <div id="screen">
      <div className="row justify-content-center">
        <div className="col-11 text-end fs-2 text-muted">
          { ops_list === "" ? 0 : ops_list }
        </div>
        <div id="display" className="col-11 text-end fs-1">
          { mode === modes.DISPLAY_TOTAL ? total : display }
        </div>
      </div>
    </div>
  );
}

export default Display;