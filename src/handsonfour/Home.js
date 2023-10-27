import React,{useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
function Home() {
  const Navigate=useNavigate();
  const token=localStorage.getItem("token")
  // console.log(token)
  useEffect(()=>{
    if(token){
        axios.get("http://localhost:3000/",
        {headers: {'authorization':`Bearer ${token}`}})
        .then(res=>console.log(res.data))
    }
    else{
      Navigate("/login")
    }
  },[token,Navigate])
const handleclick=()=>{
    localStorage.removeItem('token');
    Navigate('/login')
}
  return (
    <>
    <h1>Home Page</h1>
   <button onClick={handleclick}>Logout</button>
 
  
    </>
  )
}

export default Home