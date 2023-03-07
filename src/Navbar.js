import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import './Navbar.css';

export function Navbar() {
  return (
    <>
      <ul className='linkdiv'>
        <li ><Link className='link1' to='/'>Home</Link></li>
        <div className='btns'>
          <li><Link id='Todos' to='/app2' className='link1'>Todos</Link></li>
          <li><Link id='Forms' to='/forms' className='link1'>Forms</Link></li>
        </div>
        <li><Link className='link1' to='/profile'>About Us</Link></li>
      </ul>
       <Outlet /> 
    </>
  )
}