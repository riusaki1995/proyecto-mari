import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight, Clock } from 'lucide-react';
import { LEVEL_LABELS, Module } from '../data/modules';
import { levelStyles } from '../utils/levelStyles';

interface ModuleCardProps {
  module: Module;
}

export function ModuleCard({ module }: ModuleCardProps) {
  const styles = levelStyles[module.level];

  return (
    <Link to={`/modulo/${module.id}`} className="block">
      <article className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-card-hover">
        <div className={`h-1 bg-gradient-to-r ${module.gradient}`} />

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="mb-4 flex items-start justify-between gap-3">
            <span className="text-2xl" role="img" aria-hidden="true">
              {module.icon}
            </span>
            <span
              className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${styles.bg} ${styles.text} ${styles.border}`}
            >
              {LEVEL_LABELS[module.level]}
            </span>
          </div>

          <h3 className="mb-2 text-base font-bold leading-snug text-gray-900 group-hover:text-elarbol-800">
            {module.title}
          </h3>

          <p className="mb-5 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-500">
            {module.description}
          </p>

          <div className="flex items-center justify-between border-t border-gray-100 pt-4">
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {module.duration} min
              </span>
              <span className="flex items-center gap-1.5">
                <BookOpen className="h-3.5 w-3.5" />
                {module.sections} secciones
              </span>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-300 transition group-hover:translate-x-0.5 group-hover:text-elarbol-600" />
          </div>
        </div>
      </article>
    </Link>
  );
}
