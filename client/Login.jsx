import React from 'react';
import {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';


const Login = (props) => {
  const [userData, setUserData] = useState({ username: '', password: ''});
  const [errorMessage, setErrorMessage] = useState({ value: '' });
  const [authStatus, setAuthStatus] = useState(false);

  //custom hook to update state with current value
  const handleInputChange = (e) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [e.target.value]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //for testing purposes only
    userData.username === 'admin' && userData.password === 'password' ?
      ( localStorage.setItem('authStatusInLocalStorage', true)
      ) :

      //user is now authenticated and redirected to index(mainappcontainer)
      //set local storage logged in property to true
      setErrorMessage((prevState) => ({ value: 'Invalid credentials' }));

  }
  return (
  <div>
    <h1>Welcome, please sign in.</h1>
    <form>
      <label>Username</label>
      <input type="text" name="username" onChange={(e) => handleInputChange(e)} />
      <label>Password</label>
      <input type="text" name="password" onChange={(e) => handleInputChange(e)} />
      <button type="submit" onClick={handleSubmit}> Login </button>
    </form>
  </div>
  )
}

export default Login;