import React, { useContext } from 'react'
import '../components/Card.css'
import { UseContext } from '../context/useContext'

const Landpage = () => {
    const {state} = useContext(UseContext)
    console.log(state)
  return (
    <main className="body-container">
          <div className="center-image">
            <div className="main-text">
              <h1><span>Health Care</span></h1>
              <h4><span>For Bayero University student</span></h4>
              <h5>Write something abit lengthy</h5>
              <br /> <button>action</button>
            </div>
          </div>
          <div></div>
          <div className="feature">
            
          </div>
          <div className="cta-cards">
          <div className='card first'>
        <div className="card-title">
          <h2>Hospitality</h2>
        </div>
        <div className="card-text">
          <p>lengthy text hjvvvvvvvvvvhjjjjjjjjj</p>
        </div>
    </div>
    <div className='card action'>
    <div className="card-title">
          <h2>Emergency</h2>
        </div>
        <div className="card-text">
          <p>lengthy text hjvvvvvvvvvvvvvvvvvvvv</p>
        </div>
    </div>
    <div className='card last'>
    <div className="card-title">
          <h2>Contact Us</h2>
        </div>
        <div className="card-text">
          <p>lengthy text ghhhhhcthhhhhhhhhhh</p>
        </div>
    </div>
          </div>
          
        </main>
  )
}

export default Landpage