
import React from 'react' 
import favico from './favico.png'; 
import './todo.css';

function Logo() {
  return (
    <div className="App1">
      <header className="App-header">
         <img src={favico} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}
export default Logo