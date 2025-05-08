import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Start from './pages/Start'
import Userlogin from './pages/Userlogin'
import UserSignup from './pages/UserSignup'
import Captainlogin from './pages/Captainlogin'
import CaptainSignup from './pages/Captainsignup'
import Home from './pages/Home'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper'
import Captainlogout from './pages/Captainlogout'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/userlogin" element={<Userlogin/>}/>
        <Route path="/usersignup" element={<UserSignup/>}/>
        <Route path="/captainlogin" element={<Captainlogin/>}/>
        <Route path="/captainsignup" element={<CaptainSignup/>}/>
        <Route path="/home" element={
          <UserProtectedWrapper>
          <Home/>
          </UserProtectedWrapper>
        }/>
        <Route path="/user/logout" element={<UserProtectedWrapper> 
          <UserLogout/>
          </UserProtectedWrapper>
          }/>

        <Route path="/captainhome" element={
          <CaptainProtectedWrapper>
            <CaptainHome/>
          </CaptainProtectedWrapper>
        }/>
        <Route path="/captain/logout" element={<CaptainProtectedWrapper>
          <Captainlogout/>
        </CaptainProtectedWrapper>
        }/>

      </Routes>
  
    </div>
  )
}

export default App
