import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const API_KEY = '761e59bfd68dc6e8c7247ffd66f9de59'

const Player = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [videoKey, setVideoKey] = useState('')
  const [apiData, setApiData] = useState(null)

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos`,
          {
            params: {
              api_key: API_KEY,
              language: 'en-US'
            }
          }
        )

        const trailer = response.data.results.find(
          video =>
            video.site === 'YouTube' && video.type === 'Trailer'
        )

        if (trailer) {
          setVideoKey(trailer.key)
          setApiData(trailer) 
        }
      } catch (error) {
        console.error('TMDB error:', error)
      }
    }

    fetchTrailer()
  }, [id])

  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        alt="Back"
        onClick={() => navigate(-1)}
      />

      {videoKey ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
          title="Trailer"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      ) : (
        <p style={{ color: 'white' }}>Loading trailer...</p>
      )}

      {apiData && (
        <div className="player-info">
          <p>{apiData.published_at.slice(0, 10)}</p>
          <p>{apiData.name}</p>
          <p>{apiData.type}</p>
        </div>
      )}
    </div>
  )
}

export default Player
