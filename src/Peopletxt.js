import React from 'react'

export default function Peopletxt(props) {
  return (
    <div className='peopletxt'>
      <p style={Bstyle}>Number Of People</p>
      <p style={cantBe}>{props.cantBe}</p>
    </div>
  )
}

let Bstyle = {
    fontWeight: "700",
    fontSize: "16px",
    color: "#5E7A7D"
}

let cantBe = {
    fontWeight: "700",
    fontSize: "16px",
    color: "red"
}