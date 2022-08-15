import React from 'react'
import { useNavigate} from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] =React.useState("")
  const navigate=useNavigate();
  const handleLogin=async()=>{
    console.warn(email,password)
    let result=await fetch("http://localhost:5000/login",{
      method:"post",
      body:JSON.stringify({email,password}),
      headers: {
        
        'Content-Type': 'application/json'
      }

    })
    result=await result.json();
    console.warn(result)
    if(result.name){
      localStorage.setItem("user",JSON.stringify(result))
      navigate('/')

    }
    else{
      alert("Please enter correct deatiles")
    }
  }

  return (
    <div className='login'>
      <h1 className='headerlogin'>Login</h1>
        <input placeholder='Email' className='inputBox' type='text' onChange={(e)=>setEmail(e.target.value)}/>
        <input placeholder='Password' className='inputBox' type='password'onChange={(e)=>setPassword(e.target.value)}/>
        <button className='btn-sinup' onClick={handleLogin} >Sineup</button>
        
      
    </div>
  )
}

export default Login;
