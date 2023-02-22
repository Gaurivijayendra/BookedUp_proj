import './App.css';
import Discover from './Pages/Discover';
import Search from './Pages/Search';
import Upload from './Pages/Upload';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './Components/Header';
import Navbar from "./Components/Navbar";


import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import { LoginContext, UserContext, UseridContext, UseremailContext } from './Helper/Context';
import { useState } from 'react';
import MyRequests from './Pages/MyRequests';
import MyLikes from './Pages/MyLikes';
import MyBooks from './Pages/MyBooks';


function App() {
  const [Loggedin, setLoggedin] = useState(false);
  const [Name, setName] = useState("");
  const [Uid, setUid] = useState("");
  const [mail, setmail] = useState("");
  
  return (
    <BrowserRouter>
    <LoginContext.Provider value={{Loggedin, setLoggedin}}>
    <UserContext.Provider value={{Name, setName}}>
    <UseridContext.Provider value={{Uid, setUid}}>
    <UseremailContext.Provider value={{mail, setmail}}> 
    
      <Navbar/>
      
      <Header/> 
      
     <div className="App"> 
    
      <Routes>
           <Route path='/' element={<Discover/>} />
           <Route path='/search' element={<Search/>}/>
           <Route path= '/upload' element={<Upload/>}/>
           <Route path= '/login' element={<Login/>}/>
           <Route path= '/signup' element={<SignUp/>}/>
           <Route path= '/requests' element={<MyRequests/>}/>
           <Route path= '/likes' element={<MyLikes/>}/>
           <Route path= '/mybks' element={<MyBooks/>}/>

      </Routes>
    
    </div>
    </UseremailContext.Provider>
    </UseridContext.Provider>
    </UserContext.Provider>
    </LoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;
