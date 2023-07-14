import React, { useState, useEffect } from 'react';
import GameStyle from './Color.module.css';
import SelectColor from './selectColor/SelectColor';
const ColorGame = () => {

  const initialTime= 10000
  const BonusTime= '+2s';
  const [correctColor, setCorrectColor] = useState('');
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(initialTime);
  const colorWord=['Red','Pink','Purple','Blue','Green','Yellow','Orange','White','Black','Gray','SkyBlue','teal'];
  const [randomColor, setRandomColor] = useState(Math.floor(Math.random() * colorWord.length));
  const seconds= Math.floor(counter / 1000);
  const miliSeconds= counter % 1000;

  const [incrementScore, setIncrementScore] = useState();

  const handleColor=()=>{

    const index= Math.floor(Math.random() * colorWord.length);
    setCorrectColor(colorWord[index]);
  }
  
  if(score === 5){

    


  }


  const handleScore=(selectedColor)=>{

    if(selectedColor === correctColor){

      setScore(score + 1);
      handleColor();
      setCounter( counter + 1000);
      setRandomColor(Math.floor(Math.random() * colorWord.length));


      const moreScore= document.querySelector(`.${GameStyle.timer__moreTime}`)
      moreScore.innerHTML= `<h3>${BonusTime}</h3>`

      setTimeout(() => {

        moreScore.innerHTML= ''
        
      }, 500);

    }else{

      alert("Has perdido!")
      setScore(0);
      handleColor();
      setCounter(initialTime);
      setRandomColor(Math.floor(Math.random() * colorWord.length));
  
    }

  }

  const handleStatus=()=>{

    
    alert("Has perdido!")
    setScore(0)
    handleColor();
   
  }

  useEffect(() => {
    
    handleColor();
   
  }, [correctColor]);

  useEffect(() => {

    const interval = setInterval(() => {

      setCounter((prevCounter) => prevCounter - 10);

    }, 10);


    if(counter < 4000){

      const noTime= document.querySelector(`.${GameStyle.timer}`)
      noTime.classList.add(`${GameStyle.timerActive}`)
      //console.log(noTime)
    
   

    }else if(counter > 4000){

      const noTime= document.querySelector(`.${GameStyle.timer}`)
      noTime.classList.remove(`${GameStyle.timerActive}`)

    }
   
   
    if(counter < 0){

      handleStatus();
      setCounter(initialTime)

    }

    return () => {

      clearInterval(interval);
      
    };

  }, [counter]);


  
 



  return (
    <div className={GameStyle.colorGame}>
        <h2>Select the word color</h2>
        <h2 style={{color: colorWord[randomColor]}}>{correctColor}</h2>
           <div className={GameStyle.timer}>
              <div className={GameStyle.timer__moreTime}></div>
              <h2 className={GameStyle.timer__seconds}>{seconds}s</h2>
              <h2 className={GameStyle.timer__miliseconds}>{miliSeconds}ms</h2>
           </div>
           <div className={GameStyle.score}>
              <h3 className={GameStyle.score__currentScore}>Score: {score}</h3>
           </div>
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