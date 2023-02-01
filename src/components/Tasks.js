import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../context/UserContext.js';
import TaskForm from './TaskForm.js';
import TasksList from './TasksList.js';

export default function Tasks() {
  const { user } = useUser();
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  return (
    <div>
      <TasksList />
      <TaskForm />
    </div>
  );
}
