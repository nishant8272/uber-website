import React, { createContext, useState } from 'react'

const UserDataContext = createContext()

const Usercontext = ({children}) => {
    const [user, setUser] = useState({
        email: '',
        password: '',
        fullname: {
            firstname: '',
            lastname: ''
        }
    })
    
    return (
        <UserDataContext.Provider value={{user, setUser}}>
            {children}
        </UserDataContext.Provider>
    )
}

export { UserDataContext }
export default Usercontext
