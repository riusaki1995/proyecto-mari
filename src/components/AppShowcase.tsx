import { useState } from 'react';
import { appTabs, getOverlayById, screenshots, type AppTabId } from '../data/content';
import { OverlayIframePreview } from './OverlayIframePreview';

function asset(path: string) {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${path.replace(/^\//, '')}`;
}

const tabOverlayId: Partial<Record<AppTabId, string>> = {
  overlays: 'habibi',
  batallas: 'batallaregalos',
  alertas: 'alertafollow',
};

export function AppShowcase() {
  const [tab, setTab] = useState<AppTabId>('juegos');
  const overlay = tabOverlayId[tab] ? getOverlayById(tabOverlayId[tab]!) : undefined;

  return (
    <section id="app" className="section-pad relative">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <span className="text-live-cyan font-display text-sm font-semibold uppercase tracking-[0.2em]">Vista previa</span>
          <h2 className="section-title mt-3">
            El panel que <span className="neon-text">controla todo</span>
          </h2>
          <p className="section-sub mx-auto">
            Pestañas como en la app. Los overlays cargan en vivo con el mismo embed del panel.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3 relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-live-cyan/30 via-live-purple/20 to-live-pink/30 blur-sm" />
            <div className="relative glass-card rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-live-bg/90 border-b border-live-border/50">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-white/35">Livecoins — {appTabs.find((t) => t.id === tab)?.label}</span>
              </div>

              <div className="flex border-b border-live-border/40 overflow-x-auto">
                {appTabs.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTab(t.id)}
                    className={`flex items-center gap-1.5 px-4 py-3 text-sm font-semibold whitespace-nowrap transition-all border-b-2 ${
                      tab === t.id
                        ? 'border-live-cyan text-live-cyan bg-live-cyan/5'
                        : 'border-transparent text-white/45 hover:text-white/70'
                    }`}
                  >
                    <span>{t.icon}</span>
                    {t.label}
                  </button>
                ))}
              </div>

              <div className="bg-live-panel/40 p-4 min-h-[360px]">
                {overlay ? (
                  <OverlayIframePreview
                    embedPath={overlay.embedPath}
                    urlParams={overlay.urlParams}
                    testMessage={overlay.testMessage}
                    testLoopMs={overlay.testLoopMs}
                    title={overlay.name}
                    height={400}
                  />
                ) : (
                  <img
                    src={asset(screenshots.login)}
                    alt="Panel Livecoins"
                    className="w-full rounded-xl border border-live-border/30 object-contain max-h-[400px] mx-auto bg-black"
                  />
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {[
              { step: '01', title: 'Descarga e instala', desc: 'Obtén Livecoins Setup desde el botón de descarga oficial (Windows).' },
              { step: '02', title: 'Configura acciones', desc: 'Elige qué regalo dispara qué en cada juego u overlay.' },
              { step: '03', title: 'Añade overlays a OBS', desc: 'Copia la URL y pégala en OBS o TikTok Studio (3:4).' },
              { step: '04', title: '¡A streamer!', desc: 'Tu chat controla el show. Más interacción = más retención y donaciones.' },
            ].map((item) => (
              <div key={item.step} className="glass-card p-5 flex gap-4 hover:border-live-cyan/30 transition-colors">
                <span className="font-display text-2xl font-black text-live-cyan/40">{item.step}</span>
                <div>
                  <h3 className="font-display font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-white/55 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
