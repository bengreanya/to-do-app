import { checkError, client } from './client.js';

export async function getTasks() {
  const response = await client.from('to-do').select();
  return checkError(response);
}
export async function createTask(description) {
  const response = await client.from('to-do').insert({ description }).single();
  return checkError(response);
}
