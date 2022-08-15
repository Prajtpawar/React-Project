
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Sineup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  useEffect(() => {
    const auth = localStorage.getItem('user')
    if (auth) {
      navigate('/')

    }
  })


  const collectData = async () => {
    
    let result = await fetch('http://localhost:5000/signup', {
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: {
        Accept:'application/json',
        'Content-Type': 'application/json'
      }
    })
    result = await result.json()
    console.log(result)
    localStorage.setItem("user", JSON.stringify(result))
    if (result) {
      navigate('/')

    }
  }


  return (
    <div className='Regsister'>
      <h1 className='registerh'>Regsister</h1>
      <input className='inputBox' type='text' placeholder='Input Name' value={name} onChange={e => setName(e.target.value)} />
      <input className='inputBox' type='text' placeholder='Input Email' value={email} onChange={e => setEmail(e.target.value)} />
      <input className='inputBox' type='Password' placeholder='Input Password' value={password} onChange={e => setPassword(e.target.value)} />
      <button className='btn-sinup' onClick={collectData} >Sineup</button>
    </div>
  )
}

export default Sineup;