import type { OverlayItem } from '../data/content';
import { overlays } from '../data/content';

function OverlayMock({ item }: { item: OverlayItem }) {
  const base = 'absolute inset-0 flex flex-col items-center justify-center p-3';

  if (item.preview === 'battle') {
    return (
      <div className={base} style={{ background: `linear-gradient(180deg, ${item.accent}22, transparent)` }}>
        <div className="w-full flex h-6 rounded-full overflow-hidden border border-white/10">
          <div className="bg-cyan-400/80" style={{ width: '55%' }} />
          <div className="bg-pink-500/80 flex-1" />
        </div>
        <div className="mt-2 text-[10px] font-display font-bold tracking-wider">VS</div>
      </div>
    );
  }

  if (item.preview === 'counter') {
    return (
      <div className={base}>
        <div className="font-display text-3xl font-black" style={{ color: item.accent, textShadow: `0 0 20px ${item.accent}` }}>
          127
        </div>
        <div className="text-[10px] uppercase tracking-widest text-white/50 mt-1">WINS</div>
      </div>
    );
  }

  if (item.preview === 'join') {
    return (
      <div className={base}>
        <div className="text-2xl animate-pulse">🔴</div>
        <div className="font-display text-xs font-bold mt-2" style={{ color: item.accent }}>
          JOIN LIVE
        </div>
        <div className="text-[10px] text-white/40 mt-1">@viewer entró</div>
      </div>
    );
  }

  if (item.preview === 'meta') {
    return (
      <div className={base}>
        <div className="w-full px-2">
          <div className="text-[10px] text-white/50 mb-1">Meta 10,000 🪙</div>
          <div className="h-3 rounded-full bg-black/40 overflow-hidden">
            <div className="h-full rounded-full" style={{ width: '73%', background: item.accent }} />
          </div>
          <div className="text-right text-[10px] mt-1 font-bold" style={{ color: item.accent }}>7,340</div>
        </div>
      </div>
    );
  }

  if (item.preview === 'rank') {
    return (
      <div className={base + ' items-stretch justify-start pt-4 gap-1'}>
        {['🥇 @top1', '🥈 @top2', '🥉 @top3'].map((r, i) => (
          <div key={r} className="text-[10px] px-2 py-1 rounded bg-black/30 text-white/70" style={{ opacity: 1 - i * 0.2 }}>
            {r}
          </div>
        ))}
      </div>
    );
  }

  if (item.preview === 'timer') {
    return (
      <div className={base}>
        <div className="font-display text-2xl font-black tabular-nums" style={{ color: item.accent }}>
          04:32
        </div>
        <div className="text-[10px] text-white/40">+30s con regalo</div>
      </div>
    );
  }

  return (
    <div className={base}>
      <div className="text-3xl">🎁</div>
      <div className="text-[10px] mt-2 font-semibold" style={{ color: item.accent }}>¡Nuevo regalo!</div>
    </div>
  );
}

export function OverlaysShowcase() {
  return (
    <section id="overlays" className="section-pad">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <span className="text-live-pink font-display text-sm font-semibold uppercase tracking-[0.2em]">Overlays OBS</span>
          <h2 className="section-title mt-3">
            Producción <span className="neon-text">nivel pro</span>
          </h2>
          <p className="section-sub mx-auto">
            Más de 40 overlays en formato 3:4 para TikTok LIVE. Copia, pega en OBS y personaliza colores e imágenes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {overlays.map((ov) => (
            <article
              key={ov.id}
              className="group glass-card overflow-hidden hover:border-live-pink/40 hover:shadow-glow-purple transition-all duration-300 hover:-translate-y-1"
            >
              <div className="overlay-preview scanline bg-live-bg mx-4 mt-4">
                <OverlayMock item={ov} />
                <div className="absolute inset-0 bg-gradient-to-t from-live-bg via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{ov.emoji}</span>
                  <h3 className="font-display font-bold">{ov.name}</h3>
                </div>
                <p className="text-sm text-white/50 mt-2 leading-snug">{ov.desc}</p>
                <div className="mt-3 text-[10px] font-mono text-live-cyan/60 opacity-0 group-hover:opacity-100 transition-opacity">
                  /{ov.id}.html → OBS Browser Source
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 glass-card p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 justify-between border-live-gold/20">
          <div>
            <h3 className="font-display text-xl font-bold text-live-gold">Overlays por juego</h3>
            <p className="text-sm text-white/55 mt-2 max-w-lg">
              Genera imágenes PNG con tus acciones y regalos para Mario, R.E.P.O., Crash CTR y Metal Slug — listas para tu escena de OBS.
            </p>
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            {['🍄 Mario', '👻 R.E.P.O.', '🏎️ CTR', '💣 Metal Slug'].map((g) => (
              <span key={g} className="px-3 py-2 rounded-lg bg-live-gold/10 border border-live-gold/25 text-sm font-semibold text-live-gold">
                {g}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
