import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'> 
      <div className='footer-icons'>
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" /> 
      </div>
      <ul>
      <li>Audio Description</li>
      <li>HELP</li>
      <li>Gift</li>
      <li>Media</li>
      <li>Investor</li>
      <li>Jobs</li>
      <li>Terms of Use</li>
      <li>privact</li>
      <li>legak\l</li>
      <li>Contact Us</li>
      </ul>
      <p className='copyright-text'> @1997 fisdnfsd</p>

    </div>
  )
}
import './Footer.CSS'
export default Footer
