import React, { useState } from 'react'
import { Link, useSearchParams } from'react-router-dom'

const UserSignup = () => {
 const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
 
  const [userData, setUserData] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newUserData = {
      email: email,
      password: password,
      fullname:{
        firstname:firstname,
        lastname:lastname
      }
    }
    setUserData(newUserData)
    setEmail('')
    setPassword('')
    setFirstname('')
    setLastname('')
  }
  return (
    <div className='p-7 flex  h-screen flex-col justify-between'>
      <img className="w-16 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

      <div>
        <form onSubmit={(e) => {
          handleSubmit(e)
        }} action="">
          <h3 className='text-base font-medium mb-2'>what's your name?</h3>
          <div className='flex gap-4 mb-4 '>
            <input type="text"
              required
              className='bg-[#eeeeee]   rounded px-4 py-2 border w-1/2  text-base placeholder:text-sm'
 value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value)
              }}
              placeholder='first name' />

            <input type="text"
          
              className='bg-[#eeeeee]  rounded px-4 py-2 border  w-1/2 text-base placeholder:text-sm'
   value={lastname}
              onChange={(e) => {
                setLastname(e.target.value)
              }}
              placeholder='last name' />
          </div>

          <h3 className='font-medium text-base  mb-2'>what's your email</h3>
          <input type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className='bg-[#eeeeee]  mb-4 rounded px-4 py-2 border w-full text-base placeholder:text-sm'

            placeholder='enter your email' />
          <h3 className='text-base font-medium mb-2'>password</h3>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className='bg-[#eeeeee]  mb-4 rounded px-4 py-2 border w-full text-base placeholder:text-base'
            placeholder='enter your password' />
          <button
            type="submit"
            className='bg-[#111] text-white text-base font-semibold mb-7 rounded px-7 py-2 w-full placeholder:text-base '
          >Register</button>
        </form>
        <p
          className='text-align-center mb-2'>Already have an account ?
          <Link to="/userlogin" className='text-blue-400 ' >account Login</Link>
        </p>
      </div>
      <div >
       <p className='text-[6px]  leading-tight'>
       this site is protected by ReCAPTCHA and the <span className='underline'>Google privacy policy</span><span className='underline'> and terms of services apply.</span>        </p>
       

      </div>
    </div>
  )
}

export default UserSignup
