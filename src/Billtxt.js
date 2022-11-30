import React from 'react'

export default function Billtxt(props) {
  return (
    <div className='billtxt'>
      <p style={Bstyle}>Bill</p>
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