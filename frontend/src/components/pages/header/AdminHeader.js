import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Tabs, Tab, Toolbar, Typography, Button } from '@mui/material';
import useLogout from '../../hooks/useLogout';




const AdminHeader = () => {
    const [value, setValue] = useState(0);
    const handleLogOutClick = useLogout();


    return (
        <div>
            <div style={{ paddingTop: '60px' }}></div>
            <AppBar position="fixed" sx={{ backgroundColor: "#00A1C9" }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6" component="div">
                        <NavLink to="/admin" style={{ color: 'white', textDecoration: 'none' }}>
                            Admin Panel
                        </NavLink>
                    </Typography>

                    <Tabs textColor="inherit" value={value} onChange={(e, val) => setValue(val)} >
                        <Tab label="Home" component={NavLink} to="" />
                        <Tab label="View Books" component={NavLink} to="books" />
                        <Tab label="Add Book" component={NavLink} to="books/add" />
                        <Tab label="Log out" component={Button} onClick={handleLogOutClick} />
                    </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default AdminHeader;