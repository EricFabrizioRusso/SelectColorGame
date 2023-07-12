import React from 'react'
import SelectColorStyle from './SelectColor.module.css'

const SelectColor = ({color, handleScore}) => {

  

  return (
    <div onClick={()=> handleScore(color)} className={SelectColorStyle.selectColor} style={{background:`${color}`}}>

    </div>
  )
}

export default SelectColor