import { Search } from 'lucide-react';
import {
  CATEGORIES,
  CATEGORY_LABELS,
  Category,
  LEVEL_LABELS,
  LEVELS,
  Level,
} from '../data/modules';

interface FiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  selectedLevel: Level | 'todos';
  onLevelChange: (level: Level | 'todos') => void;
  selectedCategory: Category | 'todos';
  onCategoryChange: (category: Category | 'todos') => void;
  resultCount: number;
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 text-[13px] font-medium transition sm:px-3.5 sm:text-sm ${
        active
          ? 'bg-gradient-to-r from-violet-500 via-fuchsia-500 to-blue-500 text-white shadow-sm'
          : 'border border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'
      }`}
    >
      {children}
    </button>
  );
}

export function Filters({
  search,
  onSearchChange,
  selectedLevel,
  onLevelChange,
  selectedCategory,
  onCategoryChange,
  resultCount,
}: FiltersProps) {
  return (
    <section className="px-4 pb-2 sm:px-6">
      <div className="page-container space-y-2.5">
        <div className="flex items-center gap-3">
          <div className="relative min-w-[200px] flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Buscar módulos..."
              className="w-full rounded-full border border-gray-200 bg-white py-2.5 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-violet-300 focus:ring-2 focus:ring-violet-100"
            />
          </div>

          <div className="flex shrink-0 items-center gap-1.5 overflow-x-auto sm:gap-2 md:overflow-visible">
            <FilterPill active={selectedLevel === 'todos'} onClick={() => onLevelChange('todos')}>
              Todos
            </FilterPill>
            {LEVELS.map((level) => (
              <FilterPill
                key={level}
                active={selectedLevel === level}
                onClick={() => onLevelChange(level)}
              >
                {LEVEL_LABELS[level]}
              </FilterPill>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto sm:gap-2 md:overflow-visible">
          <FilterPill
            active={selectedCategory === 'todos'}
            onClick={() => onCategoryChange('todos')}
          >
            Todos
          </FilterPill>
          {CATEGORIES.map((category) => (
            <FilterPill
              key={category}
              active={selectedCategory === category}
              onClick={() => onCategoryChange(category)}
            >
              {CATEGORY_LABELS[category]}
            </FilterPill>
          ))}
        </div>

        <p className="pt-1 text-sm text-gray-500">
          <span className="font-semibold text-gray-700">{resultCount}</span>{' '}
          {resultCount === 1 ? 'módulo encontrado' : 'módulos encontrados'}
        </p>
      </div>
    </section>
  );
}
