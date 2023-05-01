import React from 'react'
import UserHeader from '../pages/header/UserHeader'
import BookList from '../pages/book/BookList';
import { useLoaderData } from 'react-router-dom';
import withAuthRole from '../../../hoc/withAuthRole';
import SignInSignupFooter from '../../pages/footer/SignInSignupFooter';


const UserDashboard = () => {
  const books = useLoaderData();

  return (
    <div>
      <UserHeader />
      <BookList allBooksData={books} />
      <SignInSignupFooter />
    </div>
  )
}

export default withAuthRole(UserDashboard);