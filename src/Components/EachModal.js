import React, { useContext, useEffect, useState } from 'react'
import './Eachmodal.css'
import Modal from '@mui/material/Modal';
import  Axios  from "axios";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, Button } from '@mui/material';
import { UseridContext,LoginContext } from '../Helper/Context';

const EachModal = ({children,likes,likedby,uid,bid,bname,genre,desc,lang,price,pdate,isrc,pubyear}) => {


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 900,
        height: 500,
        bgcolor: '#282c34',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        overflowY: 'scroll'
      };
  
  const {Uid,setUid} = useContext(UseridContext);
  const {Loggedin, setLoggedin} = useContext(LoginContext);
  const [btn, setbtn] = useState("btn");
  const [content, setcontent] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const userid=Uid;

 
const like =()=>{
 
  
 

  Axios.post("http://localhost:3002/api/like", 
  {
    recuid: uid,
    senuid: Uid,
    bookid: bid,
    bname: bname,
    price: price
}).then(()=>{
  console.log("success");
  
});

Axios.put("http://localhost:3002/api/updatelikes", 
{
  recuid: Uid,
  bookid: bid
}).then(()=>{
console.log("success");

});

Axios.post("http://localhost:3002/api/postlike", 
{
  senuid: Uid,
  recuid: uid,
  bookid: bid,
  bname: bname,
  price: price
}).then(()=>{
console.log("success");

});


setbtn("btn2");
document.getElementById(btn).textContent="Liked";
document.getElementById("lks").innerHTML=likes+1;

}


  return (
    <div>
  <div onClick={handleOpen}  >
     <div className='comp'> {children}</div>
     </div>

    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
>
         <Box sx={style} className='box'>
         <div className='itens'></div>
    <img  id='ig2' src={require(`../Uploads/${isrc}`)}></img>
    <div className='modals' >  
    <span className='det1' id='name'>{bname}</span>
    <span className='det1' id='name'>Rs. {price}</span>
    <span className='det2' id='name'>{genre}  ({lang})</span>
    {
      pubyear && pdate &&
      <>
       <span className='det2' id='name'>Edition: {pubyear.slice(0,10)}</span>
    <span className='det2' id='name'>Uploaded on: {pdate.slice(0,10)}</span>
      </>
    }
   
    <div className='likeicons'>
    <span className='det2' id='lks'>{likes} </span>
    <FavoriteIcon style={{position: 'relative', left: '7px', bottom: '2px'}}></FavoriteIcon>
    </div>
    <span className='det2' id='name'>{desc}</span>
  

    {
      Loggedin ?
     Uid && typeof likedby !='undefined' && likedby.search(Uid) ==-1 && uid != Uid ? 
    <Button variant="outlined"  id={btn} color='error' onClick={like}>Like</Button>
    :
    Uid ?
    <Button variant="outlined"  id='btn2' color='error' >Liked</Button>
    :
     <label id="warn">Login to Start Liking</label>
     :
     
     <label id="warn">Login to Start Liking</label>
    }
    </div>
        

        </Box>
        
      
      </Modal>
    </div>
  )
}

export default EachModal