import { Trash2 } from 'lucide-react';
import { capitalizeFirst } from '@utils/stringUtils.js';

export default function CharacterCard({ character, onDelete }) {
  return (
    <div className="p-6 bg-card border border-border rounded-2xl card-hover group overflow-hidden relative">
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-300" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-2xl font-bold text-balance pr-2">
            {character.name}
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => onDelete(character)}
              className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-all duration-200"
              aria-label="Delete character"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <div className="p-3 bg-muted/50 rounded-lg">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Hair Color
            </p>
            <p className="font-medium text-foreground mt-1">
              {character.hair_color
                ? capitalizeFirst(character.hair_color)
                : '--'}
            </p>
          </div>

          <div className="p-3 bg-muted/50 rounded-lg">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Eye Color
            </p>
            <p className="font-medium text-foreground mt-1">
              {character.eye_color
                ? capitalizeFirst(character.eye_color)
                : '--'}
            </p>
          </div>

          <div className="p-3 bg-muted/50 rounded-lg">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Height
            </p>
            <p className="font-medium text-foreground mt-1">
              {character.height ? `${character.height} cm` : '--'}
            </p>
          </div>

          <div className="p-3 bg-muted/50 rounded-lg">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Gender
            </p>
            <p className="font-medium text-foreground mt-1">
              {capitalizeFirst(character.gender)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
