import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { UserContext } from '../App';
import {  Link } from "react-router-dom";


const InviteButton = ({product_id})=>{
  const [message, setMessage] = useState("");
  const {user,setUser} = React.useContext(UserContext)
   
      return(
        (JSON.stringify(user) !== '{}'  ?<button><Link to='/Invite'>Invite Friend</Link></button>:<></>)
      )
}


export default InviteButton