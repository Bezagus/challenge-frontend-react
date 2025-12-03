import { AlertTriangle, X } from 'lucide-react';

export default function ConfirmDeleteModal({
  characterName,
  onConfirm,
  onClose,
}) {
  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <div className="modal-overlay" onClick={handleBackdropClick} />

      <div className="modal-content">
        <div className="bg-card border border-border rounded-2xl shadow-2xl p-8 max-w-md">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-destructive/10 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <h2 className="text-2xl font-bold">Confirm Delete</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-colors duration-200"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mb-6">
            <p className="text-muted-foreground">
              Are you sure you want to delete{' '}
              <span className="font-semibold text-foreground">
                {characterName}
              </span>
              ? This action cannot be undone.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onConfirm}
              className="flex-1 px-4 py-3 bg-destructive text-destructive-foreground rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Delete
            </button>
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-input rounded-lg font-semibold hover:bg-muted transition-all duration-200"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
