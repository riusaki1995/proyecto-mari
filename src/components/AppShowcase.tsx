import { useState } from 'react';
import { appTabs, type AppTabId } from '../data/content';

function TabContent({ tab }: { tab: AppTabId }) {
  if (tab === 'juegos') {
    return (
      <div className="space-y-3">
        <div className="text-xs text-white/40 uppercase tracking-widest mb-2">Catálogo de juegos</div>
        {[
          { icon: '🍄', name: 'Mario SMBX2', action: 'Goomba × cantidad', gift: '🌹 Rosa' },
          { icon: '🌻', name: 'Plants vs Zombies', action: 'Spawn zombie', gift: '💎 Diamante' },
          { icon: '⛏️', name: 'Minecraft Java', action: 'say {nickname} envió TNT', gift: '🦁 León' },
          { icon: '🌀', name: 'Mari0', action: 'Power-up Mushroom', gift: '☕ Café' },
        ].map((row) => (
          <div key={row.name} className="flex items-center gap-3 rounded-lg bg-live-bg/60 border border-live-border/40 px-3 py-2.5 hover:border-live-cyan/30 transition-colors">
            <span className="text-xl">{row.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold truncate">{row.name}</div>
              <div className="text-xs text-white/45 truncate">{row.action}</div>
            </div>
            <span className="text-xs px-2 py-1 rounded bg-live-purple/20 text-live-purple shrink-0">{row.gift}</span>
            <button type="button" className="text-xs px-2 py-1 rounded border border-live-cyan/30 text-live-cyan hover:bg-live-cyan/10 shrink-0">
              Probar
            </button>
          </div>
        ))}
      </div>
    );
  }

  if (tab === 'overlays') {
    return (
      <div className="grid grid-cols-2 gap-2">
        {[
          { name: 'Join Live', color: 'from-pink-500/30' },
          { name: 'Contador wins', color: 'from-yellow-500/30' },
          { name: 'Batalla regalos', color: 'from-purple-500/30' },
          { name: 'Meta monedas', color: 'from-cyan-500/30' },
        ].map((ov) => (
          <div key={ov.name} className={`rounded-lg bg-gradient-to-br ${ov.color} to-live-bg border border-live-border/40 p-3 aspect-[4/3] flex flex-col justify-end`}>
            <div className="text-xs font-semibold">{ov.name}</div>
            <div className="text-[10px] text-white/40 mt-0.5 font-mono truncate">/overlay.html?...</div>
            <button type="button" className="mt-2 text-[10px] text-live-cyan hover:underline text-left">Copiar URL</button>
          </div>
        ))}
      </div>
    );
  }

  if (tab === 'alertas') {
    return (
      <div className="space-y-2">
        {[
          { gift: '🌹 Rosa', sound: 'alert-pop.mp3', img: true },
          { gift: '🦁 León', sound: 'lion-roar.mp3', img: true },
          { gift: '💎 Diamante', sound: 'epic-drop.mp3', img: false },
        ].map((a) => (
          <div key={a.gift} className="flex items-center gap-3 rounded-lg bg-live-bg/60 border border-live-border/40 px-3 py-2">
            <span className="text-lg">{a.gift}</span>
            <div className="flex-1 text-xs text-white/50 font-mono">{a.sound}</div>
            {a.img && <span className="text-[10px] px-1.5 py-0.5 rounded bg-live-cyan/10 text-live-cyan">IMG</span>}
            <span className="h-2 w-2 rounded-full bg-green-400" title="Activo" />
          </div>
        ))}
        <div className="rounded-lg border border-dashed border-live-border/50 p-4 text-center text-xs text-white/35">
          + Añadir alerta de sonido
        </div>
      </div>
    );
  }

  if (tab === 'batallas') {
    return (
      <div className="space-y-4">
        <div className="rounded-xl bg-live-bg/80 border border-live-border/40 p-4">
          <div className="text-xs text-white/40 mb-3">Batalla de regalos — EN VIVO</div>
          <div className="flex h-8 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-live-cyan to-live-cyan/60 flex items-center justify-end pr-2 text-xs font-bold" style={{ width: '62%' }}>
              62%
            </div>
            <div className="bg-gradient-to-l from-live-pink to-live-pink/60 flex items-center pl-2 text-xs font-bold flex-1">
              38%
            </div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-white/50">
            <span>🔵 Equipo A</span>
            <span>🔴 Equipo B</span>
          </div>
        </div>
        <div className="text-xs text-white/40">3 batallas configuradas · TODAS activas</div>
      </div>
    );
  }

  return (
    <div className="space-y-3 font-mono text-xs">
      <div className="rounded-lg bg-live-bg border border-live-border/50 p-3 text-live-cyan/80 break-all">
        POST /webhook
        <br />
        <span className="text-white/40">?gift=rosa&quantity=10&nickname=viewer</span>
      </div>
      <div className="text-white/40">Último evento: hace 2s — 200 OK ✅</div>
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded bg-live-card p-2 text-center text-white/50">TikFinity</div>
        <div className="rounded bg-live-card p-2 text-center text-live-cyan border border-live-cyan/30">Livecoins</div>
      </div>
    </div>
  );
}

export function AppShowcase() {
  const [tab, setTab] = useState<AppTabId>('juegos');

  return (
    <section id="app" className="section-pad relative">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <span className="text-live-cyan font-display text-sm font-semibold uppercase tracking-[0.2em]">Vista previa</span>
          <h2 className="section-title mt-3">
            El panel que <span className="neon-text">controla todo</span>
          </h2>
          <p className="section-sub mx-auto">
            Configura juegos, overlays y alertas desde un solo lugar. App de escritorio para juegos locales o panel web en la nube.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3 relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-live-cyan/30 via-live-purple/20 to-live-pink/30 blur-sm" />
            <div className="relative glass-card rounded-2xl overflow-hidden scanline">
              <div className="flex items-center gap-2 px-4 py-3 bg-live-bg/90 border-b border-live-border/50">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-white/35">Livecoins Setup 1.6.x</span>
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

              <div className="p-5 min-h-[280px] bg-live-panel/50">
                <TabContent tab={tab} />
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {[
              { step: '01', title: 'Conecta TikTok LIVE', desc: 'Enlaza tu live con el panel. Los regalos llegan al instante.' },
              { step: '02', title: 'Configura acciones', desc: 'Elige qué regalo dispara qué en cada juego u overlay.' },
              { step: '03', title: 'Añade overlays a OBS', desc: 'Copia la URL y pégala en OBS o TikTok Studio (3:4).' },
              { step: '04', title: '¡A streamer!', desc: 'Tu chat controla el show. Más interacción = más retención.' },
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
