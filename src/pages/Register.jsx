/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import {useSearchParams} from 'react-router-dom'

const url ='https://threeam.onrender.com/signup'


const Register = () => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();
 try {
  const resp = await axios.post(url, {email: email, username: username, password: password});
 setMessage("User created successfully")
} catch (error) {
  console.log(error.response);
  setMessage("User sign up failed")
}
};
const handleSubmitInvite = async (e) => {
  e.preventDefault();
 try {
  const resp = await axios.post(`https://threeam.onrender.com/invite?token=${searchParams.get('id')}`, {email: email, username: username, password: password});
 setMessage("User created successfully")
} catch (error) {
  console.log(error.response);
  setMessage("User sign up failed")
}
};
const [searchParams, setSearchParams] = useSearchParams();
console.log(searchParams.get('id'))
if(searchParams.get('id')){
  console.log("HERE")
  return(<>
  <form onSubmit={handleSubmitInvite}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input
    type="email" value={email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value);}}/>
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
  
  </>)
}else{
  return (
    <>
  <form onSubmit={handleSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input value={email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value);}}/>
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
}
  
}
export default Register;
