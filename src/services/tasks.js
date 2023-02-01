import { checkError, client } from './client.js';

export async function getTasks() {
  const response = await client.from('to-do').select();
  return checkError(response);
}
