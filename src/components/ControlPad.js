import React from 'react';
import NumpadButton from './NumpadButton';
import FunctionButton from './FunctionButton';
import * as acts from '../constants/calc_actions';

const ControlPad = () => {
  return (
    <section id="control-pad">
      <div className="row">
        <div className="col-6">
          <FunctionButton id="display-clear" action={acts.CLEAR} name="C" />
        </div>
        <div className="col-6">
          <FunctionButton id="clear" action={acts.ALLCLEAR} name="AC" classes="double-wide-btn" />
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          <NumpadButton id="seven" value="7" />
        </div>
        <div className="col-3">
          <NumpadButton id="eight" value="8" />
        </div>
        <div className="col-3">
          <NumpadButton id="nine" value="9" />
        </div>
        <div className="col-3">
          <FunctionButton id="add" action={acts.ADD} name="+" />
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          <NumpadButton id="four" value="4" />
        </div>
        <div className="col-3">
          <NumpadButton id="five" value="5" />
        </div>
        <div className="col-3">
          <NumpadButton id="six" value="6" />
        </div>
        <div className="col-3">
          <FunctionButton id="subtract" action={acts.SUBTRACT} name="-" />
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          <NumpadButton id="one" value="1" />
        </div>
        <div className="col-3">
          <NumpadButton id="two" value="2" />
        </div>
        <div className="col-3">
          <NumpadButton id="three" value="3" />
        </div>
        <div className="col-3">
          <FunctionButton id="multiply" action={acts.MULTIPLY} name="&#215;" />
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          <NumpadButton id="zero" value="0" />
        </div>
        <div className="col-3">
          <FunctionButton id="decimal" action={acts.DECIMAL} name="." />
        </div>
        <div className="col-3">
          <FunctionButton id="equals" action={acts.EQUALS} name="=" />
        </div>
        <div className="col-3">
          <FunctionButton id="divide" action={acts.DIVIDE} name="/" />
        </div>
      </div>
    </section>
  )
}

export default ControlPad;