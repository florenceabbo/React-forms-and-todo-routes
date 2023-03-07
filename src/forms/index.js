import React from 'react';

import { Userform } from './Userform';
import  Dropdownform  from './Dropdownform';
import { Textareaform } from './Textareaform';
import './index.css';


export function FormsDashboard() {
    return (
    <div className='Forms'>
        <Userform />
        <Textareaform />
        <Dropdownform />
       
    </div>
    )
  }