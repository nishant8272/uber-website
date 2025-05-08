import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate  } from'react-router-dom'

const UserLogout = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('captain')
    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`,{
        headers :{
            'Authorization':`Bearer ${token}`
        }}
    ).then((res)=>{
        if(res.status===200){
            alert('logout successful')
            localStorage.removeItem('captain')
        }
        navigate('/captainlogin')
    })
    
  return (
    <div>
      logout
    </div>
  )
}

export default UserLogout
