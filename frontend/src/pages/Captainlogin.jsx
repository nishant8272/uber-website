import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from'react-router-dom'
import { useContext } from 'react'
import { CaptainDataContext } from '../context/Captaincontext'
const captainlogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {captain , setCaptain} = useContext(CaptainDataContext)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newUserData = {
            email: email,
            password: password
        }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,newUserData)
        if(response.status === 200) {
            
            const data = response.data
            setCaptain(data.captain)
            localStorage.setItem('captain', data.token)

            navigate('/captainhome')
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
                    className='text-align-center mb-2'>  dont have an account?
                    <Link to="/captainsignup" className='text-blue-400 ' >register as a captain</Link>
                </p>
            </div>
            <div className='bg-[#d5622d] flex  mb-7 justify-center w-full text-white rounded px-4 py-2 border w-full text-lg'>
                <Link to="/userlogin"  > Sign in as User</Link>

            </div>
        </div>
    )
}

export default captainlogin
