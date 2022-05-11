import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Display from './components/Display';
import CalcContextProvider from './contexts/CalcContext';
import NumpadButton from './components/NumpadButton';
import FunctionButton from './components/FunctionButton';
import * as modes from './constants/calc_modes';

function App() {
  return (
    <div id="calculator" className="App container p-3">
      <CalcContextProvider>
        <Display />
        <NumpadButton id="zero" value="0" />
        <NumpadButton id="one" value="1" />
        <NumpadButton id="two" value="2" />
        <NumpadButton id="three" value="3" />
        <NumpadButton id="four" value="4" />
        <NumpadButton id="five" value="5" />
        <NumpadButton id="six" value="6" />
        <NumpadButton id="seven" value="7" />
        <NumpadButton id="eight" value="8" />
        <NumpadButton id="nine" value="9" />
        <FunctionButton id="decimal" action={modes.DECIMAL} name="."  />
        <FunctionButton id="clear" action={modes.ALLCLEAR} name="C"  />
        <FunctionButton id="all-clear" action={modes.ALLCLEAR} name="AC"  />
        <FunctionButton id="add" action={modes.ADD} name="+"  />
        <FunctionButton id="subtract" action={modes.SUBTRACT} name="-"  />
        <FunctionButton id="multiply" action={modes.MULTIPLY} name="&#215;"  />
        <FunctionButton id="divide" action={modes.DIVIDE} name="/"  />
        <FunctionButton id="equals" action={modes.EQUALS} name="="  />
        <FunctionButton id="decimal" action={modes.DECIMAL} name="."  />
      </CalcContextProvider>
    </div>
  );
}

export default App;
