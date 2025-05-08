import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CaptainDataContext } from '../context/Captaincontext'
import axios from 'axios'
import { useNavigate } from'react-router-dom'

const Captainsignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('car')
  const navigate = useNavigate()

  const { captain, setcaptain } = useContext(CaptainDataContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const captainData = {
      email: email,
      password: password,
      fullname: {
        firstname: firstname,
        lastname: lastname
      },
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: parseInt(vehicleCapacity),
        vehicleType: vehicleType
      }
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

    if (response.status === 200) {
      const data = response.data
      setcaptain(data.captain)
      localStorage.setItem('token', data.token)
    }
    setEmail('')
    setPassword('')
    setFirstname('')
    setLastname('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('car')
    navigate('/captainhome')
  }

  return (
    <div className='px-5 py-5 flex h-screen flex-col justify-between'>
      <img className="w-16 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

      <div>
        <form onSubmit={(e) => {
          handleSubmit(e)
        }} action="">
          <h3 className='text-base font-medium mb-2'>what's  our Captain's name?</h3>
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

          <h3 className='font-medium text-base  mb-2'>what's our captain's email</h3>
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
          <h3 className='text-base font-medium mb-2'>Vehicle Details</h3>
          <input
            type="text"
            required
            value={vehicleColor}
            onChange={(e) => setVehicleColor(e.target.value)}
            className='bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
            placeholder='Vehicle Color'
          />
          <input
            type="text"
            required
            value={vehiclePlate}
            onChange={(e) => {
              // Convert to uppercase and remove unwanted characters
              const formattedPlate = e.target.value.toUpperCase().replace(/[^A-Z0-9\s-]/g, '')
              setVehiclePlate(formattedPlate)
            }}
            pattern="^[A-Z]{2}\s?\d{1,2}\s?[A-Z]{1,2}\s?\d{1,4}$"
            title="Please enter a valid vehicle plate number (e.g., UP 23 AB 8640)"
            className='bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
            placeholder='Vehicle Plate (e.g., UP 23 AB 8640)'
          />
          <input
            type="number"
            required
            min="1"
            value={vehicleCapacity}
            onChange={(e) => setVehicleCapacity(e.target.value)}
            className='bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
            placeholder='Vehicle Capacity'
          />
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className='bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-base'
            required
          >
            <option value="car">Car</option>
            <option value="motorcycle">Motorcycle</option>
            <option value="bus">Bus</option>
          </select>

          <button
            type="submit"
            className='bg-[#111] text-white text-base font-semibold mb-7 rounded px-7 py-2 w-full placeholder:text-base'
          >Register</button>
        </form>
        <p
          className='text-align-center mb-2'>Already have an account ?
          <Link to="/captainlogin" className='text-blue-400 ' >account Login</Link>
        </p>
      </div>
      <div >
        <p className='text-[6px]  leading-tight'>
this site is protected by ReCAPTCHA and the <span className='underline'>Google privacy policy</span><span className='underline'> and terms of services apply.</span>        </p>

      </div>
    </div>
  )
}

export default Captainsignup
