// Import the necessary dependencies and context
import React, { useContext } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import axios from 'axios';
//admin
import AdminDashboard from '../pages/dashboard/AdminDashboard';
import BookDetail from '../pages/book/BookDetail';
import AddBook from '../pages/book/AddBook';
import BookList from '../pages/book/BookList';
import SignUpForm from '../pages/signup/SignUpForm';
import SignInForm from '../pages/signup/SignInForm';
import DashboardHome from '../pages/book/DashboardHome';

// users
import UserDashboard from '../user-pages/dashboard/UserDashboard';
// importing context
import { LoggedInUserContext } from '../../LoggedInUserContext';
import ComponentDiagram from '../pages/book/ComponentDiagram';

// Define the DefaultRoute component
function DefaultRoute() {
  // Destructure the loggedInUser and setLoggedInUser variables from the context
  const { loggedInUser, setLoggedInUser } = useContext(LoggedInUserContext);

  // Define the getDefaultRoute function
  function getDefaultRoute() {
    if (loggedInUser === null || typeof loggedInUser !== 'object') {
      return '/signin';
    }
    // If the user has the role of 'admin' or 'user', return their respective role
    // if (['admin', 'user'].includes(loggedInUser.role)) return loggedInUser.role;  ('/admin or /signin')
    // If the user is not an admin or a user, return the signin route
    return '/signin'
  }
  // Return a Navigate component that redirects the user to their default route
  return <Navigate to={getDefaultRoute()} />;
}

const router = createBrowserRouter([
  {
    path: '/',
    // Redirect to the admin page
    element: <DefaultRoute />
  },

  {
    path: '/admin',
    element: <AdminDashboard />,
    children: [
      {
        path: '',
        element: <DashboardHome />
      },
      {
        path: 'books/add',
        element: < AddBook />
      },
      {
        path: 'books',
        element: < BookList />
      },

      {
        path: 'books/:bookId',
        element: <BookDetail />
      }
    ]
  },
  {
    path: 'signup',
    element: <SignUpForm />
  },
  {
    path: 'signin',
    element: <SignInForm />
  },
  {
    path: 'user',
    element: <UserDashboard />,
    loader: async () => {
      try {
        const response = await axios.get('http://localhost:4000/books');
        return response.data;
      } catch (error) {
        console.log('THIS IS ERROR', error);
      }
    }
  },
  {
    path: '*',
    // Render a 404 error page for any unknown paths
    element: <div>Oops! Page Not Found unknown path</div>,
  },
  {
    path: '/component-diagram',
    // Render a 404 error page for any unknown paths
    element: <ComponentDiagram/>,
  }
]);

const AdminBookRoute = () => {

  return (
    <RouterProvider router={router} />
  )
}

export default AdminBookRoute;
