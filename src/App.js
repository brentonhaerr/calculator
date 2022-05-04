import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Display from './components/Display';
import CalcContextProvider from './contexts/CalcContext';
import NumpadButton from './components/NumpadButton';
import FunctionButton from './components/FunctionButton';


function App() {
  return (
    <div id="calculator" className="App container p-3">
      <CalcContextProvider>
        <Display />
        <NumpadButton id="one" value="1" />
        <NumpadButton id="two" value="2" />
        <FunctionButton />
      </CalcContextProvider>
    </div>
  );
}

export default App;
