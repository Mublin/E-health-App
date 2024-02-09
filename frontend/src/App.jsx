import { useState } from 'react'
import './App.css'
import { Link, Routes, Route } from 'react-router-dom'
import Landpage from './pages/Landpage'
import { ContextProvider, initialState } from './context/useContext'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {
  return (
    <>
    <ContextProvider userDetails={initialState.userDetails} >
      <div className="health">
        <nav className="head-container">
          <div className="head-details">
            <div className="up">
              <div className="socials">
                <p>insta</p>
                <p>insta</p>
                <p>insta</p>
              </div>
              <div className="contacts">
                <p><a href="tel:+2348141312442">Phone: +2348141312441</a></p>
                <p><a href="mailto:mublin99@gmail.com">Email: mublin99@gmail.com</a></p>
              </div>
            </div>
          <div className="down">
              <div className="logo">
                <p>Buk</p>
              </div>
              <div className="nav-items">
                <Link className='link-items' to={'/'}>Home</Link>
                <Link className='link-items'to={'/contact'}>Emergency</Link>
                <Link className='link-items'to={'/about'}>About</Link>
                <Link className='link-items'to={'/contact'}>Contact</Link>
                <Link className='link-items'to={'/login'}>Log-in/Sign-up</Link>
              </div>
              <div className="nav-action">
                <button>action</button>
              </div>
            </div>
            </div>
        </nav>
        <Routes>
          <Route path='/' element={<Landpage />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/register'   element={<RegisterPage />}/>
        </Routes>
        
      </div>
      </ContextProvider>
    </>
  )
}

export default App
