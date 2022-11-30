import React from 'react'

export default function Bill(props) {
  return (
    <div className='bill'>
      <p style={Pstyle}>$</p>
      <input className='billinput' type="number" name="" id="" placeholder='00.00' onChange={(e)=> {props.changeBill(e)}} value={props.value}/>
    </div>
  )
}

let Pstyle = {
  fontSize: "20px",
  color: "#9EBBBD",
  marginLeft: "19px"
}