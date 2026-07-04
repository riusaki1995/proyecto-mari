import { TreeDeciduous } from 'lucide-react';

export function Footer() {
  return (
    <footer id="postularse" className="border-t border-gray-100 bg-white">
      <div className="page-container flex flex-col items-center gap-4 px-4 py-10 text-center sm:px-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-elarbol-600 to-emerald-400">
          <TreeDeciduous className="h-6 w-6 text-white" />
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Agencia ELÁRBOL. Todos los derechos reservados.
        </p>
        <a
          href="mailto:info@agenciaelarbol.com"
          className="rounded-full bg-gradient-to-r from-elarbol-700 via-emerald-600 to-teal-500 px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-105"
        >
          Postularse ahora
        </a>
      </div>
    </footer>
  );
}
