import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider, 
  HttpLink,
  from,
} from "@apollo/client";
import {onError} from '@apollo/client/link/error';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Products from './pages/Products';
import UpdateProfile from './pages/UpdateProfile';
import 'bootstrap/dist/css/bootstrap.min.css';
export const UserContext = React.createContext({user:{},setUser:()=>{}});

//What we gonna do if there is an error
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors){
    graphQLErrors.map(({message, location, path}) => {
      alert(`Graphql error ${message}`)
    })
  }
})
const link = from ([
  errorLink,
  new HttpLink({ uri: 'https://threeam.onrender.com/graphql' }),
])

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
});

function App(props) {

  const [user, setUser] = useState({});
  return (
    <ApolloProvider client={client}>
    <UserContext.Provider value={{user, setUser}}>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Products/>} />
        
        <Route path='/Login' element={<Login/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/UpdateProfile' element={<UpdateProfile/>} />
        <Route path='/Profile' element={<Profile/>} />
      </Routes>
    </Router>
    </UserContext.Provider>
    </ApolloProvider>
  );
}

export default App;
