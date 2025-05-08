import React from 'react'
import { Link } from 'react-router-dom'

const CaptainHome = () => {

  return (
    <div className="p-7 flex flex-col min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <img className="w-16" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber Logo" />
        <Link to="/captain/logout" className="text-red-500">Logout</Link>
      </div>
      
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-4">Welcome, captain</h1>
        {/* Add your home page content here */}
      </div>
    </div>
  )
}

export default CaptainHome
