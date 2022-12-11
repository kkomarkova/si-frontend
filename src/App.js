import logo from './logo.svg';
import './App.css';
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
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import 'bootstrap/dist/css/bootstrap.min.css';

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

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Products/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Register' element={<Register/>} />
      </Routes>
    </Router>
    </ApolloProvider> 
  );
}

export default App;
