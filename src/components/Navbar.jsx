import React from 'react';
import {  Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
const Navbar= () =>{
  return (
    <>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <div class="mx-auto d-sm-flex d-block flex-sm-nowrap">
        <a class="navbar-brand" href="#"> 
        <Link to="/">Products</Link>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse text-center" id="navbarsExample11">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link">
                    <Link to="/Login">Login</Link>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">
                    <Link to="/Register">Register</Link>
                    </a>
                </li>
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