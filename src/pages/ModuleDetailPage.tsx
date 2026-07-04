import {
  ArrowLeft,
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Lightbulb,
  Minus,
  Target,
  TrendingDown,
  TrendingUp,
  Zap,
} from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import {
  CATEGORY_LABELS,
  LEVEL_LABELS,
  modules,
  Module,
} from '../data/modules';
import { getModuleDetail } from '../data/moduleDetails';
import { ModuleSection } from '../data/moduleDetails/types';
import { levelStyles } from '../utils/levelStyles';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { RetentionChart } from '../components/module-detail/RetentionChart';
import { InvestmentChart } from '../components/module-detail/InvestmentChart';
import { EngagementChart } from '../components/module-detail/EngagementChart';
import { SessionFrequencyChart } from '../components/module-detail/SessionFrequencyChart';
import { PlatformROIChart } from '../components/module-detail/PlatformROIChart';
import { EmotionalJourneyChart } from '../components/module-detail/EmotionalJourneyChart';
import { HookPerformanceChart } from '../components/module-detail/HookPerformanceChart';
import { DiscoveryChannelChart } from '../components/module-detail/DiscoveryChannelChart';
import { WeeklyGrowthChart } from '../components/module-detail/WeeklyGrowthChart';
import { BrandRecallChart } from '../components/module-detail/BrandRecallChart';
import { SignalWeightChart } from '../components/module-detail/SignalWeightChart';
import { AnimatedTimeline } from '../components/module-detail/AnimatedTimeline';
import { SectionCard } from '../components/module-detail/SectionCard';
import { ModuleStat } from '../data/moduleDetails/types';

function getModuleById(id: number): Module | undefined {
  return modules.find((m) => m.id === id);
}

function StatTrendIcon({ trend }: { trend?: ModuleStat['trend'] }) {
  if (trend === 'down') {
    return <TrendingDown className="h-3.5 w-3.5 shrink-0 text-red-500" />;
  }
  if (trend === 'neutral') {
    return <Minus className="h-3.5 w-3.5 shrink-0 text-gray-400" />;
  }
  return <TrendingUp className="h-3.5 w-3.5 shrink-0 text-emerald-500" />;
}

