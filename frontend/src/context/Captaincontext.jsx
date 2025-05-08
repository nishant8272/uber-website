import React from 'react'
import { createContext, Provider } from 'react'
import { useState } from 'react'

export const CaptainDataContext = createContext()

const Captaincontext = ({children}) => {
    const [captain, setCaptain] = useState(null)
    const [isloading, setIsloading] = useState(false)
    const [error, setError] = useState(null)
    const updateCaptain =(captainData)=>{
        setCaptain(captainData)
    }
    const value={
        captain,
        setCaptain,
        isloading,
        setIsloading,
        error,
        setError,
        updateCaptain
    }

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    )
}

export default Captaincontext
