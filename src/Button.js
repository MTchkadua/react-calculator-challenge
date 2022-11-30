import React from 'react'

export default function Button(props) {
  return (
    <button className='button' id={props.id} onClick={props.click}> {props.item}%  </button>
    
  )
}
