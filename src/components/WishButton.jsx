import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { UserContext } from '../App';
import {useNavigate} from 'react-router-dom';
const url ='https://threeam.onrender.com/wishes'


const WishButton = ({product_id})=>{
  const [message,setMessage] = useState("");
  const {user} = React.useContext(UserContext)
  const history =useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(product_id)
        try {
          const resp = await axios.post(url, {product_id:product_id},{withCredentials:true});
           console.log(resp);
           if(resp.data.message==="Wish added"){
           console.log("Wished item")
           setMessage("WishItem added")
           history("/profile")
          }

        } catch (error) {
          console.log(error.response);
          setMessage("User Login failed")
        }
      };
      return(
        (JSON.stringify(user) !== '{}'  ?<button onClick={handleSubmit}>Wish for this item</button>:<></>)
      )
}


export default WishButton