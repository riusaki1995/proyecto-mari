import { stats, whatsappBuyUrl, PANEL_URL } from '../data/content';

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center section-pad pt-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-live-cyan/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-live-purple/10 blur-[120px] animate-pulse-glow" />

      <div className="relative mx-auto max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-live-cyan/30 bg-live-cyan/5 px-4 py-1.5 text-sm font-semibold text-live-cyan mb-6">
              <span className="h-2 w-2 rounded-full bg-live-cyan animate-pulse" />
              TikTok LIVE · Interactivo · Profesional
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-wide">
              Convierte cada{' '}
              <span className="neon-text">regalo</span>
              <br />
              en una{' '}
              <span className="text-live-gold">acción épica</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-white/65 max-w-xl leading-relaxed">
              Livecoins conecta tu TikTok LIVE con minijuegos, overlays para OBS y alertas que hacen que tu audiencia
              <strong className="text-white"> quiera quedarse y donar más</strong>.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href={whatsappBuyUrl()} target="_blank" rel="noopener noreferrer" className="btn-glow text-base px-8 py-4">
                🚀 Obtener Premium
              </a>
              <a href="#app" className="btn-outline text-base px-8 py-4">
                Ver la app
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="glass-card p-4 text-center">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-live-cyan">{s.value}</div>
                  <div className="mt-1 text-xs sm:text-sm text-white/50 uppercase tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-float hidden sm:block">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-live-cyan/20 to-live-purple/20 blur-2xl" />
            <div className="relative glass-card p-1 rounded-2xl shadow-glow-purple scanline">
              <div className="rounded-xl bg-live-panel overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-live-border/50 bg-live-bg/80">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500" />
                  <span className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-xs text-white/40 font-mono">livecoins · panel</span>
                  <span className="ml-auto text-xs px-2 py-0.5 rounded bg-live-gold/20 text-live-gold font-semibold">App PC</span>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex gap-2 flex-wrap">
                    {['🎮 Juegos', '📺 Overlays', '🔊 Alertas', '⚔️ Batallas'].map((t) => (
                      <span key={t} className="text-xs px-3 py-1.5 rounded-lg bg-live-card border border-live-border/50 text-white/70">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { e: '🍄', n: 'Mario SMBX2', c: 'Spawn Goomba x5' },
                      { e: '🌻', n: 'PvZ', c: 'Zombie +100 sole' },
                      { e: '⛏️', n: 'Minecraft', c: 'TNT en jugador' },
                      { e: '🏎️', n: 'Crash CTR', c: 'Bomba azul' },
                    ].map((g) => (
                      <div key={g.n} className="rounded-lg bg-live-card/80 border border-live-border/40 p-3 hover:border-live-cyan/40 transition-colors">
                        <div className="text-2xl">{g.e}</div>
                        <div className="text-sm font-semibold mt-1">{g.n}</div>
                        <div className="text-xs text-live-cyan/80 mt-0.5">{g.c}</div>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-lg bg-gradient-to-r from-live-purple/20 to-live-pink/20 border border-live-purple/30 p-3 flex items-center justify-between">
                    <span className="text-sm">🎁 Regalo recibido: Rosa × 10</span>
                    <span className="text-xs font-display text-live-gold animate-pulse">EN VIVO</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 glass-card px-4 py-3 shadow-glow">
              <div className="text-xs text-white/50 uppercase">Overlay activo</div>
              <div className="font-display text-live-cyan font-bold">Batalla de regalos ⚔️</div>
            </div>

            <div className="absolute -top-4 -right-4 glass-card px-4 py-3 shadow-glow-gold">
              <div className="text-xs text-white/50 uppercase">Espectadores</div>
              <div className="font-display text-live-gold font-bold text-xl">+847 🔥</div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href={PANEL_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-live-cyan transition-colors">
            ¿Ya tienes cuenta? Abre el panel web →
          </a>
        </div>
      </div>
    </section>
  );
}
