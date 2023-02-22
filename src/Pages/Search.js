import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import './search.css';
import Stack from '@mui/material/Stack';
import Switch from "react-switch";
import { Button, Chip, createTheme } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from '@mui/icons-material/Search';
import Axios from 'axios'
import { ThemeProvider } from '@emotion/react';
import EachComp from '../Components/EachComp';
import Select from 'react-select';
import { Checkbox } from '@material-ui/core';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'


const Search = () => {

  const theme = createTheme({
    palette: {
      type:"dark",
      primary: {
        main: '#fff',
        contrastText: '#fff'
       },
     },
  })
  


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
  
  const [Text, setText] = useState("");
  const [Content, setContent] = useState();
  const [fContent, setfContent] = useState();
  const format = (val) => val
  const parse = (val) => val.replace(/^\$/, '')
  const [value, setValue] = useState(1995);
  const [value1, setValue1] = useState(100);
  const [selectedgenres, setselectedgenres] = useState([]);
  const [selectedOption, setSelectedOption] = useState(0);
  const [selectedOption1, setselectedOption1] = useState(0);
  const [Result, setResult] = useState(0);

  const getsomething =async()=>{
    const { data }= await Axios.get(`http://localhost:3002/api/getsearch/${Text}`);
    console.log(data);
   // console.log(checked.value.toString());
    setContent(data);
    (Result)? setResult(0):
    (data.length==0) ? setResult(1): console.log("#fgf4534");
  }
  const getsomethingfilter =async()=>{
    const { data }= await Axios.get("http://localhost:3002/api/get");
    console.log(data);
   // console.log(checked.value.toString());
    setfContent(data);
    (Result)? setResult(0):
    (data.length==0) ? setResult(1): console.log("#fgf4534");



  }

  const handleClick = (genre) => {
    setselectedgenres([...selectedgenres],genre)
    console.log(selectedgenres);
  };

  const handleDelete = (e) => {
    console.info('You clicked the delete icon.');
  };


  return (
    <div className='sr'>


<ThemeProvider theme={theme}>
 <div className='searchbar'>
 
 
 <TextField  
 className='searchBox'  label="Search By Title" InputLabelProps={{className: 'textlabel'}} variant="outlined" 
 onChange={(e)=> setText(e.target.value) }
 />

 <Button variant="outlined" style={{marginTop: 0, height: 55}}
 onClick={getsomething} 
 >
 <SearchIcon/>
 
 </Button>      
 </div>


</ThemeProvider>
      
          {
           Content && Content.map((c)=> 
           <EachComp key={c.bookid} likes={c.likes} likedby={c.likedby} userid ={c.uid} bid={c.bookid} bname ={c.bname} genre={c.genre} lang={c.lang} price={c.price} pdate={c.pdate} isrc={c.imsrc} pubyear={c.pubyear}/>
           )
          }
           {
     (Result) ? <span> No results Found</span> : ""
   } 

         

    </div>
  )
}

export default Search