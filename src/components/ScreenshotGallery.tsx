import { useState } from 'react';
import { galleryShots, getOverlayById } from '../data/content';
import { OverlayIframePreview } from './OverlayIframePreview';

function asset(path: string) {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${path.replace(/^\//, '')}`;
}

export function ScreenshotGallery() {
  const [active, setActive] = useState(0);
  const shot = galleryShots[active];
  const overlay = shot.kind === 'overlay' ? getOverlayById(shot.overlayId) : undefined;

  return (
    <section className="section-pad pt-0">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <span className="text-live-cyan font-display text-sm font-semibold uppercase tracking-[0.2em]">
            Vista previa en vivo
          </span>
          <h2 className="section-title mt-3 text-3xl sm:text-4xl">
            Así se ve <span className="neon-text">en directo</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 items-start">
          <div className="lg:col-span-3 relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-live-cyan/25 to-live-purple/25 blur-md" />
            <div className="relative glass-card overflow-hidden rounded-2xl p-4">
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="text-white/40 font-mono">
                  {shot.kind === 'image' ? shot.title : overlay?.name}
                </span>
                <span className="px-2 py-0.5 rounded bg-live-cyan/10 text-live-cyan font-semibold">
                  {shot.kind === 'image' ? shot.tag : 'Overlay'}
                </span>
              </div>

              {shot.kind === 'image' ? (
                <img
                  src={asset(shot.src)}
                  alt={shot.title}
                  className="w-full h-auto rounded-xl border border-live-border/30 bg-black min-h-[280px] object-contain"
                  loading="lazy"
                />
              ) : overlay ? (
                <OverlayIframePreview
                  embedPath={overlay.embedPath}
                  urlParams={overlay.urlParams}
                  testMessage={overlay.testMessage}
                  testLoopMs={overlay.testLoopMs}
                  title={overlay.name}
                  height={420}
                  showLabel={false}
                />
              ) : null}
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-3">
            {galleryShots.map((s, i) => {
              const ov = s.kind === 'overlay' ? getOverlayById(s.overlayId) : undefined;
              return (
                <button
                  key={s.kind === 'image' ? s.title : s.overlayId}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`text-left rounded-xl overflow-hidden border transition-all duration-300 ${
                    active === i
                      ? 'border-live-cyan shadow-glow scale-[1.02]'
                      : 'border-live-border/50 hover:border-live-cyan/40 opacity-85 hover:opacity-100'
                  }`}
                >
                  {s.kind === 'image' ? (
                    <img
                      src={asset(s.src)}
                      alt={s.title}
                      className="w-full aspect-[4/3] object-cover object-top bg-black"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full aspect-[4/3] bg-gradient-to-br from-live-cyan/10 to-live-purple/10 flex flex-col items-center justify-center gap-2 p-3 border-b border-live-border/30">
                      <span className="text-2xl">{ov?.emoji ?? '📺'}</span>
                      <span className="text-[10px] font-semibold text-center text-white/70 leading-tight">{ov?.name}</span>
                    </div>
                  )}
                  <div className="px-3 py-2 bg-live-card/90 text-xs font-semibold truncate">
                    {s.kind === 'image' ? s.title : ov?.name}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
