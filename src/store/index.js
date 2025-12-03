import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import peopleReducer from './slices/peopleSlice';
import { localStorageMiddleware } from './middleware/localStorageMiddleware';

/**
 * Configure Redux store with custom middleware
 *
 * The localStorageMiddleware handles persistence as a side effect,
 * keeping reducers pure and following Redux best practices.
 */
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    people: peopleReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
