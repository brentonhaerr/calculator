import React from 'react';
import NumpadButton from './NumpadButton';
import FunctionButton from './FunctionButton';
import * as acts from '../constants/calc_actions';

const ControlPad = () => {
  return (
    <section id="control-pad">

      <FunctionButton id="display-clear" action={acts.CLEAR} name="C" classes="double-wide-btn top-left-button" />
      <FunctionButton id="clear" action={acts.ALLCLEAR} name="AC" classes="double-wide-btn top-right-button" />
      <NumpadButton id="seven" value="7" classes=""/>
      <NumpadButton id="eight" value="8" />
      <NumpadButton id="nine" value="9" />
      <FunctionButton id="add" action={acts.ADD} name="+" />
      <NumpadButton id="four" value="4" />
      <NumpadButton id="five" value="5" />
      <NumpadButton id="six" value="6" />
      <FunctionButton id="subtract" action={acts.SUBTRACT} name="-" />
      <NumpadButton id="one" value="1" />
      <NumpadButton id="two" value="2" />
      <NumpadButton id="three" value="3" />
      <FunctionButton id="multiply" action={acts.MULTIPLY} name="&#215;" />
      <NumpadButton id="zero" value="0" classes="bottom-left-button" />
      <FunctionButton id="decimal" action={acts.DECIMAL} name="." />
      <FunctionButton id="equals" action={acts.EQUALS} name="=" />
      <FunctionButton id="divide" action={acts.DIVIDE} name="/" classes="bottom-right-button" />

    </section>
  )
}

export default ControlPad;