import { GraduationCap, TreeDeciduous } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const { pathname } = useLocation();
  const isModulePage = pathname.startsWith('/modulo/');
  const containerClass = isModulePage ? 'module-detail-container' : 'page-container';

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className={`${containerClass} flex items-center justify-between gap-3 py-3 sm:py-4`}>
        <Link to="/" className="flex min-w-0 items-center gap-2 sm:gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-elarbol-600 to-emerald-400 shadow-sm sm:h-9 sm:w-9">
            <TreeDeciduous className="h-4 w-4 text-white sm:h-5 sm:w-5" strokeWidth={2.5} />
          </div>
          <div className="flex min-w-0 items-center gap-1 sm:gap-1.5">
            <span className="truncate text-xs font-bold tracking-tight text-gray-900 sm:text-base">
              AGENCIA ELÁRBOL
            </span>
            <span className="hidden text-gray-300 sm:inline">/</span>
            <span className="hidden items-center gap-1 text-sm font-semibold text-elarbol-700 sm:flex">
              <GraduationCap className="h-4 w-4" />
              ACADEMY
            </span>
          </div>
        </Link>

        <a
          href="#postularse"
          className="shrink-0 rounded-full bg-gradient-to-r from-elarbol-700 via-emerald-600 to-teal-500 px-3 py-2 text-xs font-semibold text-white shadow-md shadow-emerald-500/20 transition hover:shadow-lg hover:shadow-emerald-500/30 hover:brightness-105 sm:px-5 sm:py-2.5 sm:text-sm"
        >
          <span className="sm:hidden">Postularse</span>
          <span className="hidden sm:inline">Postularse ahora</span>
        </a>
      </div>
    </header>
  );
}
