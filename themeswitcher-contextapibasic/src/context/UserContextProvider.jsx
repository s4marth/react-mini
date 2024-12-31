import React, { useState } from 'react'
import UserContext from './UserContext';

const UserContextProvider = ({children})=>{    //jo bhi children aarhe hai unhe bas aage pass krdo
    const [user, setUser] = useState(null);
    return (
        // jo jo bhi data aage childeren m bhjenha ho voh as value(prop)
        <UserContext.Provider value={{user, setUser}}>    
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;