import React from 'react';
import { render, screen } from '@testing-library/react';
import SignInSignupFooter from '../SignInSignupFooter';

describe('SignInSignupFooter', () => {
  it('should render the footer text', () => {
    render(<SignInSignupFooter />);

       // Ensure that the copyright text is displayed correctly
    const copyrightText = screen.getByText(/© 2023 Bookstore. All Rights Reserved/i);
    expect(copyrightText).toBeInTheDocument();

     // Ensure that the link to the Bookstore website is displayed correctly
    const linkElement = screen.getByRole('link', { name: /bookstore\.com/i });
    expect(linkElement).toHaveAttribute('href', 'https://bookstore.com/aboutus');
  });
});
