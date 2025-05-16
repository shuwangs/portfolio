import React from 'react'
import { createContext, useContext, useReducer } from 'react';

// Prepares the data layer
export const StateContext = createContext();

// Wrap our app and provide the Data Layer
// This is the higher order component
// It takes in the reducer and initial state
// and returns a function that takes in the children
// and returns the StateContext.Provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
