import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';

class SignInSignUpHeader extends Component {
  render() {
    return (
      <div>
        <AppBar position="fixed" sx={{ backgroundColor: "#00A1C9" }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" component="div">
              <NavLink to="/signup" style={{ color: 'white', textDecoration: 'none' }}>
                Register User
              </NavLink>
            </Typography>
            <Typography variant="h6" component="div" sx={{ textAlign: 'center' }}>
              <NavLink to="/login" style={{ color: 'green', textDecoration: 'none' }}>
                <Typography variant="h6" component="span" sx={{ display: 'inline-block', animation: 'marquee 10s linear infinite' }}>
                  Welcome To Our BookStore page
                </Typography>
              </NavLink>
            </Typography>
          </Toolbar>
        </AppBar>
        <style>{`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .marquee {
            white-space: nowrap;
            overflow: hidden;
          }
          .marquee span {
            display: inline-block;
            padding-right: 1rem;
          }
        `}</style>
      </div>
    );
  }
}

export default SignInSignUpHeader;
