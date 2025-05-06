import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Userlogin from './pages/Userlogin'
import UserSignup from './pages/UserSignup'
import Captainlogin from './pages/Captainlogin'
import CaptainSignup from './pages/Captainsignup'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/userlogin" element={<Userlogin/>}/>
        <Route path="/usersignup" element={<UserSignup/>}/>
        <Route path="/captainlogin" element={<Captainlogin/>}/>
        <Route path="/captainsignup" element={<CaptainSignup/>}/>

      </Routes>
  
    </div>
  )
}

export default App
