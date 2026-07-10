import { APP_VERSION, DOWNLOAD_SIZE, DOWNLOAD_URL, PANEL_URL, downloadSteps } from '../data/content';
import { Download, Monitor, Shield } from 'lucide-react';

export function DownloadSection() {
  return (
    <section id="descargar" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-live-purple/5 via-transparent to-live-cyan/5" />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <span className="text-live-gold font-display text-sm font-semibold uppercase tracking-[0.2em]">
              Descarga oficial
            </span>
            <h2 className="section-title mt-3">
              App PC <span className="neon-text">v{APP_VERSION}</span>
            </h2>
            <p className="section-sub">
              El instalador incluye el panel completo, pestañas de Juegos, Overlays, Webhook y ejecución local de
              minijuegos. Solo Windows.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href={DOWNLOAD_URL} className="btn-glow text-base px-8 py-4 !from-live-gold !to-amber-400 !text-live-bg hover:!shadow-glow-gold">
                <Download size={20} />
                Descargar para Windows
              </a>
              <a href={PANEL_URL} target="_blank" rel="noopener noreferrer" className="btn-outline text-base px-6 py-4">
                Versión web
              </a>
            </div>

            <p className="mt-4 text-sm text-white/40">
              {DOWNLOAD_SIZE} · Versión {APP_VERSION} · Windows 10/11
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              {[
                { icon: Monitor, label: 'Panel + juegos locales' },
                { icon: Shield, label: 'Instalador firmado' },
                { icon: Download, label: 'Actualizaciones en GitHub' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="glass-card p-4 flex items-center gap-3 text-sm text-white/65">
                  <Icon size={18} className="text-live-cyan shrink-0" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 sm:p-8 border-live-gold/20">
            <h3 className="font-display text-xl font-bold text-live-gold mb-6">Instalación en 4 pasos</h3>
            <ol className="space-y-5">
              {downloadSteps.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-live-gold/15 font-display font-bold text-live-gold border border-live-gold/25">
                    {i + 1}
                  </span>
                  <span className="pt-1.5 text-white/75">{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 rounded-xl border border-live-border/50 bg-live-bg/60 p-4 text-sm text-white/50">
              ¿Solo quieres probar sin instalar? Usa el{' '}
              <a href="https://livecoins.onrender.com" className="text-live-cyan hover:underline" target="_blank" rel="noopener noreferrer">
                panel web
              </a>{' '}
              (funciones limitadas sin la app de escritorio).
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
