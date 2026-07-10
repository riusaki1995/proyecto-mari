import { PANEL_URL, whatsappBuyUrl } from '../data/content';

export function CtaBanner() {
  return (
    <section className="section-pad pt-0">
      <div className="mx-auto max-w-5xl">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-live-cyan/20 via-live-purple/25 to-live-pink/20" />
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative px-8 py-14 sm:px-14 sm:py-16 text-center">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-wide">
              ¿Listo para el siguiente nivel?
            </h2>
            <p className="mt-4 text-lg text-white/60 max-w-xl mx-auto">
              Únete a streamers que ya convierten cada regalo en contenido viral. Tu audiencia lo va a notar.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={whatsappBuyUrl()} target="_blank" rel="noopener noreferrer" className="btn-glow text-base px-10 py-4">
                Quiero Livecoins Premium
              </a>
              <a href={PANEL_URL} target="_blank" rel="noopener noreferrer" className="btn-outline text-base px-10 py-4">
                Probar gratis ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
