import React from 'react'
import "../components/Bai1.css"
import { useState } from 'react';
function Bai1() {
    const [user,setUser] = useState({
        name:"",
        email:"",
        age:0
    })

    const handle = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setUser(values=>(
            {
            ...values,
            [name]:value
            }
        ))
    }

  return (
    <div>
      <h1 className="title">Form</h1>
      <div>
        <h1 className="text" >Name</h1>
        <input type="text" className="input" name='name' value={user.name} onChange={handle}/>
      </div>
      <div>
        <h1 className="text">Email</h1>
        <input type="text" className="input" name='email' value={user.email} onChange={handle}/>
      </div>
      <div>
        <h1 className="text">Age</h1>
        <input type="text" className="input" name='age' value={user.age} onChange={handle}/>
      </div>

      <h3>Name:{user.name}</h3>
      <h3>Email:{user.email}</h3>
      <h3>Age:{user.age}</h3>
    </div>
  )
}

export default Bai1
