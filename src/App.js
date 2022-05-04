import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Display from './components/Display';
import CalcContextProvider from './contexts/CalcContext';


function App() {
  return (
    <div id="calculator" className="App container p-3">
      <CalcContextProvider>
        <Display />
      </CalcContextProvider>
    </div>
  );
}

export default App;
