import { Module } from '../data/modules';
import { ModuleCard } from './ModuleCard';

interface ModuleGridProps {
  modules: Module[];
}

export function ModuleGrid({ modules }: ModuleGridProps) {
  return (
    <section className="px-4 pb-16 sm:px-6">
      <div className="page-container">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>

        {modules.length === 0 && (
          <div className="rounded-2xl border border-dashed border-gray-200 bg-white py-16 text-center">
            <p className="text-lg font-medium text-gray-700">No se encontraron módulos</p>
            <p className="mt-1 text-sm text-gray-500">
              Intenta con otros filtros o términos de búsqueda.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
