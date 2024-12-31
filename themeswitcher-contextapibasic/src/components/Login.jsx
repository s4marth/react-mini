import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'


function Login() {

    const [username, setUsername] = useState('');
    const [password, setPasssword] = useState('');

const {setUser} = useContext(UserContext);    //setuser is coming from the provider (we passed there )

const handleSubmit = (e)=>{
    e.preventDefault();
    setUser({username, password})      //this is how we send the data through context
}    

  return (
    <div className='text-center'>
      <h2>Login</h2>
      <input value={username} type='text' placeholder='username' onChange={(e)=>setUsername(e.target.value)} className='text-black'></input>
      <input value={password} type='password' onChange={(e)=>setPasssword(e.target.value)} className='ml-3 text-black'></input>
      <button onClick={handleSubmit} className='ml-4 bg-zinc-500'>submit</button>
    </div>
  )
}

export default Login
