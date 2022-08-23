import './App.css';
import santa from '../src/images/santa.png';
import Button from './components/buttons';

function App() {
  return (
    <div className='App'>
      <div className='app-logo-container'>
        <img 
          className='santa-logo'
          src={santa}
          alt='santa-logo' />
      </div>
      <div className='calculator-container'>
        <div className='row'>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className='row'>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>
        <div className='row'>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>*</Button>
        </div>
        <div className='row'>
          <Button>0</Button>
          <Button>=</Button>
          <Button>.</Button>
          <Button>/</Button>
        </div>    
        <div className='row'>
          <Button>Clear</Button>
        </div>
        
      </div>
    </div>  
    );
}

export default App; 
