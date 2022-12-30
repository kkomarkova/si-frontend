/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { UserContext } from '../App';

const url ='https://threeam.onrender.com/sendInvite'
const Invite = () =>{

const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const {user,setUser} = React.useContext(UserContext)
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(url, {toemail:email,url:"https://sgoatfrontend.azurewebsites.net/Register?id="},{withCredentials:true});
       console.log(resp.data);
       if(resp.data.message==="Wish added"){
       console.log("Wished item")
      }
      setMessage("Invite Sent")
    } catch (error) {
      console.log(error.response);
      setMessage("User Login failed")
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input
    type="email" value={email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value);}}/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  <div className="message">{message ? <p>{message}</p> : null}</div>
</form>
</>
  );
};
export default Invite;
