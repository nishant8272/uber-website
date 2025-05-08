import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useContext } from'react'
import { UserDataContext } from '../context/Usercontext'
import { useNavigate } from 'react-router-dom'

const Userlogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { user, setUser } = useContext(UserDataContext)
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const UserData = {
            email: email,
            password: password
        }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, UserData)
        if (response.status === 200) {
            const data = response.data
            alert('login successful')
            setUser(data.user)
            localStorage.setItem('token', data.token)
            // navigate to home page after successful login
            navigate('/home')
        }
        setEmail('')
        setPassword('')

    }
    return (
        <div className='p-7 flex  h-screen flex-col justify-between'>
            <img className="w-16 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

            <div>
                <form onSubmit={(e) => {
                    handleSubmit(e)
                }} action="">
                    <h3 className='text-xl mb-2'>what's your email</h3>
                    <input type="email"
                        required value={email}
                        className='bg-[#eeeeee]  mb-2 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        placeholder='enter your email' />
                    <h3 className='text-xl mb-2'>password</h3>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        className='bg-[#eeeeee]  mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        placeholder='enter your password' />
                    <button
                        type="submit"
                        className='bg-[#111] text-white font-semibold mb-7 rounded px-7 py-2 w-full placeholder:text-base '
                    >login</button>
                </form>
                <p
                    className='text-align-center mb-2'>new here?
                    <Link to="/usersignup" className='text-blue-400 ' >create account</Link>
                </p>
            </div>
            <div className='bg-[#10b461] flex  mb-7 justify-center w-full text-white rounded px-4 py-2 border w-full text-lg'>
                <Link to="/captainlogin"  > login as captain</Link>

            </div>
        </div>
    )
}

export default Userlogin
