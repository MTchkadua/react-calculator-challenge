import React from 'react'

export default function People(props) {
  return (
    <div className='bill'>
      <p style={Pstyle}>$</p>
      <input className='billinput' type="number" name="" id="" placeholder='0.00' onChange={(e)=> {props.changePeople(e)}} value={props.value} />
    </div>
  )
}

let Pstyle = {
  fontSize: "20px",
  color: "#9EBBBD",
  marginLeft: "19px"
}
