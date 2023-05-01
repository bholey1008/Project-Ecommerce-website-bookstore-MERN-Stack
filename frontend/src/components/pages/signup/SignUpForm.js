import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, InputAdornment, OutlinedInput, Radio, RadioGroup, Tab, Tabs, TextField, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react'
import SignInSignUpHeader from '../header/SignInSignUpHeader';
import '../styles/signUp.css'
import { isPhoneNumberValid, isNameValid, validatePassword } from './formValidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const SignUpForm = () => {

    const [registerFormData, setRegisterFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        password: '',
        role: ''
    });

    const [formErrors, setFormErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        password: '',
        gender: '',
        role: ''
    });

    // function to validate is valid or not, if valid set true
    const validateForm = () => {
        let errors = {
            firstName: '',
            lastName: '',
            email: '',
            mobileNumber: '',
            password: '',
            gender: '',
            role: ''
        };

        let valid = true;

        if (!isPhoneNumberValid(registerFormData.mobileNumber)) {
            errors.mobileNumber = "Check mobile number, it should have exact 10 digits";
            valid = false;
        }

        if (!isNameValid(registerFormData.firstName)) {
            errors.firstName = "Check first name";
            valid = false;
        }

        if (!isNameValid(registerFormData.lastName)) {
            errors.lastName = "Check last name";
            valid = false;
        }
        if (!validatePassword(registerFormData.password)) {
            errors.validatePassword = "Check password length, symbols, digit and numbers";
            valid = false;
        }

        if (registerFormData.gender === '') {
            errors.gender = "Select your gender";
            valid = false;
        }
        if (registerFormData.role === '') {
            errors.role = "Select your role";
            valid = false;
        }

        setFormErrors(errors);

        return valid;
    }

    const navigate = useNavigate();

    // handle role/ gender radio button
    const handleRadioButton = (event) => {
        setRegisterFormData({
            ...registerFormData,
            [event.target.name]: event.target.value
        });

        setFormErrors({
            ...formErrors,
            gender: '',
            role: ''
        });
    }


    // handle input change in text field
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setRegisterFormData({
            ...registerFormData,
            [name]: value
        });
    }

    // handle submit button 
    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            // handle submission logic here
            addUserAdminInDatabase();
            setRegisterFormData({
                firstName: '',
                lastName: '',
                email: '',
                mobileNumber: '',
                password: '',
                role: ''
            });
            alert("Account sucessfully created");
           navigate('/signin')
        } else {
            console.log(formErrors);
            alert("Please check the form for errors");

        }
    }


    // handle backend with creating user or admin
    function addUserAdminInDatabase() {
        const URL_USER = 'http://localhost:4000/users/add';

        axios.post(URL_USER, registerFormData)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

    }

    return (
        <div>
            <SignInSignUpHeader />
            <div style={{paddingTop:'40px'}}></div>
            <form onSubmit={handleSubmit}>
                <Box className="signUpFormBox">
                    <h2 className="title">Bookstore Registration Form</h2>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <FormLabel>
                                First Name<span className="required">*</span>
                            </FormLabel>
                            <TextField margin="none" value={registerFormData.firstName} placeholder='First name' onChange={handleInputChange} fullWidth variant="outlined" required name="firstName" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormLabel>
                                Last Name<span className="required">*</span>
                            </FormLabel>
                            <TextField margin="none" value={registerFormData.lastName} placeholder='Last name' onChange={handleInputChange} fullWidth variant="outlined" required name="lastName" />
                        </Grid>
                    </Grid>

                    <FormLabel>
                        Gender<span className="required">*</span>
                    </FormLabel>
                    <FormControl component="fieldset" margin="none">
                        <RadioGroup row aria-label="gender" name="gender" value={registerFormData.gender} onChange={handleRadioButton}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                    <FormLabel>
                        Email Address<span className="required">*</span>
                    </FormLabel>
                    <TextField margin="none" value={registerFormData.email} placeholder='Email address' onChange={handleInputChange} fullWidth variant="outlined" name="email" type="email" required />


                    <FormLabel>
                        Mobile Phone Number<span className="required">*</span> (US members only)
                    </FormLabel>
                    <OutlinedInput
                        margin="none"
                        value={registerFormData.mobileNumber}
                        placeholder="123-456-1234"
                        onChange={handleInputChange}
                        fullWidth
                        name="mobileNumber"
                        inputProps={{ pattern: '^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$', required: true }}
                        startAdornment={<InputAdornment position="start">+</InputAdornment>}
                    />
                    <FormLabel>
                        Create Password<span className="required">*</span>
                    </FormLabel>
                    <TextField margin="none" value={registerFormData.password} placeholder='Create password' onChange={handleInputChange} fullWidth variant="outlined" name="password" type="password" required />

                    {/* role */}
                    <FormLabel>
                        Role<span className="required">*</span>
                    </FormLabel>
                    <FormControl component="fieldset" margin="none">
                        <RadioGroup row aria-label="role" name="role" value={registerFormData.role} onChange={handleRadioButton}>
                            <FormControlLabel value="admin" control={<Radio />} label="admin" />
                            <FormControlLabel value="user" control={<Radio />} label="user" />
                        </RadioGroup>
                    </FormControl>

                    <Button type="submit" variant="contained">
                        Register
                    </Button>
                </Box>
            </form>
        </div>
    )
}

export default SignUpForm;
