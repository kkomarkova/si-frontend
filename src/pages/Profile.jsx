/* eslint-disable no-unused-vars */
import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { UserContext } from '../App';
import InviteButton from '../components/InviteButton';



const Register = () => {
    const {user,setUser} = React.useContext(UserContext)
    const [wishlist,setWishList] = useState([])
    console.log(user);
    const url = 'https://threeam.onrender.com/wishes'
    const func = async()=>{
        const resp = await axios.get(url,{withCredentials:true})
        console.log(resp.data.wishes)
        setWishList(resp.data.wishes)
    }
    useEffect(() => {
        func()
      }, []);
    if(wishlist.length === 0){
        return(<> <div class="form-group">
        <label for="exampleInputEmail1">Email address: {user.email}</label>
        </div>
      <div class="form-group">
        <label for="exampleInputFirstName">Username: {user.username}</label>
      </div>
      <div class="form-group">
        <label>Image</label>
        <img width="100px" height="100px" src={user.image_url} alt='images'/>
        
      </div>
      <InviteButton></InviteButton>
      <div id="div1"></div>
      </>)
    }
  return (
    <>

  <div class="form-group">
    <label for="exampleInputEmail1">Email address: {user.email}</label>
    </div>
  <div class="form-group">
    <label for="exampleInputFirstName">Username: {user.username}</label>
  </div>
  <div class="form-group">
    <label>Image</label>
    <img width="100px" height="100px" src={user.image_url} alt='images'/>
  </div>

        <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">ID of wish</th>
                      <th scope="col">Date added</th>
                      <th scope="col">Product id</th>
                      </tr>
                    </thead>
                    <tbody>
                   { wishlist.map((item)=>{

                       return(<>
                        <tr>
                        <td>{item.id}</td>
                        <td>{new Date(item.date_added).toLocaleString()}</td>
                        <td>{item.product_id}</td>
                        </tr>
                       </>)
                   })}
                    </tbody>
        </table>
        <InviteButton></InviteButton>
        <div id="div1"></div>
        </>
  );
}
export default Register;
