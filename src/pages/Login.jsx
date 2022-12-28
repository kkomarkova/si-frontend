/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { UserContext } from '../App';

const urlLogin ='https://threeam.onrender.com/login/password'
const urlGetUser = "https://threeam.onrender.com/user"
const Login = () =>{


const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const {user,setUser} = React.useContext(UserContext)
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const resp = await axios.post(urlLogin, {email: email, username: username, password: password},{withCredentials:true});
    console.log(resp);
    if(resp.data.message==="Logged in successfully"){
      //setGlobalUser
      const userReturned = await axios.get(urlGetUser,{withCredentials:true});
      console.log(userReturned.data);
      setUser(userReturned.data);
      console.log(user)
    }
    setMessage("User Logged in successfully")
  } catch (error) {
    console.log(error);
    setMessage("User Login failed")
  }
};

  return (
    <>
    <form onSubmit={handleSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input
    value={email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value);}}/>
  </div>
  <div class="form-group">
    <label for="exampleInputFirstName">Username</label>
    <input value={username} type="text" class="form-control" id="exampleUsername" placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input value={password} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>{setPassword(e.target.value);}}/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  <div className="message">{message ? <p>{message}</p> : null}</div>
</form>
</>
  );
};
export default Login;
