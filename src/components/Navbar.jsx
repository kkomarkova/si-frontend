/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {  Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { UserContext } from '../App';

const Navbar= () =>{
 const {user,setUser} = React.useContext(UserContext)
 console.log(user);
 const logout =()=>{
    setUser({})
 }
 console.log(JSON.stringify(user))
  return (
    <>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <img alt="logo" width="100px" height="100px"src="https://sysint.blob.core.windows.net/public/314588897_649909553448250_8583662883149238973_n.png" /> 
    <div class="mx-auto d-sm-flex d-block flex-sm-nowrap">
        <a class="navbar-brand"> 
        <Link to="/">Products</Link>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse text-center" id="navbarsExample11">
            <ul class="navbar-nav">
                {JSON.stringify(user) === '{}' ?
                <>
                <li class="nav-item active">
                    <a class="nav-link">
                    <Link to="/Login">Login</Link>
                    </a>
                </li>     <li class="nav-item">
                    <a class="nav-link">
                    <Link to="/Register">Register</Link>
                    </a>
                </li></>
                :
                <>
                <li class="nav-item active"><Link to="/" onClick={logout}>Logout</Link></li>
                <li class="nav-item">
                    <a class="nav-link">
                    <Link to="/UpdateProfile">Update Profile</Link>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">
                    <Link to="/Profile">Profile</Link>
                    </a>
                </li>
                </>}
               
            
  
            </ul>
        </div>
    </div>
</nav>
    </>
    
  // <div>
  //   <li>
  //     <Link to="/">Products</Link>
  //   </li>
  //   <li>
  //     <Link to="/Login">Login</Link>
  //   </li>
  //   <li>
  //     <Link to="/Register">Register</Link>
  //   </li>
  // </div>
);
}
export default Navbar;