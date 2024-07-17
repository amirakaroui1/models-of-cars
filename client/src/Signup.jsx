import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const Signup = ({refresh,setrefresh}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const signUp = () => {
    axios.post('http://localhost:8080/user/signup', {
      name:name,
      email:email,
      password:password
    })
    .then((response) => {
      setMessage(response.data);
      setIsError(false);
      setrefresh(!refresh)
    })
    .catch((err) => {
      setMessage(err.response.data);
      setIsError(true);
    });
  };

  return (
    <div className="container">
      <h1>signin</h1>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={()=> signUp()}>sign In</button>
      <p className={`message ${isError ? 'error' : ''}`}>{message}</p>
    </div>
  );
};

export default Signup;