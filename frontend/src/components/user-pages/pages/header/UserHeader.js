import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Tabs, Tab, Toolbar, Typography, Button } from '@mui/material';
import { LoggedInUserContext } from '../../../../LoggedInUserContext';
import useLogout from '../../../hooks/useLogout';



const UserHeader = () => {

    const [value, setValue] = useState(0);
    const handleLogOutClick = useLogout();
    const { loggedInUser, setLoggedInUser } = useContext(LoggedInUserContext);
    console.log(loggedInUser.firstName);

    return (
        <div>
            <div style={{ paddingTop: '40px' }}></div>
            <AppBar position="fixed" sx={{ backgroundColor: "#00A1C9" }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6" component="div">
                        <NavLink to="/user" style={{ color: 'white', textDecoration: 'none' }}>
                            User Panel
                        </NavLink>
                    </Typography>
                    <h3>Welcome to our Bookstore <span style={{ color: 'Green' }}>{loggedInUser.firstName}&nbsp;{loggedInUser.lastName}</span> </h3>
                    <Tabs textColor="inherit" value={value} onChange={(e, val) => setValue(val)} >
                        <Tab label="Home" component={NavLink} to="" />
                        <Tab label="Log out" component={Button} onClick={handleLogOutClick} />
                    </Tabs>

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default UserHeader;