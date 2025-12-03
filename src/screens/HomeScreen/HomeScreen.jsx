import { Search, Plus, AlertTriangle } from 'lucide-react';
import CharacterCard from '@components/cards/CharacterCard.jsx';
import ConfirmDeleteModal from '@components/modals/ConfirmDeleteModal.jsx';
import Loading from '@components/Loading.jsx';
import PiLogo from '@assets/pi_logo.png';
import DarkMode from '@components/darkMode/DarkMode.jsx';
import AddCharacterModal from '@components/modals/addCharacterModal/AddCharacterModal.jsx';
import { useHomeScreen } from '@screens/HomeScreen/useHomeScreen.js';

const HomeScreen = () => {
  const presenter = useHomeScreen();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <header className="border-b border-border bg-card sticky top-0 z-40 backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <img
                src={PiLogo}
                alt="Pi Logo"
                className="w-12 h-12 rounded-2xl object-cover"
              />
              <div>
                <h1 className="text-3xl font-bold text-balance">
                  Challenge React
                </h1>
                <p className="text-sm text-muted-foreground">
                  Pi Data Strategy & Consulting
                </p>
              </div>
            </div>
            <DarkMode />
          </div>

          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
            <input
              type="text"
              placeholder="Search characters..."
              value={presenter.searchQuery}
              onChange={e => presenter.setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-foreground">
              Characters
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {presenter.filteredCharacters.length} results
            </p>
          </div>
          <button
            onClick={() => presenter.setShowModal(true)}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold shadow-md"
          >
            <Plus className="w-5 h-5" />
            Add Character
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {presenter.loading ? (
            <Loading />
          ) : presenter.error ? (
            <div className="col-span-full flex flex-col items-center justify-center py-16">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="w-8 h-8 text-destructive" />
              </div>
              <p className="text-destructive text-lg font-medium text-center">
                Error: {presenter.error}
              </p>
            </div>
          ) : presenter.filteredCharacters.length > 0 ? (
            presenter.filteredCharacters.map(character => (
              <CharacterCard
                key={character.id}
                character={character}
                onDelete={presenter.handleDeleteCharacter}
              />
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-16">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground text-lg font-medium text-center">
                {presenter.searchQuery
                  ? 'No characters found'
                  : 'No characters available'}
              </p>
            </div>
          )}
        </div>
      </main>

      {presenter.showModal && (
        <AddCharacterModal
          onSubmit={presenter.handleAddCharacter}
          onClose={() => presenter.setShowModal(false)}
        />
      )}

      {presenter.characterToDelete && (
        <ConfirmDeleteModal
          characterName={presenter.characterToDelete.name}
          onConfirm={presenter.confirmDelete}
          onClose={presenter.cancelDelete}
        />
      )}
    </div>
  );
};

export default HomeScreen;
