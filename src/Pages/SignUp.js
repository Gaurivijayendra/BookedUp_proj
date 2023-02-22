import React from 'react'
import { useState, useEffect } from 'react';
import  Axios  from "axios";
import './signup.css'


const SignUp = () => {
  
  const [uid, setuid] = useState("");
  const [pass, setpass] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const handlesub = () =>{
        Axios.post("http://localhost:3002/api/insert", 
        {
        name: name, 
        uid: uid,
        key: pass,
        email: email
      }).then(()=>{
        console.log("success");
        
      });
      alert("Account Created Successfully");
          console.log(name);
          console.log(uid);
          console.log(pass);
      };
  
  return (
    <div className='content'>SignUp
        <label>Enter Name</label>
    <input type="text" name='name' onChange={(e) =>{
        setname(e.target.value);
      }}/>
        <label>Enter Userid</label>
    <input type="text" name='userid' onChange={(e) =>{
        setuid(e.target.value);
        
      }}/>
      <label>Set a Password</label>
      <input type="password" name='userid' onChange={(e) =>{
        setpass(e.target.value);
      }}/>
      <label>Enter Email Address</label>
      <input type="text" name='email'  onChange={(e) =>{
        setemail(e.target.value);
      }}/>        
     <button className='subtn' onClick={handlesub}>Submit</button>
    </div>
  )
}

export default SignUp