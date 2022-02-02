import React from 'react';
import logo from '../images/troll-face.png';

export default function Header(){
    return(
        <div className="header">
          <img className='troll' src={logo}/>
          <h2 className='title'>Meme Generator</h2>
        </div>
    )
}