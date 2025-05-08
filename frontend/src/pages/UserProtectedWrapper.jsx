import React from 'react'
import { useEffect } from'react'

import { useNavigate } from 'react-router-dom'
import { useContext } from'react'
import axios from 'axios'
import { useState } from'react'
import { UserDataContext } from '../context/Usercontext'

const UserProtectedWrapper = ({ children }) => {
    const token = localStorage.getItem('token')
    const{user,setUser} = useContext(UserDataContext)
    const [isloading ,setIsloading ] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate('/userlogin')
        }
        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        }).then((response)=>{
            if (response.status === 200){
                const userData = response.data
                setUser(userData.user)
                setIsloading(false) 
            }
        })
        .catch((error)=>{
            console.log(error)
            localStorage.removeItem('token')
            navigate('/userlogin')
        })
    }, [token])
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
