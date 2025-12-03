import { useMemo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePerson, addPerson } from '@store/slices/peopleSlice.js';
import { fetchPeople } from '@api/people.service.js';

export const useHomeScreen = () => {
  const dispatch = useDispatch();
  const { results, loading, error } = useSelector(state => state.people);
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [characterToDelete, setCharacterToDelete] = useState(null);

  useEffect(() => {
    if (results.length === 0 && !loading) {
      dispatch(fetchPeople());
    }
  }, [dispatch, results.length, loading]);

  const characters = useMemo(() => {
    return results.map((char, index) => ({
      ...char,
      id: char.url || char.id || `api-${index}`,
    }));
  }, [results]);

  const filteredCharacters = useMemo(() => {
    return characters.filter(char =>
      char.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [characters, searchQuery]);

  const handleAddCharacter = newCharacter => {
    const character = {
      ...newCharacter,
      id: Date.now().toString(),
    };
    dispatch(addPerson(character));
    setShowModal(false);
  };

  const handleDeleteCharacter = character => {
    setCharacterToDelete(character);
  };

  const confirmDelete = () => {
    if (characterToDelete) {
      dispatch(deletePerson(characterToDelete.id));
      setCharacterToDelete(null);
    }
  };

  const cancelDelete = () => {
    setCharacterToDelete(null);
  };

  return {
    characters,
    searchQuery,
    setSearchQuery,
    showModal,
    filteredCharacters,
    handleAddCharacter,
    handleDeleteCharacter,
    setShowModal,
    loading,
    error,
    characterToDelete,
    confirmDelete,
    cancelDelete,
  };
};
