import React from 'react';
import { useState } from 'react';
import { NavLink, Redirect, useParams } from 'react-router-dom';
import { useUser } from '../context/UserContext.js';
import { authUser } from '../services/auth.js';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { type } = useParams();
  const { user, setUser } = useUser();
  if (user) {
    return <Redirect to="/tasks" />;
  }
  const submitAuth = async (e) => {
    e.preventDefault();
    try {
      const newUser = await authUser(email, password, type);
      setUser(newUser);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <div className="auth-container">
        <NavLink to="/auth/sign-in">Sign In</NavLink>
        <NavLink to="/auth/sign-up">Sign Up</NavLink>
      </div>
      <div className="panel">
        <form onSubmit={submitAuth}>
          <label>Email</label>
          <input
            type="email"
            placeholder="name@place.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label>Password</label>
          <input
            type="password"
            placeholder="yoursecretpassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <div className="button">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
