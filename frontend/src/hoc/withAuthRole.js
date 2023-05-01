// Import React and useContext hook from React
import React, { useContext } from 'react'

// Import LoggedInUserContext from '../LoggedInUserContext'
import { LoggedInUserContext } from '../LoggedInUserContext';


// Define withAuthRole higher order function with ProtectedComponent and role as parameters
const withAuthRole = (ProtectedComponent, role = 'user') => {
    
    return function (props) {
        const {loggedInUser} = useContext(LoggedInUserContext);

        if (loggedInUser === null || typeof loggedInUser !== 'object' || loggedInUser.role !== role) {
            return <div>Page not found</div>;
        }

        return <ProtectedComponent {...props} />;
    }
}

export default withAuthRole;
