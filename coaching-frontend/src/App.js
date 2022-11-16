import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Footer from './components/Footer';
import Login from './pages/Login';
import React,{ useContext, useEffect, useState } from 'react';
import {auth} from './firebase'
import { onAuthStateChanged} from 'firebase/auth';
import Courses from './pages/Courses';
import Profile from './pages/Profile';

export const AuthenticationContext = React.createContext()


function App() {
  const [user,setUser] = useState(sessionStorage.getItem("user"))
  const [userData,setUserData] = useState({})
  useEffect(() => {
    if(sessionStorage.getItem("user") !== null){
      onAuthStateChanged(auth, (user) => {
        if(user){
          if(sessionStorage.getItem("user") !== user.uid){
            sessionStorage.setItem("user",user.uid)
            setUser(sessionStorage.getItem("user"))
          }
        }
        else{
          sessionStorage.removeItem("user")
          setUser(sessionStorage.getItem("user"))
        }
      })
    }
  },[])
  return (
      <>
        <AuthenticationContext.Provider value={{
          user,
          setUser,
          userData,
          setUserData
        }}>
          <div style={{minHeight:"90vh"}}>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>}  />
              <Route path="/courses" element={<Courses/>} />
              {
                user === null
                ?
                <>
                  <Route path='/register' element={<Register/>} />
                  <Route path='/login' element={<Login/>} />  
                </>
                :
                <Route path='/profile' element={<Profile/>}/>
              }
            </Routes>
          </div>
          <Footer/>
        </AuthenticationContext.Provider>
      </>
  );
}

export default App;
