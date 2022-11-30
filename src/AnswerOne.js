import React from 'react'

export default function AnswerOne(props) {
  return (
    <div className='answersSection'>
      <div>
        <p className='answerHeader'>Tip amount</p>
        <p className='answerPerson'> / person</p>
      </div>
      <div className='answerInput'>
        <p className='dollar'>$</p>
        <button className='counterOne'> {props.counterOne} </button>
      </div>
      

    </div>
  )
}





