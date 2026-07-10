import { planFree, planPremium, PREMIUM_PRICE, PANEL_URL, whatsappBuyUrl } from '../data/content';

export function Pricing() {
  return (
    <section id="planes" className="section-pad relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-live-gold/5 blur-[100px]" />

      <div className="relative mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <span className="text-live-gold font-display text-sm font-semibold uppercase tracking-[0.2em]">Planes</span>
          <h2 className="section-title mt-3">
            Empieza gratis, <span className="neon-text">escala a Premium</span>
          </h2>
          <p className="section-sub mx-auto">
            Prueba sin pagar. Cuando quieras desbloquear todo, un solo plan sin sorpresas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <div className="glass-card p-8 flex flex-col">
            <div className="text-sm font-display uppercase tracking-widest text-white/40">Plan Gratis</div>
            <div className="mt-4 font-display text-5xl font-black">
              $0
              <span className="text-lg font-normal text-white/40">/ siempre</span>
            </div>
            <p className="mt-3 text-white/55">Para empezar a transmitir con lo esencial.</p>
            <ul className="mt-8 space-y-3 flex-1">
              {planFree.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                  <span className="text-live-cyan mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={PANEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline mt-8 w-full justify-center"
            >
              Empezar gratis
            </a>
          </div>

          <div className="relative glass-card p-8 flex flex-col border-live-gold/40 shadow-glow-gold">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-live-gold to-amber-400 text-live-bg text-xs font-display font-bold uppercase tracking-wider">
              ⭐ Recomendado
            </div>
            <div className="text-sm font-display uppercase tracking-widest text-live-gold">Plan Premium</div>
            <div className="mt-4 font-display text-5xl font-black text-live-gold">
              {PREMIUM_PRICE}
              <span className="text-lg font-normal text-white/40">/ mes</span>
            </div>
            <p className="mt-3 text-white/55">Sin límites. Todos los juegos, overlays y funciones.</p>
            <ul className="mt-8 space-y-3 flex-1">
              {planPremium.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                  <span className="text-live-gold mt-0.5">★</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={whatsappBuyUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow mt-8 w-full justify-center !from-live-gold !to-amber-400 !text-live-bg hover:!shadow-glow-gold"
            >
              Comprar Premium por WhatsApp
            </a>
            <p className="text-xs text-center text-white/35 mt-4">
              Te activamos el plan manualmente. Luego cierra sesión e inicia de nuevo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
