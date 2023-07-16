import React, { useState, useEffect, useDebugValue } from 'react';
import ColorGame from './ColorGame/ColorGame'
import IndexStyle from './Index.module.css';
import indexStyle from './Index.module.css'

const Index = () => {
    const [play, setPlay] = useState(false);

    const handleHide=()=>{

      const title= document.querySelector(`.${IndexStyle.title}`);
      const btn= document.querySelector(`.${IndexStyle.btnStart}`);
      title.style.display='none';
      btn.style.display='none';

    }

  return (
    <div className={indexStyle.main}>
        <h1 className={indexStyle.title}>Click to start the game</h1>
        {play && <ColorGame/>}
        <button className={indexStyle.btnStart} onClick={()=> {setPlay(true), handleHide()}}>Play</button>
    </div>
  )
}

export default Index