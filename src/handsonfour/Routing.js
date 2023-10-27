import React from 'react'
import {BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Registration from './Registration'
function Routing() {
  return (
   <>
   <BrowserRouter>
      <Link to='/' className='element'>Home</Link>
      <Link to='/registration' className='element'>Registration</Link>
      <Link to='/login' className='element'>Login</Link>
  
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/registration' element={<Registration/>}/>
       <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
 
   </>
  )
}

export default Routing