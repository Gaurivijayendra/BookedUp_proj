import {React,useState,useEffect, useContext} from 'react'
import { Stepper,Step } from 'react-form-stepper';
import Select from 'react-select';
import NumericInput from 'react-numeric-input';
import { useNavigate } from "react-router-dom";
import { UseridContext } from '../Helper/Context';

import  Axios  from "axios";
import './upload.css'
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'
import axios from 'axios';
import { Button } from '@mui/material';

const options = [
  { value: 'sci-fi', label: 'Sci-fi' },
  { value: 'romance', label: 'Romance' },
  { value: 'thriller', label: 'Thriller' },
  { value: 'drama', label: 'Drama' },
  { value: 'fantasy', label: 'Fantasy'},
  { value: 'horror', label: 'Horror'},
  { value: 'academic', label: 'Academic'},
  { value: 'other', label: 'Other'},
];
const options1 = [
  { value: 'English', label: 'English' },
  { value: 'Hindi', label: 'Hindi' },
  { value: 'Kannada', label: 'Kannada' },
  { value: 'French', label: 'French' },
  { value: 'German', label: 'German' },
  { value: 'Italian', label: 'Italian' },
  { value: 'Other', label: 'Other' },
];


const Upload = () => {
  const {Uid,setUid} = useContext(UseridContext);
  const [Stp, setStp] = useState(0);
  const [Active, setActive] = useState(true);
  const [title, settitle] = useState("");
  const [genre, setgenre] = useState("");
  const [author, setauthor] = useState("");
  const [lang, setlang] = useState("");
  const [year, setyear] = useState(0);
  const [desc, setdesc] = useState("");
  const [price, setprice] = useState(100);
  const [imgname, setimgname] = useState("");
  const format = (val) => val
  const parse = (val) => val.replace(/^\$/, '')
  const [value, setValue] = useState(1995);
  const [value1, setValue1] = useState(100);
  const [userinfo, setuserinfo] = useState({
       file:[],
  });
  const navigate=useNavigate(); 

  const [selectedOption, setSelectedOption] = useState(0);
  const [selectedOption1, setSelectedOption1] = useState(0);
  
  
   const handleimg = (e) =>{

       setuserinfo({
              ...userinfo,
              file: e.target.files[0],
       });

       
   }


  const handlenext = ()=>{
      
      if(Stp+1 ==4)
      navigate('/');
      if(Stp+1 == 2 ){
        const formdata =  new FormData();
       formdata.append('image', userinfo.file);
       axios.post("http://localhost:3002/upload", formdata, {
                headers: {"Content-Type": "multipart/form-data" }
      
       })
       console.log(userinfo.file.name);
       setimgname(userinfo.file.name);
      }

     if(Stp+1 == 3){
      Axios.post("http://localhost:3002/api/bookinsert", 
      {
     Uid: Uid,
      Title: title,
      Genre: selectedOption.label,
      Author: author,
      Lang: selectedOption1.label,
      Year: value,
      Desc: desc,
      Price: value1,
      Imgsrc: imgname

    }).then(()=>{
      console.log("success");
      
    })
    
    console.log(title);
    console.log(selectedOption);
    console.log(selectedOption1);
    console.log(author);
    console.log(value);
    console.log(value1);
    console.log(desc);
     }
    
    setStp(Stp+1);
    setActive(false);


   
    
    }
    const handleprev =()=>{

      setStp(Stp-1);
      setActive(true)
    }

  return (
    <>
      
    <Stepper id='s1' steps={{completed:{Active}}} activeStep={Stp} styleConfig={{activeBgColor:'#5cad5c',completedBgColor:'#5cad5c', size: '30px', labelFontSize: '14px', }}>
    <Step label="Enter Basic Details" />
    <Step label="Give a Description" />
    <Step label="Set your Price" />
  </Stepper>
  

  {Stp==0 &&
  <>
  <div className='upcontent'>
    <div className='up00'>
  <label>Enter Title of the Book</label>
    <input className='txt'  type="text" name='name' value={title} onChange={(e) =>{
        settitle(e.target.value);
      }}/>
      </div>
<div className='upcontent1'>
 <div className='up11'>
 <label>Choose a Genre</label>
<Select className='type'
         
         onChange={setSelectedOption}
         options={options}
         placeholder="Genres"
         value={selectedOption}

       /> 
 </div>       
    
 <label>Select a Language</label>  
 <Select className='type'
         onChange={setSelectedOption1}
         options={options1}
         placeholder="Languages"
         value={selectedOption1}
       /> 
  </div>
  <div className='up00'>
  <label>Enter Author/Publisher Name</label>
    <input className='txt' type="text" name='name' value={author}  onChange={(e) =>{
        setauthor(e.target.value);
      }}/>
      </div>
  <div className='up00'>    
  <label>Enter the Publication Year :</label>
  <NumberInput size='md'
      onChange={(valueString) => setValue(parse(valueString))}
      value={format(value)}
      max={2022}
      style={{marginLeft: "25px", width: "100px"}}
    >
      <NumberInputField focusBorderColor='red.200'/>
      <NumberInputStepper >
        <NumberIncrementStepper style={{color: "black"}}
      
        
        />
        <NumberDecrementStepper 
         style={{color: "black"}}
        />
      </NumberInputStepper>
    </NumberInput>

  
  </div>
  </div>
  </>
  }

  
  {
    Stp == 1  && 
    <>
    <div className='upcontent'>
    <div className='up002'>
  <label>Give a Description</label>
    <input className='txt' id='txt1' type="text" name='name' value={desc} onChange={(e) =>{
        setdesc(e.target.value);
      }}/>
    </div>
   
  <label>Upload a Cover photo</label>
  
    <input className='txt' id='txt1' type="file" name='image' onChange={handleimg}/>
   
    </div>  
    </>


  }

  {
   Stp == 2 && 
   <>
   <div className='up002'>    
  <label>Enter Your Price :</label>
  <label>Rs.  
  <NumberInput className='pr' style={{width: "200px", height: "30px"}}
      onChange={(valueString) => setValue1(parse(valueString))}
      value={format(value1)}
      max={2022}
    >
      <NumberInputField />
      <NumberInputStepper>
      <NumberIncrementStepper style={{color: "black"}}
    />
    <NumberDecrementStepper style={{color: "black"}}
    />
      </NumberInputStepper>
    </NumberInput>
    </label>
  </div>
   </>
 
  }

  {
    Stp == 3 &&  
    <>
    <h3>Successfully Uploaded</h3>
    </>

  }

 
<div className='nav'>
  {Stp >=1 && 
  <Button variant= "outlined" color="error" onClick={handleprev} id="prev">Previous</Button>
  }

<Button variant= "outlined" color="success" onClick={handlenext} id='nxt'>Next</Button>

</div>


  


    </>
  )
}

export default Upload