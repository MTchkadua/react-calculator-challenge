import React from 'react'

export default function AnswerTwo(props) {
  return (
    <div className='answersSection'>
      <div>
        <p className='answerHeader'>Total</p>
        <p className='answerPerson'> / person</p>
      </div>
      <div className='answerInput'>
        <p className='dollar'>$</p>
        <button className='counterOne'> {props.counterTwo} </button>
      </div>
    </div>
  )
}