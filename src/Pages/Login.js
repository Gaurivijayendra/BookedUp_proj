import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import  Axios  from "axios";
import './signup.css'
import { useNavigate } from "react-router-dom";
import { LoginContext,UserContext, UseridContext, UseremailContext } from '../Helper/Context';

const Login = () => {
  const {Loggedin, setLoggedin} = useContext(LoginContext);
  const {Name, setName} = useContext(UserContext);
  const [uid, setuid] = useState(""); 
  const {Uid,setUid} = useContext(UseridContext);
  const {mail,setmail} = useContext(UseremailContext);
  const [pass, setpass] = useState("");
  const navigate=useNavigate(); 

  const handlesub = () =>{
      
    document.getElementById("sglb").style.borderColor="Green";


    Axios.post("http://localhost:3002/api/signin", 
    {
    uid: uid,
    key: pass
  }).then((response)=>{
     console.log(response.data);
     if(response.data.length ==1) 
     {
     setLoggedin(true);
     setName(response.data[0].uname);
     setmail(response.data[0].email);
     setUid(response.data[0].uid);
     
     navigate('/');
     }
     else{
     console.log("Invalid userid/password");
     alert("Invalid Userid/Password");
     }
  });
      console.log(uid);
      console.log(pass);
      console.log(mail);
  };
  
  const Handleclick = () =>{
    navigate('/signup');
  } 


  return (
    <div className='content'>
    Login
    <label>Enter Userid</label>
    <input type="text" name='userid' onChange={(e) =>{
        setuid(e.target.value);
        
      }}/>
      <label>Enter Password</label>
      <input type="password" name='userid' onChange={(e) =>{
        setpass(e.target.value);
      }}/>
      <label>Don't Have an Acount ?
      <a href='#' onClick={Handleclick}>   Register Here</a>

      </label>
      

     <button className='subtn' onClick={handlesub}>Login</button>    
    </div>
  )
}

export default Login