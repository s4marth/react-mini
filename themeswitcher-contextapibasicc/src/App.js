import UserContextProvider from './context/UserContextProvider';
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <UserContextProvider>
      <div className='bg-black text-white ml-auto mr-auto' style={{width:'40%'}}>
        <Login/>
        <Profile/>
      </div>
    </UserContextProvider>
  );
}

export default App;
