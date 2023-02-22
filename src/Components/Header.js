import  Axios  from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import './header.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LoginIcon from '@mui/icons-material/Login';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import {logo} from '../Uploads/Bklogo.png'

import LogoutIcon from '@mui/icons-material/Logout';
import { LoginContext, UserContext, UseridContext } from '../Helper/Context';
import { useNavigate } from "react-router-dom";

const Header = () => {
   const {Loggedin, setLoggedin} = useContext(LoginContext);
   const {Name, setName} = useContext(UserContext);
   const {Uid,setUid} = useContext(UseridContext); 
   const [reqs, setreqs] = useState(0);

    const [content, setcontent] = useState([]);





   
  const navigate=useNavigate(); 
  const signin = ()=>{
    document.getElementById("login1").style.opacity= '1';
    document.getElementById("crt").style.opacity= '0.6';
    document.getElementById("dsh").style.opacity= '0.6';
    document.getElementById("login2").style.opacity= '0.6';
    document.getElementById("bks").style.opacity= '0.6';
    navigate('/login');
  }
  const signout = () =>{
    document.getElementById("login1").style.opacity= '0.6';
    document.getElementById("crt").style.opacity= '0.6';
    document.getElementById("dsh").style.opacity= '0.6';
    document.getElementById("login2").style.opacity= '0.6';
    document.getElementById("bks").style.opacity= '0.6';
    setLoggedin(false);
    document.getElementById("sglb").style.borderColor=" #762929";
  }

  const req =() =>{
    document.getElementById("login1").style.opacity= '0.6';
    document.getElementById("crt").style.opacity= '0.6';
    document.getElementById("dsh").style.opacity= '1';
    document.getElementById("login2").style.opacity= '0.6';
    document.getElementById("bks").style.opacity= '0.6';
    navigate('/requests');
  }

  const likes =()=>{
    document.getElementById("login1").style.opacity= '0.6';
    document.getElementById("crt").style.opacity= '1';
    document.getElementById("dsh").style.opacity= '0.6';
    document.getElementById("login2").style.opacity= '0.6';
    document.getElementById("bks").style.opacity= '0.6';
    navigate('/likes')
  }
 
  const mybooks =()=>{
    document.getElementById("login1").style.opacity= '0.6';
    document.getElementById("crt").style.opacity= '0.6';
    document.getElementById("dsh").style.opacity= '0.6';
    document.getElementById("login2").style.opacity= '0.6';
    document.getElementById("bks").style.opacity= '1';
    navigate('/mybks');

  } 
  const home =()=>{
    navigate('/')
  }
  return (
    <div className='header'>
       <div className='title' onClick={home}>
        BOOKED UP</div>
       
        <div className='icons'>
        <div className='signlabel' id='sglb'>
        {Loggedin ? <h5 id='success' >Welcome, {Name} !</h5>: <h5 id='fail'>You are not Logged in</h5>}
        </div>
      
       <label title='Login'><LoginIcon className='login' id="login1" onClick={signin}/></label>
       <label title='My Likes'><FavoriteIcon className='cart' id='crt' onClick={likes}/></label>
       <label title='Requests'><DashboardIcon className='dashboard' id='dsh' onClick={req}/></label>
       <label title='My Books'><LibraryBooksIcon className='dashboard' id='bks' onClick={mybooks}/> </label>
       <label title='Logout'><LogoutIcon className='login' id='login2' onClick={signout}/></label>
       
     

       </div>
    
       
       
    
    </div>
  )
}

export default Header