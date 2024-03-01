import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login' // Change this line to import Login from './
import SignUp from './pages/signup/Signup'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

function App() {
  const { authUser } = useAuthContext();
  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center">
        <Routes>
          <Route path='/' element={authUser ? <Home /> : <Navigate to='/signup' />} />
          <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
          <Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
        </Routes>
        <Toaster></Toaster>
      </div>
    </>
  )
}

export default App
