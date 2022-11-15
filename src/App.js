import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { useAuthContext } from './hooks/useAuthContext'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'

function App() {
  const { authIsReady, user } = useAuthContext()
  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={user ? <Home /> : <Login />}></Route>
            <Route
              path='/login'
              element={user ? <Navigate to='/' replace /> : <Login />}
            ></Route>
            <Route
              path='/signup'
              element={user ? <Navigate to='/' replace /> : <SignUp />}
            ></Route>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  )
}

export default App
