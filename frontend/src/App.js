// import './App.css';
import {useState } from 'react';
import AdminBookRoute from './components/navigation/AdminBookRoute';
import { LoggedInUserContext } from './LoggedInUserContext';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  return (
    <div role="application" className="App">
      <LoggedInUserContext.Provider value={{ loggedInUser, setLoggedInUser }} >
        <AdminBookRoute />
      </LoggedInUserContext.Provider>
    </div>
  );
}

export default App;
