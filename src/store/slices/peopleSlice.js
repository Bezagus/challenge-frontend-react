import { createSlice } from '@reduxjs/toolkit';
import { fetchPeople } from '@api/people.service.js';
import { STORAGE_KEY } from '@store/middleware/localStorageMiddleware.js';

const loadFromLocalStorage = () => {
  try {
    const serialized = localStorage.getItem(STORAGE_KEY);
    if (serialized === null) return null;
    return JSON.parse(serialized);
  } catch (err) {
    console.error('Error loading from localStorage:', err);
    return null;
  }
};

const persistedState = loadFromLocalStorage();

const initialState = {
  results: persistedState?.results || [],
  count: persistedState?.count || 0,
  next: persistedState?.next || null,
  previous: persistedState?.previous || null,
  loading: false,
  error: null,
};

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    deletePerson: (state, action) => {
      state.results = state.results.filter(
        person => person.url !== action.payload && person.id !== action.payload
      );
      state.count = state.results.length;
    },
    addPerson: (state, action) => {
      state.results.push(action.payload);
      state.count = state.results.length;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPeople.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPeople.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload.results;
        state.count = action.payload.count;
        state.next = action.payload.next;
        state.previous = action.payload.previous;
      })
      .addCase(fetchPeople.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { deletePerson, addPerson } = peopleSlice.actions;
export default peopleSlice.reducer;
