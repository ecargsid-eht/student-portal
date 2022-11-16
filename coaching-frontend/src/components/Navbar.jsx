import * as React from 'react';
import { useNavigate,Link } from 'react-router-dom';
import {auth} from '../firebase'
import { signOut } from 'firebase/auth';
import { AuthenticationContext } from '../App';


export default function Navbar() {
  const navigate = useNavigate()
  const {user,setUser} = React.useContext(AuthenticationContext)
  function logoutUser(){
    signOut(auth)
    .then(() => {
      sessionStorage.removeItem("user")
      setUser(sessionStorage.getItem("user"))
    })
    navigate("/")
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-sm navbar-light bg-light">
        <div className="container-fluid py-1 mx-5 px-5">
          <Link to="/" className="navbar-brand">
            <p className="fs-4 fw-bold pb-0 m-0" style={{fontFamily:"Poppins"}}>EdTech</p>
          </Link>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" href="" className="nav-link">
                <p className="my-0 mx-2 fw-light" style={{fontFamily:"Poppins",fontSize:"18px"}}>Home</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/courses" className="nav-link">
                <p className="my-0 mx-2 fw-light" style={{fontFamily:"Poppins",fontSize:"18px"}}>Courses</p>
              </Link>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                <p className="my-0 mx-2 fw-light" style={{fontFamily:"Poppins",fontSize:"18px"}}>About Us</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                <p className="my-0 mx-2 fw-light" style={{fontFamily:"Poppins",fontSize:"18px"}}>Contact Us</p>
              </a>
            </li>
          </ul>

          <ul className="navbar-nav">
            {
              user === null
              ?
              <>
                <li className="nav-item">
                  <button type='button' onClick={() => navigate("/register")} className="btn btn-light ms-2 btn-sm" style={{fontFamily:"Poppins",fontSize:"18px"}}>Register</button>
                </li>
                <li className="nav-item">
                  <button type='button' onClick={() => navigate("/login")} className="btn btn-dark btn-sm ms-2" style={{fontFamily:"Poppins",fontSize:"18px"}}>Login</button>
                </li>
              </>
              :
              <>
                <li className="nav-item">
                  <button type='button' onClick={() => navigate("/profile")} className="btn btn-light ms-2 btn-sm" style={{fontFamily:"Poppins",fontSize:"18px"}}>Check Profile</button>
                </li>
                <li className="nav-item">
                  <button type='button' onClick={logoutUser} className="btn btn-dark btn-sm ms-2" style={{fontFamily:"Poppins",fontSize:"18px"}}>Logout</button>
                </li>
              </>
            }
          </ul>
        </div>
      </nav>
    </>
  );
}