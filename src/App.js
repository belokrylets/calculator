import MyButtons from './components/MyButtons';
import './App.css';
import { useState } from 'react';
import calculator from './calculations/calculator';

function App() {
  let [display, setDisplay] = useState('')
  function setFormula (arg) {
    setDisplay(display + arg)
  }
  function clearFormula () {
    setDisplay(display = '')
    setResult(result = 0)
    
  }
  let [result, setResult] = useState(0)
  function displeyResult () {
    setResult(result = calculator(display))
    setDisplay(display = calculator(display))
  }

  return (
    <div className="calculator">
      <div className="calculation">{display}</div>
      <div className="result">{result}</div>
      <div className="line"></div>
      <div className="buttons">
      <MyButtons setFormula={setFormula} clearFormula={clearFormula} displeyResult={displeyResult} />
      </div>
    </div>
  );
}

export default App;
