import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Display from './components/Display';
import CalcContextProvider from './contexts/CalcContext';
import NumpadButton from './components/NumpadButton';
import FunctionButton from './components/FunctionButton';
import * as acts from './constants/calc_actions';

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
        <FunctionButton id="decimal" action={acts.DECIMAL} name="."  />
        <FunctionButton id="clear" action={acts.ALLCLEAR} name="C"  />
        <FunctionButton id="all-clear" action={acts.ALLCLEAR} name="AC"  />
        <FunctionButton id="add" action={acts.ADD} name="+"  />
        <FunctionButton id="subtract" action={acts.SUBTRACT} name="-"  />
        <FunctionButton id="multiply" action={acts.MULTIPLY} name="&#215;"  />
        <FunctionButton id="divide" action={acts.DIVIDE} name="/"  />
        <FunctionButton id="equals" action={acts.EQUALS} name="="  />
        <FunctionButton id="decimal" action={acts.DECIMAL} name="."  />
      </CalcContextProvider>
    </div>
  );
}

export default App;
