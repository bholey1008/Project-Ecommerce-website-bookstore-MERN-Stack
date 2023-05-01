import React from 'react';
import AdminHeader from '../header/AdminHeader';
import { Outlet } from 'react-router-dom';
import SignInSignupFooter from '../footer/SignInSignupFooter';
import withAuthRole from '../../../hoc/withAuthRole';

const AdminDashboard = () => {
  return (
    <div>
      <AdminHeader />
      <Outlet />
      <SignInSignupFooter />
    </div>
  )
}

export default withAuthRole(AdminDashboard, 'admin');

