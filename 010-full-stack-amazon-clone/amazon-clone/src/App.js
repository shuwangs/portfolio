import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import Payment from './Payment.js';
import Orders from './Orders.js';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './Login';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider.js';
import { auth } from './firebase';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const promise = loadStripe("pk_test_51RTCciPfMc66jl24uZRajnOZgOfv9r2PcQDT4DgFeTWs73iSMaszcGyqUFud3NlNfKB3KT4Y02hpV60Tk0WAIvwO00vgiIL3op");


function AppWrapper() {
  const [{ }, dispatch] = useStateValue();


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
        <Route path = "/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={
          <Elements stripe={promise}>
            <Payment />
          </Elements>}

        />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default AppWrapper;


