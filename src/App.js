import React, { useState } from 'react';
import './App.css';


function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setInput(input + e.target.name);
  }
  const handleBackspace = () => {
    setInput(input.slice(0, -1));
    
  };

  const calculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  }

  const clear = () => {
    setInput("");
    setResult("");
  }

  return (
    <div className="container">
      <form>
        <input className='po' type="text" value={input}  placeholder='values'/>
        <input className='po' type="text" value={result} placeholder='result'/>
      </form>
      <br />
      
      <div className="keypad">
      <button  className='ol' onClick={handleBackspace  } name="">cl</button>

        <button  className='ol' onClick={handleClick} name="(">(</button>
        <button  className='ol' onClick={handleClick} name=")">)</button>
        <button className='ol' onClick={handleClick} name="/">/</button>
        <button className='ol' onClick={handleClick} name="7">7</button>
        <button className='ol' onClick={handleClick} name="8">8</button>
        <button className='ol' onClick={handleClick} name="9">9</button>
        <button className='ol' onClick={handleClick} name="*">*</button>
        <button className='ol' onClick={handleClick} name="4">4</button>
        <button className='ol' onClick={handleClick} name="5">5</button>
        <button className='ol' onClick={handleClick} name="6">6</button>
        <button className='ol' onClick={handleClick} name="-">-</button>
        <button className='ol' onClick={handleClick} name="1">1</button>
        <button className='ol' onClick={handleClick} name="2">2</button>
        <button className='ol' onClick={handleClick} name="3">3</button>
        <button className='ol' onClick={handleClick} name="+">+</button>
        <button className='ol' onClick={handleClick} name="0">0</button>
        <button className='ol' onClick={handleClick} name=".">.</button>
        <button className='ol' onClick={calculate} id="result">=</button>
        <button className='ol' onClick={clear} id="clear">Clear</button>
      </div>
    </div>
  );
}

export default App;




