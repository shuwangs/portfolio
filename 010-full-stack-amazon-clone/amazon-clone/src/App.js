import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './Login';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider.js';
import { auth } from './firebase';  

function AppWrapper() {
  const [{}, dispatch] = useStateValue();


  useEffect(() => {
    // This effect runs once when the component mounts
    auth.onAuthStateChanged((authUser) => {

      console.log("The User is >>>", authUser);
      if (authUser) {
        // User is signed in, you can set user state or perform other actions
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
        console.log('User is signed in:', authUser);
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
        // User is signed out
        console.log('The user is signed out');
      }
    });
  }, []);

  return (
    <Router>
      <App />
    </Router>
  );
}

function App() {
  const location = useLocation();

  return (
    <div className="app">
      {location.pathname !== "/login" && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default AppWrapper;


