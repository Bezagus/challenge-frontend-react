import { X, Sparkles } from 'lucide-react';
import { useCharacterModal } from '@components/modals/addCharacterModal/useAddCharacterModal.js';

export default function AddCharacterModal({ onSubmit, onClose }) {
  const presenter = useCharacterModal({ onSubmit, onClose });

  return (
    <>
      <div className="modal-overlay" onClick={presenter.handleBackdropClick} />

      <div className="modal-content">
        <div className="bg-card border border-border rounded-2xl shadow-2xl p-4 sm:p-8">
          <div className="flex items-center justify-between mb-4 sm:mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold">
                Add New Character
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-colors duration-200"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form
            onSubmit={presenter.handleSubmit}
            className="space-y-4 sm:space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  {...presenter.register('name')}
                  className="w-full px-4 py-2.5 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Character name"
                />
                {presenter.errors.name && (
                  <p className="text-destructive text-xs mt-1">
                    {presenter.errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Height (cm)
                </label>
                <input
                  type="text"
                  {...presenter.register('height')}
                  className="w-full px-4 py-2.5 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="172"
                />
                {presenter.errors.height && (
                  <p className="text-destructive text-xs mt-1">
                    {presenter.errors.height.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Mass (kg)
                </label>
                <input
                  type="text"
                  {...presenter.register('mass')}
                  className="w-full px-4 py-2.5 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="77"
                />
                {presenter.errors.mass && (
                  <p className="text-destructive text-xs mt-1">
                    {presenter.errors.mass.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Hair Color
                </label>
                <input
                  type="text"
                  {...presenter.register('hair_color')}
                  className="w-full px-4 py-2.5 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="blond"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Skin Color
                </label>
                <input
                  type="text"
                  {...presenter.register('skin_color')}
                  className="w-full px-4 py-2.5 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="fair"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Eye Color
                </label>
                <input
                  type="text"
                  {...presenter.register('eye_color')}
                  className="w-full px-4 py-2.5 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="blue"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Birth Year
                </label>
                <input
                  type="text"
                  {...presenter.register('birth_year')}
                  className="w-full px-4 py-2.5 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="19BBY"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Gender
                </label>
                <select
                  {...presenter.register('gender')}
                  className="w-full px-4 py-2.5 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-border">
              <button
                type="submit"
                disabled={!presenter.isValid}
                className="flex-1 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                Add Character
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-3 border border-input rounded-lg font-semibold hover:bg-muted transition-all duration-200"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
