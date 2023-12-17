import React, { useState } from 'react'
import './style.css'
function Register() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [mobile,setMobile]=useState('')

  return (
    <>
    <div className="container">
        <form action="">
          <h3>Register Form</h3>
            <div className="input-field">
            <label htmlFor="">Name</label>
            <input type="text" onChange={(e)=>setName(e.target.value)} className='input'/>
            </div>
            <div className="input-field">
            <label htmlFor="">Email</label>
            <input type="text" onChange={(e)=>setEmail(e.target.value)} className='input'/>
            </div>
            <div className="input-field">
            <label htmlFor="">Password</label>
            <input type="text" onChange={(e)=>setPassword(e.target.value)} className='input'/>
            </div>
            <div className="input-field">
            <label htmlFor="">Mobile</label>
            <input type="text" onChange={(e)=>setMobile(e.target.value)} className='input'/>
            </div>
            <butto className='btn'>Register</butto>
        </form>
    </div>
    
    </>
  )
}

export default Register