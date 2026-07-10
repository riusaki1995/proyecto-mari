import { PANEL_URL } from '../data/content';

export function Footer() {
  return (
    <footer className="border-t border-live-border/40 bg-live-bg/80">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-live-cyan to-live-purple font-display font-black text-live-bg">
              L
            </span>
            <span className="font-display font-bold tracking-widest">
              LIVE<span className="text-live-cyan">COINS</span>
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-white/50">
            <a href="#inicio" className="hover:text-live-cyan transition-colors">Inicio</a>
            <a href="#juegos" className="hover:text-live-cyan transition-colors">Juegos</a>
            <a href="#overlays" className="hover:text-live-cyan transition-colors">Overlays</a>
            <a href="#planes" className="hover:text-live-cyan transition-colors">Planes</a>
            <a href={PANEL_URL} target="_blank" rel="noopener noreferrer" className="hover:text-live-cyan transition-colors">
              Panel web
            </a>
          </nav>

          <p className="text-xs text-white/30 text-center md:text-right">
            © {new Date().getFullYear()} Livecoins. TikTok LIVE interactivo.
          </p>
        </div>
      </div>
    </footer>
  );
}
