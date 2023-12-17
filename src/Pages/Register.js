import React, { useState ,useEffect}  from 'react'
import axios from 'axios'
import './style.css'
function Register() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [mobile,setMobile]=useState('')
    useEffect(()=>{
      axios.get('http://localhost:8000/userdetails')
      .then(users=>{
      //setUsers(users.data)
      console.log(users.data);
      console.log(typeof(users.data));
      console.log(users.data['name']);
      var namedetail=users.map(item=>item.name)
      console.log('name is ',namedetail);
      
      }).catch(err=>{
          // "Request failed with status code 404" error, 
          //it means that the server is unable to find the resource you are trying to access.
          console.log('error',err);
      })
          },[])
const handleSubmit=(e)=>{
e.preventDefault()

}
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
            <butto className='btn' onclick={handleSubmit}>Register</butto>
        </form>
    </div>
    
    </>
  )
}

export default Register