function SectionContent({ section, index }: { section: ModuleSection; index: number }) {
  return (
    <SectionCard number={index + 1} title={section.title}>
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph.slice(0, 40)} className="mb-4 text-sm leading-relaxed text-gray-600 last:mb-0">
          {paragraph}
        </p>
      ))}

      {section.showChart === 'retention' && <RetentionChart />}
      {section.showChart === 'investment' && <InvestmentChart />}
      {section.showChart === 'signal-weight' && <SignalWeightChart />}
      {section.showChart === 'brand-recall' && <BrandRecallChart />}
      {section.showChart === 'engagement' && <EngagementChart />}
      {section.showChart === 'session-frequency' && <SessionFrequencyChart />}
      {section.showChart === 'platform-roi' && <PlatformROIChart />}
      {section.showChart === 'emotional-journey' && <EmotionalJourneyChart />}
      {section.showChart === 'hook-performance' && <HookPerformanceChart />}
      {section.showChart === 'discovery-channel' && <DiscoveryChannelChart />}
      {section.showChart === 'weekly-growth' && <WeeklyGrowthChart />}

      {section.tiers && (
        <div className="space-y-4">
          {section.tiers.map((tier) => (
            <div key={tier.label} className="flex gap-3 text-sm text-gray-600">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
              <p>
                <strong className="font-semibold text-gray-900">{tier.label}</strong> {tier.text}
              </p>
            </div>
          ))}
        </div>
      )}

      {section.audioSteps && (
        <div className="space-y-0">
          {section.audioSteps.map((item, i) => (
            <div key={item.text.slice(0, 30)} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-3 w-3 shrink-0 rounded-full bg-gradient-to-br from-violet-500 to-blue-500" />
                {i < section.audioSteps!.length - 1 && (
                  <div className="w-px flex-1 bg-violet-200" />
                )}
              </div>
              <div className="pb-5 pt-0 text-sm text-gray-600">
                <strong className="font-semibold text-gray-900">Paso {i + 1}:</strong> {item.text}
              </div>
            </div>
          ))}
        </div>
      )}

      {section.bullets && (
        <div className="space-y-3">
          {section.bullets.map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-3 rounded-xl bg-gray-50 px-4 py-3 text-sm text-gray-600"
            >
              <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-violet-500" strokeWidth={2} />
              <p>
                <strong className="font-semibold text-gray-900">{item.label}</strong> {item.text}
              </p>
            </div>
          ))}
        </div>
      )}

      {section.checklist && (
        <div className="grid gap-3 sm:grid-cols-2">
          {section.checklist.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl bg-gray-50 px-4 py-3 text-sm text-gray-700"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" strokeWidth={2.5} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      )}

      {section.comparisons && (
        <div className="space-y-3">
          {section.comparisons.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl bg-gray-50 px-4 py-3 text-sm text-gray-600"
            >
              <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-violet-500" strokeWidth={2} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      )}

      {section.timeline && section.animatedTimeline && (
        <AnimatedTimeline items={section.timeline} />
      )}

      {section.timeline && !section.animatedTimeline && (
        <div className="space-y-0">
          {section.timeline.map((item, i) => (
            <div key={item.time} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-3 w-3 shrink-0 rounded-full bg-gradient-to-br from-violet-500 to-blue-500" />
                {i < section.timeline!.length - 1 && (
                  <div className="w-px flex-1 bg-violet-200" />
                )}
              </div>
              <div className="pb-5 pt-0">
                <span className="text-sm font-semibold text-gray-900">{item.time}: </span>
                <span className="text-sm text-gray-600">{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </SectionCard>
  );
}

export function ModuleDetailPage() {
  const { id } = useParams<{ id: string }>();
  const moduleId = Number(id);
  const module = getModuleById(moduleId);
  const detail = getModuleDetail(moduleId);

  if (!module) {
    return <Navigate to="/" replace />;
  }

  if (!detail) {
    return (
      <div className="min-h-screen bg-gray-50/80">
        <Header />
        <main className="px-3 py-12 sm:px-6 sm:py-16">
          <div className="module-detail-container text-center">
            <p className="text-lg font-medium text-gray-700">
              Contenido del módulo próximamente.
            </p>
            <Link
              to="/"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-elarbol-700 hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a todos los módulos
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const prevModule = getModuleById(moduleId - 1);
  const nextModule = getModuleById(moduleId + 1);
  const styles = levelStyles[module.level];
  const progress = (moduleId / modules.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50/80">
      <Header />
      <main className="px-3 pb-12 pt-5 sm:px-6 sm:pb-16 sm:pt-8">
        <div className="module-detail-container space-y-5 sm:space-y-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-medium text-gray-500 transition hover:text-gray-900 sm:text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Todos los módulos
          </Link>

          <div className="h-1 overflow-hidden rounded-full bg-gray-100 sm:h-1.5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-blue-500 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div>
            <div className="mb-3 flex flex-wrap items-center gap-2 sm:mb-4 sm:gap-3">
              <span className="text-xl sm:text-2xl" role="img" aria-hidden="true">
                {module.icon}
              </span>
              <span className="text-xs text-gray-500 sm:text-sm">
                {CATEGORY_LABELS[module.category]} · Módulo {moduleId}/{modules.length}
              </span>
            </div>

            <div className="mb-4 flex flex-wrap gap-1.5 sm:mb-5 sm:gap-2">
              <span
                className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${styles.bg} ${styles.text} ${styles.border}`}
              >
                {LEVEL_LABELS[module.level]}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-2.5 py-0.5 text-xs font-medium text-gray-600">
                <Clock className="h-3.5 w-3.5" />
                {module.duration} min
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-2.5 py-0.5 text-xs font-medium text-gray-600">
                <BookOpen className="h-3.5 w-3.5" />
                {module.sections} secciones
              </span>
            </div>

            <h1 className="mb-3 text-2xl font-extrabold leading-tight tracking-tight text-gray-900 sm:mb-4 sm:text-3xl md:text-4xl">
              {module.title}
            </h1>
            <p className="text-sm leading-relaxed text-gray-500 sm:text-base md:text-lg">
              {detail.heroDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {detail.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-gray-100 bg-white p-4 shadow-card sm:p-5"
              >
                <div className="mb-1.5 flex items-center gap-2 text-[11px] font-medium text-gray-500 sm:mb-2 sm:text-xs">
                  <StatTrendIcon trend={stat.trend} />
                  <span className="leading-tight">{stat.label}</span>
                </div>
                <div className="text-2xl font-bold text-gray-900 sm:text-3xl">{stat.value}</div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-card sm:p-6 md:p-8">
            <div className="mb-4 flex items-center gap-2 sm:mb-5">
              <Target className="h-5 w-5 shrink-0 text-violet-500" />
              <h2 className="text-base font-bold text-gray-900 sm:text-lg">Objetivos de aprendizaje</h2>
            </div>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
              {detail.objectives.map((objective) => (
                <div key={objective} className="flex items-start gap-3 text-sm text-gray-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" strokeWidth={2.5} />
                  <span>{objective}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 sm:space-y-5">
            {detail.sections.map((section, index) => (
              <SectionContent key={section.title} section={section} index={index} />
            ))}

            {detail.implementationSteps && detail.implementationDescription && (
              <SectionCard number={detail.sections.length + 1} title="Pasos de implementación">
                <p className="mb-5 text-sm leading-relaxed text-gray-600">
                  {detail.implementationDescription}
                </p>
                <ul className="space-y-3">
                  {detail.implementationSteps.map((step, i) => (
                    <li key={step} className="flex gap-3 text-sm text-gray-700">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                      <span>
                        <strong className="font-semibold text-gray-900">Paso {i + 1}:</strong>{' '}
                        {step}
                      </span>
                    </li>
                  ))}
                </ul>
              </SectionCard>
            )}
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-blue-500 p-[1px]">
            <div className="rounded-2xl bg-white p-5 text-center sm:p-8">
              <Zap className="mx-auto mb-3 h-7 w-7 text-violet-500 sm:mb-4 sm:h-8 sm:w-8" />
              <h3 className="mb-2 text-lg font-bold text-gray-900 sm:text-xl">¿Listo para implementar?</h3>
              <p className="mb-5 text-xs text-gray-500 sm:mb-6 sm:text-sm">
                Postúlate para unirte a Agencia ELÁRBOL y recibe coaching sobre este módulo.
              </p>
              <a
                href="#postularse"
                className="inline-block w-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-blue-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:brightness-105 sm:w-auto sm:px-8 sm:py-3"
              >
                Postularse como creador
              </a>
            </div>
          </div>

          {(prevModule || nextModule) && (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {prevModule ? (
                <Link
                  to={`/modulo/${prevModule.id}`}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-card transition hover:shadow-card-hover sm:p-5"
                >
                  <ChevronLeft className="h-5 w-5 shrink-0 text-gray-300" />
                  <div className="min-w-0 flex-1 text-right">
                    <span className="text-xs font-medium text-gray-400">Anterior</span>
                    <p className="mt-0.5 line-clamp-2 text-sm font-bold text-gray-900">
                      {prevModule.title}
                    </p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextModule && (
                <Link
                  to={`/modulo/${nextModule.id}`}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-card transition hover:shadow-card-hover sm:p-5"
                >
                  <div className="min-w-0">
                    <span className="text-xs font-medium text-gray-400">Siguiente</span>
                    <p className="mt-0.5 line-clamp-2 text-sm font-bold text-gray-900">
                      {nextModule.title}
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 shrink-0 text-gray-300" />
                </Link>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
