import React from 'react'
import {BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Registration from './Registration'
import Dashboard from './Dashboard'
function Routing() {
  return (
   <>
   <BrowserRouter>
   <Link to='/dashboard' className='element'>Home</Link>
     <Link to='/registration' className='element'>Registration</Link>
      <Link to='/login' className='element'>Login</Link>
      <Link to='/' className='element'>Logout</Link>
  
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/registration' element={<Registration/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
 
   </>
  )
}

export default Routing