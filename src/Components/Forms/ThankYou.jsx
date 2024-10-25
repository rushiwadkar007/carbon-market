import React from 'react'
import "./thankYou.css";
const ThankYou = () => {
  return (
    <div className='thank-you-container'>
      <div class="thank-you-card">
        <div class="svg-image">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="120px" height="120px">
            <circle cx="32" cy="32" r="30" fill="#B975D6"></circle>
            <path fill="#540676" d="M25 44.5l-10.3-10.3 2.6-2.6L25 39.2l21.7-21.7 2.6 2.6z" />
          </svg>
        </div>
        <h1>Thank You!</h1>
        <p>Your submission has been received. We appreciate your effort and will get back to you shortly.</p>
        <a href="/" class="button">Go to Homepage</a>
      </div>
    </div>
  )
}

export default ThankYou