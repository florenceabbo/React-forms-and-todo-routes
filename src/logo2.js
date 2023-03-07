import React from 'react'
 
import favicon1 from './favicon1.png'; 
import favicon2 from './favicon2.png'; 
import favicon3 from './favicon3.png'; 
// import './todotask/todo.css';

function Logo2() {
  return (
    <div className="App1">
      <header className="App-header">
        
         <img src={favicon1} className="favicon1" alt="logo" />
      </header>
    </div>
  );
}

function Logo3() {
  return (
    <div className="App1">
      <header className="App-header">
        <img src={favicon2} className="favicon2" alt="logo" />
         
      </header>
    </div>
  );
}

function Logo4() {
    return (
      <div className="App1">
        <header className="App-header">
          <img src={favicon3} className="favicon3" alt="logo" /> 
        </header>
      </div>
    );
  }
export {Logo2, Logo3,Logo4}