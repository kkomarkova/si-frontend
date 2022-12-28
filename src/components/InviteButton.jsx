import React from 'react';
import { UserContext } from '../App';
import {  Link } from "react-router-dom";


const InviteButton = ({product_id})=>{
  // const [message, setMessage] = useState("");
  const {user} = React.useContext(UserContext)
   
      return(
        (JSON.stringify(user) !== '{}'  ?<button><Link to='/Invite'>Invite Friend</Link></button>:<></>)
      )
}


export default InviteButton