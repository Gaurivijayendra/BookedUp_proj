import React from 'react'
import { useState, useEffect,useContext } from 'react';
import { LoginContext,UserContext, UseridContext } from '../Helper/Context';
import  Axios  from "axios";
import EachComp from '../Components/EachComp';
import { Button } from '@mui/material';

const MyBooks = () => {
    const {Loggedin, setLoggedin} = useContext(LoginContext);
    const {Uid,setUid} = useContext(UseridContext);
    const [content, setcontent] = useState([]);
    
    const getsomething = async()=>{
        const { data }= await Axios.get(`http://localhost:3002/api/mybooks/${Uid}`);
        console.log(data);
       // console.log(checked.value.toString());
        setcontent(data);
      }
      
    
     
      useEffect(() => {
       getsomething();
      
       //console.log(genres);
      }, [content])
    


  return (
    <div className='discover'>  

             
    

    <div className='books'>
       {
        content && Loggedin ? 
        content.length>=1 ?
        content.map((c)=> 
        <div className='bkss' style={{marginTop: '45px'}}>
        <EachComp key={c.bookid} likes={c.likes} likedby={c.likedby} userid ={c.uid} bid={c.bookid} bname ={c.bname} genre={c.genre} desc={c.description} lang={c.lang} price={c.price} pdate={c.pdate} isrc={c.imsrc}/>
        <Button color='error' variant='outlined' style={{top: '20px'}} onClick={()=>{
            Axios.delete(`http://localhost:3002/api/sold/${c.bookid}`);
        }}
        >Mark as Sold</Button>
        </div>
        )
        :
        <div>You have not Uploaded any Books yet </div>
        :
        <div>You have not Uploaded any Books yet </div>
        }


</div>
 </div>
  )
}

export default MyBooks