import React, { useState, useEffect } from 'react';
import ColorGame from './ColorGame/ColorGame'
import IndexStyle from './Index.module.css';


const Index = () => {
    const [play, setPlay] = useState(false);
  return (
    <div>
        <h1>Welcome to select the right color</h1>
        {play && <ColorGame/>}
        <button onClick={()=> setPlay(true)}>Jugar</button>
    </div>
  )
}

export default Index