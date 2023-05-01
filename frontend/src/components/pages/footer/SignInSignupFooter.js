import React, { Component } from 'react';
import { Typography } from '@mui/material';

class SignInSignupFooter extends Component {
    render() {
        return (
            <div style={{ position: 'relative', minHeight: '100vh' }}>
                <div style={{ paddingBottom: "3rem" }}>
                    {/* Add your main content here */}
                </div>
                <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, height: '3rem', backgroundColor: "#F0F0F0", textAlign: "center", margin: "0 auto" }}>
                    <Typography variant="caption" sx={{ display: 'block', color: "#808080" }}>
                        © 2023 Bookstore. All Rights Reserved. |
                        For more details, please visit <a href="https://bookstore.com/aboutus" target="_blank" rel="noopener noreferrer" style={{ color: '#00A1C9' }}>bookstore.com</a>
                    </Typography>
                </div>
            </div>
        );
    }
}

export default SignInSignupFooter;
