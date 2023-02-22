import * as React from 'react';
import { useEffect,useContext } from "react";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { LoginContext,UserContext, UseridContext } from '../Helper/Context';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const {Loggedin, setLoggedin} = useContext(LoginContext);
  const navigate=useNavigate(); 
  useEffect(() => {
    if(value == 0)
    navigate('/');
    else if(value==1)
    navigate('/search');
    else if(value==2){
    Loggedin ==true ?
    navigate('/upload')
    :
    alert("Log in to start Uploading")
    }
  }, [value]);
  

  return (
    <Box sx={{ width: '100%',position: 'fixed',bottom: 0, backgroundColor: '#2d313a',zIndex:100
    }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }} sx={{width: '100%',position: 'fixed',bottom: 0, backgroundColor: '#272626',zIndex:100}}
  >
        <BottomNavigationAction style={{color:'white'}} label="Discover" icon={<WhatshotIcon />} />
        <BottomNavigationAction style={{color:'white'}} label="Search" icon={<SearchIcon />} />
        <BottomNavigationAction style={{color:'white'}} label="Upload" icon={<CloudUploadIcon />} />
 
      </BottomNavigation>
    </Box>
  );
}