import React, { useEffect, useRef } from 'react'
import './Titlecards.css'
import cards_data from '../../assets/cards/Cards_data'



const Titlecards = () => {
  const cardsref = useRef();
const handlewheel =(event) =>{
  event.preventdefault();
  cardsref.current.scrollleft += event.deltaY;
}
useEffect(()=>{
  cardsref.current.addEventListener('wheel',handlewheel);
},[])

  return (
    <div className='titlecards'>
      <h2>Popular onn Netflix</h2>  
      <div className='card-list' ref={cardsref}>
        {cards_data.map((card , index)=>{
            return <div className='card' key={index}>
              <img src={card.image} alt="" />
              <p>{card.name} </p>
            </div> 
        })}
      </div>
    </div>
  )
}
import './Titlecards.css'
export default Titlecards
