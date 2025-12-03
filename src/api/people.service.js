import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPeople = createAsyncThunk('people/fetchPeople', async () => {
  const response = await fetch('https://swapi.dev/api/people');
  return await response.json();
});
