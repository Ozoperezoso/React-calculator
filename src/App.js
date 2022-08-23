import './App.css';
import santa from '../src/images/santa.png';

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
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
      </div>
    </div>  
    );
}

export default App; 
