import React from 'react';
import { useUser } from '../context/UserContext.js';
import { signOut } from '../services/auth.js';

export default function Header() {
  const { user, setUser } = useUser();
  const handleLogout = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <>
      {user && (
        <nav>
          <p>Hello {user.email}</p>
          <button onClick={handleLogout}>Sign Out</button>
        </nav>
      )}
    </>
  );
}
