import React, { useState, useEffect } from 'react';
import GameStyle from './Color.module.css';
import SelectColor from './selectColor/SelectColor';
const ColorGame = () => {

  let initialTime= 10000
  let bonus= 2000;
  let bonus2= 1000;
  let bonusTime= '+2s';
  const [correctColor, setCorrectColor] = useState('');
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(initialTime);
  const colorWord=['Red','Pink','Purple','Blue','Green','Yellow','Orange','White','Black','Gray','SkyBlue','teal'];
  const [randomColor, setRandomColor] = useState(Math.floor(Math.random() * colorWord.length));
  const seconds= Math.floor(counter / 1000);
  const miliSeconds= counter % 1000;

  const handleColor=()=>{

    const index= Math.floor(Math.random() * colorWord.length);
    setCorrectColor(colorWord[index]);
  }

  const handleScore=(selectedColor)=>{

    if(selectedColor === correctColor){

      setScore(score + 1);
      handleColor();

      if(score >= 10){
        bonusTime='+1s';
        setCounter( counter + bonus2);

      }else{

        setCounter( counter + bonus);

      }
      setRandomColor(Math.floor(Math.random() * colorWord.length));


      const moreScore= document.querySelector(`.${GameStyle.timer__moreTime}`)
      moreScore.innerHTML= `<h3>${bonusTime}</h3>`

      setTimeout(() => {

        moreScore.innerHTML= ''
        
      }, 500);

    }else{

      alert(`Game Over !\n Score: ${score}`)
      setScore(0);
      handleColor();
      setCounter(initialTime);
      setRandomColor(Math.floor(Math.random() * colorWord.length));

      const moreScore= document.querySelector(`.${GameStyle.timer__moreTime}`)
      moreScore.innerHTML= ''
  
    }

  }
  const handleStatus=()=>{

    
    alert(`Game Over !\nScore: ${score}`)
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
        <h2 className={GameStyle.colorGame__subtitle}>Select the word color</h2>
        <h2 className={GameStyle.colorGame__target} style={{color: colorWord[randomColor]}}>{correctColor}</h2>
        <div className={GameStyle.stats}>
           <div className={GameStyle.timer}>
              <div className={GameStyle.timer__moreTime}></div>
              <h2 className={GameStyle.timer__seconds}>{seconds}s</h2>
              <h2 className={GameStyle.timer__miliseconds}>{miliSeconds}ms</h2>
           </div>
           <div className={GameStyle.score}>
              <h3 className={GameStyle.score__currentScore}>Score: {score}</h3>
           </div>
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