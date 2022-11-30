import React, { useEffect, useState } from 'react'
import People from './People'
import Buttons from './Buttons'
import Bill from './Bill'
import Billtxt from './Billtxt'
import Peopletxt from './Peopletxt'
import AnswerOne from './AnswerOne'
import AnswerTwo from './AnswerTwo'
import Reset from './Reset'

export default function Firstpage() {
  
  const [bill, setBill] = useState("") //-----ბილის მნიშვნელობას ვინახავ აქ
  const [people, setPeople] = useState("") //-----აქ ხალხის რაოდენობას
  const [persent, setPersent] = useState("") //----აქ ბათნების და ინფუთის პროცენტის მნიშვნელობა მაქვს შენახული
  const [answerTip, setAnsewrTip] = useState("00.00") //---- აქ ინახება მხოლოდ თიფის პროცენტი გაყოფილი ხალხის რაოდენობაზე
  const [answerTotal, setAnswerTotal] = useState("00.00") //---აქ ინახება სრულიად თიფს დამატებული თავისი პროცენტი და ეს გაყოფილი ხალხის რაოდენობაზე 
  const [cantBe, setCantBe] = useState("")  //---ტექსტი რომ შეუძლებელია იყოს ნულის ტოლი
  const [cantBeTwo, setCantBeTwo] = useState("") //---ანალოგიური ტექსტი
  

  //----რისეთ ღილაკით ვუბრუნებ საწყის ფორმას
  function reset(){
    setBill(" ")
    setPeople(" ")
    setPersent(" ")
    setCantBe(" ")
    setCantBeTwo(" ")
    setAnsewrTip("00.00")
    setAnswerTotal("00.00")
  }

  
//----გადმომაქვს ბილის ინფუთის მნიშვნელობა

  function changeBill(e){
    setBill(e.target.value) 
  }


//--გადმომაქვს ხალხის ინფუთის მნიშვნელობა
  function changePeople(e){
    setPeople( Math.floor(e.target.value));
   
    console.log(e.target.value);

  }
//--გადმომაქვს ქუსთომის მნიშვნელობა და ვინახავ პროცენტის სთეითში
  function changeCustom(e){
    setPersent(e.target.value)
   
  }
//--გადმომაქვს ბათნების მნიშვნელობა და ამასაც ვინახავ პროცენტის სთეითში
  function changePersents(persents){
    setPersent(persents)
    console.log(persents)
  }
  
//--ვითვლი ბილის ველიუს პროცენტს, მერე ამ პროცენტს ვყოფ ადამიანების რაოდენობაზე. toFixed()-მიმრგვალებს მეასედებს რიგით იმ ციფრამდე რომელსაც ჩავწერ.
  function answerOne(){
    setAnsewrTip(((bill*persent/100)/people).toFixed(1))
  }

//--ვითვლი ბილის ველიუს ვუმატებ ბილის პროცენტს და მერე მთლიანად ვყოფ რაოდენობაზე. *1-ზე მიწერია იმისთვის რომ დაელოდოს მოქმედებებს.
  function answerTwo(){
    setAnswerTotal(((bill*1 + ((bill*persent)/100)*1)/people).toFixed(1))
  }
  
  

//--ვქმნი ფუნქციას სადაც ვახდენ ვალიდაციებს.

  function claclulate(){
    if(( bill > 0) && ( persent > 0) && (people > 0)){
      answerOne()
      answerTwo()
      setCantBe("")
      setCantBeTwo("")
    }else if( ( bill <= 0) && ( persent > 0) && (people > 0)){
      setBill("")
      setCantBe("can't be zero")
    }else if(( bill > 0) && ( persent > 0) && (people <= 0)){
      setCantBeTwo("can't be zero")
      setPeople(" ")
    }else if(( bill <= 0) && ( persent > 0) && (people <= 0)){
      setBill("")
      setCantBe("can't be zero")
      setCantBeTwo("can't be zero")
      setPeople(" ")

    }
  }
//--იუზ ეფექტში ვიძახებ ვალიდაციის ფუნქციას, რაც ყოველ ჯერზე რაიმე ცვლილების დროს არენდერებს ახლიდან.

  useEffect(()=>{
    claclulate()
  })


  

  return (
    <div className='sectionBox'>

      <div className='firstSection'>
          <Billtxt cantBe = {cantBe} />
          <Bill value ={bill} changeBill={changeBill}/>
          <Buttons click = {changePersents}  changeCustom = {changeCustom} persent = {persent}/>
          <Peopletxt cantBe = {cantBeTwo}/>
          <People value = {people}  changePeople= {changePeople}/>
          
      </div>

      <div className='secondSection'>
        <AnswerOne counterOne = { answerTip} />
        <AnswerTwo counterTwo = { answerTotal} />
        <Reset reset = {reset}/>
        
      </div>

    </div>
  
  )
}
