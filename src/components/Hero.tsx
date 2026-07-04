import { BookOpen, Clock, Filter, Medal } from 'lucide-react';
import { STATS } from '../data/modules';
import { StatCard } from './StatCard';

const statItems = [
  { icon: BookOpen, target: STATS.modules, label: 'Módulos' },
  { icon: Clock, target: STATS.hours, label: 'Horas de contenido' },
  { icon: Filter, target: STATS.categories, label: 'Categorías' },
  { icon: Medal, target: STATS.completionRate, label: 'Tasa de finalización', suffix: '%' },
];

export function Hero() {
  return (
    <section className="px-4 pb-10 pt-12 sm:px-6 sm:pt-16">
      <div className="mx-auto w-3/4 max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm shadow-sm">
          <span className="text-base">✨</span>
          <span className="font-medium text-gray-700">50 módulos de aprendizaje profundo</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-red-500 px-2 py-0.5 text-xs font-bold text-white">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            LIVE
          </span>
        </div>

        <h1 className="mb-5 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          <span className="text-gray-900">Agencia ELÁRBOL</span>{' '}
          <span className="bg-gradient-to-r from-elarbol-700 via-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Academy
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
          El sistema de educación de TikTok LIVE más completo jamás creado. 50 módulos
          diseñados por expertos que cubren cada aspecto de las transmisiones en vivo
          profesionales.
        </p>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {statItems.map(({ icon, target, label, suffix }, index) => (
            <StatCard
              key={label}
              icon={icon}
              target={target}
              label={label}
              suffix={suffix}
              delay={index * 120}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
