const { useState, createContext } = require('react');
// const { getUser } = require('../services/auth');

const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  //   const currentUser = getUser();
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
export { UserContext, UserProvider };
