import React, { useEffect, useRef, useState } from 'react'
import './Titlecards.css'
import cards_data from '../../assets/cards/Cards_data'

const Titlecards = ({title,category }) => {
  const [apidata,setapidata] = useState([]);
  const cardsref = useRef();
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjFlNTliZmQ2OGRjNmU4YzcyNDdmZmQ2NmY5ZGU1OSIsIm5iZiI6MTc2NjU5MTY1MC42ODMsInN1YiI6IjY5NGMwY2EyNmVlMmFmOTY1OTE1NDU4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9Vy1ch3dlnnb6oIBhIuXr1Hw2Olx6KAiOY-aEwmfbB0'
  }
};

const handlewheel =(event) =>{
  event.preventefault();
  cardsref.current.scrollleft += event.deltaY;
}
useEffect(()=>{
  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  .then(res => res.json())
  .then(res => setapidata(res.results))
  .catch(err => console.error(err));

  cardsref.current.addEventListener('wheel',handlewheel);
},[])

  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"}</h2>  
      <div className='card-list' ref={cardsref}>
        {apidata.map((card , index)=>{
            return <div className='card' key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
              <p>{card.original_title} </p>
            </div> 
        })}
      </div>
    </div>
  )
}
import './Titlecards.css'
export default Titlecards
