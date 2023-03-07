import React from 'react';
import './Profile.css';
import Logo from './todotask/logo';
import { Logo2,Logo3,Logo4 } from './logo2';
 
export function MyProfile() {
  return (
    <div>
      <div className='subprofile'>
      <h1>Hello.. my name is Abbo Fulumera</h1>
       <h2>I am a junior software developer with knowledge in:</h2>
      </div>
      <div>
      <div className='languages'>
        <div className='languagesfirst'>
          <div> 
            <h3 className='react'>ReactJs  <Logo/></h3>
            </div>
        
        <div>
        <h3 className='javascript'>Javascript <Logo3/></h3>
        <div className='languagesecond'>
        <h3 className='python'>Python <Logo4/></h3>
       <h3 className='html'>HTML and CSS <Logo2/></h3>
        </div>
      
        </div>
     
        </div>
       </div>
      </div>
     
      <footer>
        <div className="footer">
          <div className="footer1">
            <div>HOMEPAGE</div>
            <div>PROFILEPAGE</div>
          </div>
          <div className="footer2">
            <div>TODOPAGE</div>
            <div>FORMPAGE</div>
          </div>
          <div className="footer3">
            <div>CONTACTUS</div>
            <div>ABOUTUS</div>
          </div>
        </div>
      </footer>
    </div>
  );
}