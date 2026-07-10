import { games } from '../data/content';

export function GamesGrid() {
  return (
    <section id="juegos" className="section-pad relative bg-live-panel/30">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <span className="text-live-purple font-display text-sm font-semibold uppercase tracking-[0.2em]">Minijuegos</span>
          <h2 className="section-title mt-3">
            Tu chat <span className="neon-text">juega contigo</span>
          </h2>
          <p className="section-sub mx-auto">
            Más de 15 títulos conectados. Cada regalo puede spawnear enemigos, dar items, ejecutar comandos o cambiar el juego en vivo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {games.map((game) => (
            <article key={game.id} className="game-card group">
              <div className={`absolute inset-0 bg-gradient-to-br ${game.gradient} opacity-60`} />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <span className="text-4xl drop-shadow-lg">{game.emoji}</span>
                  {game.premium && (
                    <span className="text-[10px] font-display font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-live-gold/20 text-live-gold border border-live-gold/30">
                      Premium
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-display text-lg font-bold">{game.name}</h3>
                <p className="mt-1.5 text-sm text-white/55 leading-snug">{game.desc}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {game.tags.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-black/30 text-white/50 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center mt-10 text-sm text-white/40">
          Los juegos marcados <span className="text-live-gold font-semibold">Premium</span> se desbloquean con el plan de $12 USD/mes.
        </p>
      </div>
    </section>
  );
}
