import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login' // Change this line to import Login from './
import SignUp from './pages/signup/Signup'

function App() {
  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center">
        {/* <Home></Home> */}
        {/* <SignUp></SignUp> */}
        <Home></Home>
      </div>
    </>
  )
}

export default App
