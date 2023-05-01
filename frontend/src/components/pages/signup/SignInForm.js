import React, { useContext, useState } from 'react';
import SignInSignUpHeader from '../header/SignInSignUpHeader';
import { Box, Button, FormLabel, TextField } from '@mui/material';
import '../styles/signIn.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LoggedInUserContext } from '../../../LoggedInUserContext';
import SignInSignupFooter from '../footer/SignInSignupFooter';


const SignInForm = () => {
  /* const [admin, setAdmin] = useState('');
  const [user, setUser] = useState(''); */
  const [errorMessage, setErrorMessage] = useState('');
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });

  const { loggedInUser, setLoggedInUser } = useContext(LoggedInUserContext);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value
    });
  }

  // handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userData = await axios.post('http://localhost:4000/auth/signin', loginFormData).then(response => response.data);
      setLoggedInUser(userData);
      if (userData.role === 'admin') {
        navigate('/admin');
      } else if (userData.role === 'user') {
        navigate('/user');
      }
    } catch (error) {
      console.error(error.message);
      setErrorMessage('No matching username and password found');
      setLoginFormData({
        ...loginFormData,
        password: ''
      });
    }
  }

  const navigate = useNavigate();

  return (
    <div>
      <SignInSignUpHeader />
      <form onSubmit={handleSubmit}>
        <Box className="signInFormBox">
          <div style={{paddingTop:'40px'}}></div>
          <h2 className="title">User Login Form</h2>
          <FormLabel>
            Email Address<span className="required">*</span>
          </FormLabel>
          <TextField margin="none" value={loginFormData.email} placeholder='Email address' onChange={handleInputChange} fullWidth variant="outlined" name="email" type="email" required />
          <FormLabel>
            Password<span className="required">*</span>
          </FormLabel>
          <TextField margin="none" value={loginFormData.password} placeholder='Password' onChange={handleInputChange} fullWidth variant="outlined" name="password" type="password" required />
          <Button type="submit" variant="contained" className="submit-button">
            Login
          </Button>
          {errorMessage && <div style={{ color: 'red' }}>*{errorMessage}</div>}
        </Box>
      </form>
      <SignInSignupFooter />
    </div>
  )
}

export default SignInForm;
