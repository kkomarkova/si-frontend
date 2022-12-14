/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { UserContext } from '../App';

const url ='https://threeam.onrender.com/updateuser'

const UpdateProfile = () =>{

const [file, setFile] = useState();
const [message, setMessage] = useState("");

const {user,setUser} = React.useContext(UserContext)
const handleSubmit = async (e) => {
  e.preventDefault();
  const blob= new FormData()
  blob.append('image',file)
  console.log(blob)
  try {
    const resp = await axios.put(url,blob,{withCredentials:true,headers:{'Content-Type': 'multipart/form-data'}});
    console.log(resp.data.message);
    setUser({...user,image_url:resp.data.message})
    console.log(user)
    setMessage("User Image saved successfully")
  } catch (error) {
    console.log(error);
    setMessage("User Login failed")
  }
};
  return (
    <>
    <form onSubmit={handleSubmit} type="form-data">
  <div class="form-group">
    <label for="exampleInputEmail1">Image</label>
    <input
    type="file" class="form-control" id="exampleInputFile" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>{console.log(e.target.files[0]);setFile(e.target.files[0]);}}/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  <div className="message">{message ? <p>{message}</p> : null}</div>
</form>
</>
  );
};
export default UpdateProfile;
