import React, {useContext} from 'react'
import UserContext from '../context/UserContext'


function Profile() {
    const {user} = useContext(UserContext);     //extracting the data from context(usercontext)

    if(!user) return <div className='ml-4 mt-4'>No user found</div>
    else{
        return(
            <div className='ml-4 mt-4'>
               Welcome {user.username}
            </div>
        )
    }
}

export default Profile
