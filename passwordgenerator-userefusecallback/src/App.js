
import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{      //this fun has en kept in cache with useCallback to use it again and again
    let pass="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghjiklmnopqrstuvwxyzz";
    if(numberAllowed) str+="1234567890";
    if(charAllowed) str+= "!@#$%^&*()";

    for (let i = 1; i<=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator();
  },[length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className="App">
     <h1 className='text-4xl text-center text-white mt-7'>Password Generator</h1>

     <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type='text' value={password} className='outline-none w-full py-1 px-3' placeholder='passwordd' readOnly ref={passwordRef}></input>
      <button className='text-white bg-blue-400 w-44' onClick={copyPasswordToClipboard}>Copy</button>
     </div>

    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type='range' min={8} max={100} value={length} onChange={(e)=>{setLength(e.target.value)}}/>
        <label className='text-white'>Length: {length}</label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
                setNumberAllowed((prev) => !prev);
            }}
        />
        <label htmlFor="numberInput" className='text-white'>Numbers</label>
      </div>

      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput" className='text-white'>Characters</label>
      </div>
    </div>

    </div>
  );
}

export default App;
