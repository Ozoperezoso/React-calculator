import './App.css';
import santa from '../src/images/santa.png';
import Button from './components/Buttons';
import Screen from './components/Screen';
import ClearButton from './components/ClearButton';
import {evaluate} from 'mathjs';
import {useState} from 'react';

function App() {

  const [input, setInput] = useState('');
  const addInput = val =>{
    setInput(input + val);
  };

  const calculateResult = () =>{
    if (input){
    setInput(evaluate(input));
    }
    else{
      alert('please enter values to calculate result')
    }
  };

  return (
    <div className='App'>
      <div className='app-logo-container'>
        <img 
          className='santa-logo'
          src={santa}
          alt='santa-logo' />
      </div>
      <div className='calculator-container'>
        <Screen input={input}/>
        <div className='row'>
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={calculateResult}>=</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>    
        <div className='row'>
          <ClearButton handleClear={() => setInput('')}>
            Clear
            </ClearButton>
        </div>
        
      </div>
    </div>  
    );
}

export default App; 
