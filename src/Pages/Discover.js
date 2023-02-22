import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import  Axios  from "axios";
import EachComp from '../Components/EachComp';
import { LoginContext,UserContext, UseridContext } from '../Helper/Context';
import Genre from '../Components/Genre';
import { Button, Select } from '@mui/material';



const Discover = () => {

  const [content, setcontent] = useState([]);
  const [selectedOption, setSelectedOption] = useState(0);
  const {Loggedin, setLoggedin} = useContext(LoginContext);
  const {Uid,setUid} = useContext(UseridContext);
  const [checked0, setChecked0] = useState(0);
  const [checked1, setChecked1] = useState(0);
  const [checked2, setChecked2] = useState(0);
  const [Fliter, setFliter] = useState(0);
  const genres = [];
  const finalgenres =new Array();
  const options = [
    { value: 'sci-fi', label: 'Sci-fi' },
    { value: 'liquid', label: 'Romance' },
    { value: 'recycle', label: 'Thriller' },
  ];
  const options1 = [
    { value: 'English', label: 'English' },
    { value: 'Hindi', label: 'Hindi' },
    { value: 'French', label: 'French' },
  ];
  const getsomething = async()=>{
    const { data }= await Axios.get("http://localhost:3002/api/get" );
    console.log(data);
   // console.log(checked.value.toString());
    setcontent(data);
  }
  

 
  useEffect(() => {
   getsomething();
  
   //console.log(genres);
  }, [Loggedin])

/*
const apply =()=>{
  if(checked0 == 1){
    genres.push("Sci-fi")
    }

  if(checked1 == 1){
      genres.push("Thriller")  
    }
  if(checked2 == 1){
      genres.push("Romance")
  }
  console.log(genres);

}


  const handleChange = (e) => {
      if(e.target.value == "Sci-fi"){
      setChecked0(!checked0);     
      }
      else if(e.target.value == "Thriller"){
      setChecked1(!checked1);

      }
      else if(e.target.value == "Romance"){
      setChecked2(!checked2);
      if(checked2 == 0){
      genres.push(e.target.value)
      finalgenres.push([...genres]);
      }
      if(checked2 == 1)
      genres.pop()

      }
      console.log(finalgenres);
  };

*/
  return (
    <div className='discover'>  

       <div className='books'>
          {
           content.length >=1 ?
           content && content.map((c)=> 

           <EachComp key={c.bookid} likes={c.likes} likedby={c.likedby} userid ={c.uid} bid={c.bookid} bname ={c.bname} genre={c.genre} desc={c.description} lang={c.lang} price={c.price} pdate={c.pdate} isrc={c.imsrc} pubyear={c.pubyear}/>
           )
           :
           <div>No Books Yet</div>
           }

</div>
    </div>

  )

}

export default Discover