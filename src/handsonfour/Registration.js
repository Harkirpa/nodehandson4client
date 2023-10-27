import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Registration() {
    const navi=useNavigate()
    const [data, setData] = useState(
        {
            name: "",
            phone: "",
            email: "",
            password: ""
        }
    )
     const handleInput = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
     const submit=(event)=>{
        event.preventDefault()
       axios.post('http://localhost:8000/api/register',data)
          .then((res)=>
          {
            alert(res.data.msg)
          setData(res.data)
          localStorage.setItem("token",res.data.token)
          })
          .catch(err=>console.log(err))
          setData({
            name: "",
            phone: "",
            email:" ",
            password:" "
       })
       navi("/")
     }
     return (
   <>
   <form>
            <div className='formsnam'>
            <input type='text'  placeholder='Name' name='name' onChange={handleInput} />
            </div>
            <div className='emailform'>
                  <input type='text' placeholder='Email' name='email' onChange={handleInput} />
                  </div>
                  <div className='telno'>
                  <input type='tel' placeholder='Phoneno' name='phone' onChange={handleInput} />
                  </div>
                  <div className='formpa'>
                  <input type='password'  placeholder='Password' name='password' onChange={handleInput} /> 
                  </div>
            <button type='btn' className='btn' onClick={submit}>Register</button>
        </form>
   </>
  )
}

export default Registration