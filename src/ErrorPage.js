import React from 'react'
import { useNavigate } from 'react-router-dom'

function ErrorPage() {
  const navigate = useNavigate();

  function navigateFunc(){
    navigate('/')
  }

  return (
    <div className="card-container">
      <div className="card">Please Enter a Number between 1 and 11.</div>
      <button onClick={navigateFunc} className="close-button">
        Close
      </button>
    </div>
  )
}

export default ErrorPage
