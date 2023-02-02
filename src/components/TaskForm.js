import React, { useContext, useState } from 'react';
import { TasksContext } from '../context/TasksContext.js';

export default function TaskForm() {
  const { setTasks } = useContext(TasksContext);
  const handleNewTask = async () => {};

  return <div>TaskForm</div>;
}
