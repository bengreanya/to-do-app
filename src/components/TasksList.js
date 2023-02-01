import React from 'react';
import { useContext } from 'react';
import { TasksContext } from '../context/TasksContext.js';

export default function TasksList() {
  const { tasks } = useContext(TasksContext);
  return (
    <>
      <h2>Tasks to do</h2>
      {tasks.map((task) => (
        <ul key={task.id}>
          <li>{task.description}</li>
        </ul>
      ))}
    </>
  );
}
