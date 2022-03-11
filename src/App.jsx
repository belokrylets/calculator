import { useState } from 'react';
import MyButtons from './components/MyButtons';
import './App.css';
import calculator from './calculations/calculator';

function App() {
  let [display, setDisplay] = useState('');
  let [result, setResult] = useState(0);
  function setFormula(arg) {
    setDisplay(display + arg);
  }
  function clearFormula() {
    setDisplay(display = '');
    setResult(result = 0);
  }
  function displeyResult() {
    const getResult = calculator(display);
    setResult(result = getResult);
    setDisplay(display = getResult);
  }

  return (
    <div className="calculator">
      <div className="calculation">{display}</div>
      <div className="result">{result}</div>
      <div className="line" />
      <div className="buttons">
        <MyButtons setFormula={setFormula}
        clearFormula={clearFormula}
        displeyResult={displeyResult} />
      </div>
    </div>
  );
}

export default App;
