import React, { useContext, useEffect, useState } from 'react'
import  Axios  from 'axios';
import './Mylikes.css';
import { UseridContext,LoginContext } from '../Helper/Context';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Button } from '@mui/material';

const MyLikes = () => {
    const [content, setcontent] = useState([]);
    const {Uid,setUid} = useContext(UseridContext);
    const {Loggedin, setLoggedin} = useContext(LoginContext);
    const getsomething = async()=>{
        const { data }= await Axios.get(`http://localhost:3002/api/getlikes/${Uid}` );
        console.log(data);
        setcontent(data);
       // console.log(checked.value.toString());
      }

      
      useEffect(() => {
        getsomething();
       
        //console.log(genres);
       },[content] )


  return (
    <div className='likepage'>
      
     {
 Loggedin ?
 (content ?
 (content.length>0 ?
   
   content.map((c)=>
           c.senuid == Uid &&
           <>
           <div className='likes'>
           <div className='likeitems'>
            {
              c.accepted ? <CheckCircleOutlineIcon id='status' sx={{ fontSize: 60 }}></CheckCircleOutlineIcon>  
              :
              <AccessTimeIcon id='status' sx={{ fontSize: 60 }} ></AccessTimeIcon>
            }
           
            <div>Sent To: {c.recuid}</div>
            <div>Book Name: {c.bname}</div>
            <div>Price  Rs: {c.price}</div>
            <div>Book ID: {c.bookid}</div>
            <div>Status: {c.accepted?'Accepted':'Pending'}</div>
            {c.accepted ==1 ? 
             <div>Email: {c.email}</div>
             :
             ""
            }
            
            </div>
            {
             c.accepted>=1 &&  
            <Button variant='outlined' color='error' className='clr' onClick={()=>{
              Axios.delete(`http://localhost:3002/api/clearlikes/${c.bookid}/${c.senuid}`);
              


            }}>Clear</Button>
            }
           </div>

           
           </>
           )
           :
           <div className='caught'>You're all Caught Up !</div>
          )
         

        :
        <div className='caught'>You're all Caught Up !</div>
          )
        :
        <div className='caught'>You're all Caught Up !</div>
           

          
     }

    </div>
  )
}

export default MyLikes