import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { toggleDarkMode } from '@store/slices/themeSlice.js';

export const useDarkMode = () => {
  const darkMode = useSelector(state => state.theme.darkMode);
  const dispatch = useDispatch();

  const handleToggleDarkMode = useCallback(() => {
    dispatch(toggleDarkMode());
  }, [dispatch]);

  return { darkMode, handleToggleDarkMode };
};
