import React from 'react'
import { createContext ,Provider} from'react'
import { useState } from'react'

export const UserDataContext = createContext()

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
    <div>
      <UserDataContext.Provider value={{user}}>
      {children}
      </UserDataContext.Provider>
    </div>
  )
}

export default Usercontext
