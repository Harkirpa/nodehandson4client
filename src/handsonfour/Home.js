import React,{useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
function Home() {
  const Navigate=useNavigate();
  const token=localStorage.getItem("token")
  // console.log(token)
  useEffect(()=>{
    if(token){
        axios.get("http://localhost:4555/api",
        {headers: {'authorization':`Bearer ${token}`}})
        .then(res=>console.log(res.data))
    }
    else{
      Navigate("/dashboard")
    }
  },[token,Navigate])
const handleclick=()=>{
    localStorage.removeItem('token');
    Navigate('/dashboard')
}
  return (
    <>
    <h1>Hii User</h1>
   <button onClick={handleclick}>Logout</button>
 
  
    </>
  )
}

export default Home