import { useContext } from 'react';
import { getUser } from '../services/auth.js';

const { useState, createContext } = require('react');
// const { getUser } = require('../services/auth');

const UserContext = createContext();
const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser);
  //   const currentUser = getUser();
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
const useUser = () => {
  const data = useContext(UserContext);
  if (!data) {
    throw new Error('useUser error!');
  }
  return data;
};
export { UserProvider, useUser };
