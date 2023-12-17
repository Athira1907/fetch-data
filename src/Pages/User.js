import React, { useState } from 'react'
import {useEffect} from "react"
import axios from 'axios'
function User() {
const [users,setUsers]=useState([''])

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
  
  return (
    <>
    <div className="container">
        {/* here table shows data of registered person */}
        <table>
            <thead>
                <tr>
                    <th>Sl No.</th>
                    <th>Name</th>
                    <th>Email ID</th>
                    <th>Password</th>
                    <th>Mobile</th>
                </tr>
            </thead>
            <tbody>
                <tr>
           {
            users.map(item=>(
                <>
                   <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>{item.mobile}</td>
                   
                </>
                   
                   
            ))
           }                   
                </tr>
            </tbody>
        </table>
    </div>
    
    </>
  )
}

export default User