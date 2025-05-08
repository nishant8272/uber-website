import React from 'react'
import { useEffect } from'react'
import { useContext } from'react'
import axios from 'axios'
import { useState } from'react'
import { CaptainDataContext } from '../context/Captaincontext'

import { useNavigate } from 'react-router-dom'

const UserProtectedWrapper = ({ children }) => {
    const token = localStorage.getItem('captain')
    const{captain ,setCaptain} = useContext(CaptainDataContext)
    const [isloading ,setIsloading ] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate('/captainlogin')
        }
    }, [token])
    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }).then((response)=>{
         if (response.status === 200){
            setCaptain(response.data.captain)
            setIsloading(false) 
         }
    })
    .catch((error)=>{
        console.log(error)
        localStorage.removeItem('captain')
        navigate('/captainlogin')
    })
    if (isloading){
        return <div>Loading...</div>
    }

    return (
        <div>
            {children}
        </div>
    )
}

export default UserProtectedWrapper
