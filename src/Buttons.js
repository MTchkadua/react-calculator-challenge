import React from 'react'
import Button from './Button'

export default function Buttons(props) {

    let array = [5, 10, 15, 25, 50]


  return (
    <div className='persentSection'>

      <p style={Pstyle}> Select Tip % </p>

      <div className='buttonSection'>
        {array.map(persents => {
          return ( <Button item = {persents} id = {props.persent === persents ? "but" : ""} 
          click = {()=> props.click(persents)} /> )
        })}

        <input className='buttonInput' type="number" name="" id="" placeholder='custom' onChange={(e)=> {props.changeCustom(e)}} value={props.value} />
      </div>
      
    </div>
    
  )
}

let Pstyle = {
  fontWeight: "700",
  fontSize: "16px",
  color: "#5E7A7D"
}