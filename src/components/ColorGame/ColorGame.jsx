import React, { useState, useEffect } from 'react';
import GameStyle from './Color.module.css';
import SelectColor from './selectColor/SelectColor';
const ColorGame = () => {


  const colorWord=['Red','Pink','Purple','Blue','Green','Yellow','Orange','White','Black','Gray','SkyBlue','teal'];
  const [correctColor, setCorrectColor] = useState('');
  const [score, setScore] = useState(0);
  const randomColor= Math.floor(Math.random() * colorWord.length)

  const handleColor=()=>{

    const index= Math.floor(Math.random() * colorWord.length);
    setCorrectColor(colorWord[index]);
  }
  

  const handleScore=(selectedColor)=>{

    if(selectedColor === correctColor){

      setScore(score + 1);
      handleColor();

    }else{

      alert("Has perdido!")
      setScore(0)
      handleColor();

    }

  }


  useEffect(() => {
    
    handleColor();
  }, []);

  return (
    <div className={GameStyle.colorGame}>
        <h2>Select the word color</h2>
        <h2 style={{color: colorWord[randomColor]}}>{correctColor}</h2>
        <p>Score: {score}</p>
        <div className={GameStyle.colorGame__colorsContainer}>
          {colorWord.map((color, index)=>(

            /*<button style={{background:`${color}`}} key={index} onClick={() => handleScore(color)}>
              {color}
            </button>*/
            <SelectColor key={index} color={color} handleScore={handleScore}/>


          ))}
        </div>
    </div>
  )
}

export default ColorGame