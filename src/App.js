import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Display from './components/Display';
import CalcContextProvider from './contexts/CalcContext';
import NumpadButton from './components/NumpadButton';
import FunctionButton from './components/FunctionButton';
import * as acts from './constants/calc_actions';
import ControlPad from './components/ControlPad';

function App() {
  return (
    <div className="container">
      <div className="row vh-100 align-content-center">
        <div id="calculator" className="App container">
          <CalcContextProvider>
            <Display />
            <ControlPad />
          </CalcContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
