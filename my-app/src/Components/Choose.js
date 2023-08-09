import React from 'react';
import './Choose.css';
import {Link} from 'react-router-dom';

export default function () {
  return (
    <div>
      <div className="d-flex flex-column">
        <Link to="/Data" className='inline'>
          <button className="btn1">DATA STRUCTURE</button>
        </Link>
        <Link to='/QList' className='inline'>
          <button className="btn2">Competative Coding Solutions</button>
        </Link>  
      </div>
    </div>
  )
}
