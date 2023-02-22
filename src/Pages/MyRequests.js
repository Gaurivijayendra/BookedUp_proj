import  Axios  from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { UseridContext,LoginContext,UseremailContext } from '../Helper/Context';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Button } from '@mui/material';



const MyRequests = () => {
    const {Uid,setUid} = useContext(UseridContext);
    const {Loggedin, setLoggedin} = useContext(LoginContext);
    const [reqs, setreqs] = useState("");
    const {mail,setmail} = useContext(UseremailContext);
    
    const [content, setcontent] = useState([]);
    const [val, setval] = useState("1");

    const getsomething = async()=>{
        const { data }= await Axios.get("http://localhost:3002/api/getreq" );
        console.log(data);
        setcontent(data);
        setreqs(data.length);
       // console.log(checked.value.toString());
      }
      
    
     
      useEffect(() => {
       getsomething();
      
       //console.log(genres);
      },[content] )

      const acceptreq = (bookid) => {
        

      }
    

  return (
    <div>

<div className='likepage'>
     
     { 
          Loggedin ?
          (content ?
          (content.length>0 ?
            
            content.map((c)=>
           c.recuid == Uid &&
           
           <div className='likes'>
           <div className='likeitems'>
            {
              c.accepted ? <CheckCircleOutlineIcon id='status' sx={{ fontSize: 60 }}></CheckCircleOutlineIcon>  
              :
              <AccessTimeIcon id='status' sx={{ fontSize: 60 }} ></AccessTimeIcon>
            }
           
            <div>Received From: {c.senuid}</div>
            <div>Book Name: {c.bname}</div>
            <div>Price:  Rs. {c.price}</div>
            <div>Book ID: {c.bookid}</div>
            <div>Received on: {c.rdate}</div>
            <Button variant="outlined"   color='error' onClick={() => {Axios.delete(`http://localhost:3002/api/accept/${c.bookid}/${c.senuid}`);
                    Axios.put("http://localhost:3002/api/postlikeaccept", 
                    {
                      senuid: c.senuid,
                      recuid: Uid,
                      bookid: c.bookid
                    }).then(()=>{
                    console.log("success");
                    
                    });
                    Axios.put("http://localhost:3002/api/postlikeacceptemail", 
                    {
                      senuid: c.senuid,
                      recuid: Uid,
                      mail: mail,
                      bookid: c.bookid
                    }).then(()=>{
                    console.log("success");
                    
                    });
                   // console.log(checked.value.toString());
                     

        setval(val+1); 
        }}>Accept</Button>
            </div>
           </div>
          
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

    </div>
  )
}

export default MyRequests