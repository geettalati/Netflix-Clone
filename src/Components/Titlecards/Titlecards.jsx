import React, { useEffect, useRef, useState } from 'react'
import './Titlecards.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Titlecards = ({ title, category }) => {
  const [apidata, setapidata] = useState([])
  const cardsref = useRef(null)
  const navigate = useNavigate()

  const API_KEY = '761e59bfd68dc6e8c7247ffd66f9de59'

  const handlewheel = (event) => {
    event.preventDefault()
    cardsref.current.scrollLeft += event.deltaY
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${category || 'now_playing'}`,
          {
            params: {
              api_key: API_KEY,
              language: 'en-US',
              page: 1
            }
          }
        )

        setapidata(response.data.results)
      } catch (err) {
        console.error('API Error:', err.response?.data || err.message)
      }
    }

    fetchData()

    const currentRef = cardsref.current
    if (currentRef) {
      currentRef.addEventListener('wheel', handlewheel)
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('wheel', handlewheel)
      }
    }
  }, [category])

  return (
    <div className="titlecards">
      <h2>{title || 'Popular on Netflix'}</h2>

      <div className="card-list" ref={cardsref}>
        {apidata.map((card) => (
          <div
            className="card"
            key={card.id}
            onClick={() => navigate(`/player/${card.id}`)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
              alt={card.title}
            />
            <p>{card.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Titlecards
