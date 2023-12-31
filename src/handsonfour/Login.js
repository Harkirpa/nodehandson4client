import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Login() {
    const [details, setDetails] = useState(
        {
            email: "",
            password: ""
        }
    )
    const navi=useNavigate()
    const handleInput = (event) => {
        setDetails({ ...details, [event.target.name]: event.target.value })
    }
     const handleSubmit=(event)=>{
        event.preventDefault()
       axios
       .post('http://localhost:4555/api/login',details)
          .then((res)=>
            {
                alert(res.data.msg)
                console.log(res.data)
                setDetails(res.data)
                localStorage.setItem("token",res.data.token)
                navi('/')
            })
          .catch((err)=>
            
                console.log(err)
        )
     setDetails({
          email:" ",
          password:" "
     })
     navi('/')
    }
  return (
   <>
        <form>
            <div className='box-form'>
                <div className='form'>
                  <input type='text' placeholder='Email' name='email' id='email' value={details.email} onChange={handleInput} />
                  </div>
                  <div className='formpass'> 
            <input type='password'  placeholder='Password' name='password' id='password' value={details.password} onChange={handleInput} />
            </div>
            <button type='btn' id="go" onClick={handleSubmit}>Submit</button>
            </div>
                  </form>
   </>
  )
}

export default Login