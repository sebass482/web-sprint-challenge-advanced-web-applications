import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import {axiosWithAuth} from './axiosAuth';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const history = useHistory()
  const [login, setLogin] = useState({
    credentials: {
      username: '',
      password: ''
    }
  }) 
  const loginButton = e => {
    e.preventDefault()
    axiosWithAuth()
      .post('http://localhost:5000/api/login', login.credentials)
      .then((res) => {

        window.localStorage.setItem('token', res.data.payload)
        console.log('success!')
        history.push('/protected')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  axiosWithAuth()
  .get('http://localhost:5000/api/colors')
  .then((res) => {
    // history.push()
   console.log('Axios with Auth Working')
  })

  const handleChange = (e) => {
    setLogin({
      credentials: {
        ...login.credentials,
        [e.target.name]: e.target.value,
      }
    })
  }

  console.log(login.credentials)

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <input
        type='text' placeholder='username' name='username' onChange={handleChange} />
      <input
        type='text' placeholder='password' name='password' onChange={handleChange} />
      <button onClick={loginButton}> Login </button>

    </>
  );
};

export default Login;
