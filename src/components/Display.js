import React, { useContext } from 'react';
import { CalcContext } from '../contexts/CalcContext';

const Display = () => {
  const { total } = useContext(CalcContext);
  return (
    <div id="display">
      <div className="row justify-content-center">
        <div className="col-11 text-end fs-1">
          {total}
        </div>
      </div>
    </div>
  );
}

export default Display;