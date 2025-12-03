export const STORAGE_KEY = 'people_data';

const PERSISTABLE_ACTIONS = [
  'people/addPerson',
  'people/deletePerson',
  'people/fetchPeople/fulfilled',
];

const saveToLocalStorage = peopleState => {
  try {
    const serialized = JSON.stringify({
      results: peopleState.results,
      count: peopleState.count,
      next: peopleState.next,
      previous: peopleState.previous,
    });
    localStorage.setItem(STORAGE_KEY, serialized);
  } catch (err) {
    console.error('Error saving to localStorage:', err);
  }
};

export const localStorageMiddleware = store => next => action => {
  const result = next(action);

  if (PERSISTABLE_ACTIONS.includes(action.type)) {
    const state = store.getState();
    saveToLocalStorage(state.people);
  }

  return result;
};
