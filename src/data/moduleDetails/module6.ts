import { ModuleDetailContent } from './types';

export const module6Detail: ModuleDetailContent = {
  heroDescription:
    'La consistencia es el predictor más fuerte del éxito en LIVE. Aprende a construir horarios respaldados por datos, encontrar tus ventanas óptimas de transmisión y crear loops de hábito que convierten espectadores ocasionales en fans leales.',
  stats: [
    { label: 'Espectadores recurrentes', value: '+450%', trend: 'up' },
    { label: 'Impulso algorítmico', value: '+35%', trend: 'up' },
    { label: 'Frecuencia óptima', value: '5x/sem', trend: 'neutral' },
  ],
  objectives: [
    'Encuentra tus ventanas óptimas de transmisión',
    'Entiende los tradeoffs entre frecuencia y calidad',
    'Planifica una consistencia sostenible a largo plazo',
    'Construye un horario sostenible',
    'Crea loops de hábito en tu audiencia',
    'Usa datos para optimizar tu horario',
  ],
  sections: [
    {
      title: 'El multiplicador de consistencia',
      paragraphs: [
        'Los creadores que transmiten a la misma hora los mismos días ven un aumento de 4.5x en espectadores recurrentes después de 30 días comparado con quienes transmiten de forma irregular. El algoritmo también premia la consistencia — transmitir en horarios predecibles señala confiabilidad, lo que impulsa tu puntuación de distribución hasta un 35%.',
        'El punto ideal es 4-5 sesiones por semana, cada una de 45-90 minutos. Más de 5 sesiones por semana muestra rendimientos decrecientes a menos que estés en el top 5% de creadores. Menos de 3 sesiones por semana hace casi imposible generar momentum.',
        'La ciencia detrás de esto es simple: tus espectadores están formando un hábito. Los hábitos requieren consistencia, repetición y recompensa. Cuando transmites a la misma hora, los espectadores integran tu stream en su rutina — como un programa de TV favorito.',
      ],
    },
    {
      title: 'Frecuencia óptima de sesiones',
      paragraphs: [
        'Ingresos por hora según la frecuencia semanal de transmisión. El pico está en 5 sesiones por semana, con rendimientos decrecientes más allá de eso.',
      ],
      showChart: 'session-frequency',
    },
    {
      title: 'Horarios pico de transmisión',
      paragraphs: [
        'Datos de más de 10,000 sesiones LIVE que muestran los horarios óptimos por día. Son promedios — usa tus propias analíticas para encontrar el pico específico de tu audiencia.',
      ],
      tiers: [
        {
          label: 'Lunes a jueves:',
          text: '7-9 PM hora local — mayor engagement general y tasa de espectadores recurrentes.',
        },
        {
          label: 'Viernes:',
          text: '8-11 PM — pico de velocidad de regalos e ingresos por sesión más altos.',
        },
        {
          label: 'Sábado:',
          text: '2-5 PM — mayor tasa de descubrimiento de nuevos espectadores. Mejor día para crecimiento de audiencia.',
        },
        {
          label: 'Domingo:',
          text: '4-7 PM — ideal para contenido largo (sesiones de 60+ min). Los espectadores están relajados y comprometidos.',
        },
        {
          label: 'Evitar:',
          text: '2-5 AM (todos los días), mañanas entre semana 6-10 AM — menor ROI a menos que apuntes a zonas horarias específicas.',
        },
      ],
    },
    {
      title: 'Pasos para construir tu horario',
      paragraphs: [
        'Cómo construir tu horario de transmisión progresivamente durante 3 meses. No intentes pasar de 0 a 5 sesiones por semana de la noche a la mañana.',
      ],
      animatedTimeline: true,
      timeline: [
        {
          time: 'Semana 1-2',
          text: 'Empieza con 3 sesiones. Elige 3 días y 1 horario consistente. Transmite 30-45 minutos cada una.',
        },
        {
          time: 'Semana 3-4',
          text: 'Agrega una 4ta sesión. Rastrea el solapamiento de espectadores entre sesiones para identificar tu horario más fuerte.',
        },
        {
          time: 'Mes 2',
          text: 'Establece tu horario de 4-5x por semana. Anuncia tu horario públicamente — fíjalo en tu bio. Empieza a transmitir 45-60 minutos por sesión.',
        },
        {
          time: 'Mes 3',
          text: 'Ajusta según analíticas. Identifica tu día de mejor rendimiento y conviértelo en tu sesión "insignia" (más larga, más producida). Bloquea tu horario y comprométete a 90 días de consistencia.',
        },
      ],
    },
    {
      title: 'Prevención del burnout',
      checklist: [
        'Nunca transmitas más de 6 días por semana — los días de descanso son innegociables',
        'Mantén las sesiones bajo 90 minutos a menos que seas un streamer maratonista experimentado',
        'Rastrea tus niveles de energía post-stream — si te drenas consistentemente, reduce la frecuencia',
        'Tómate 1 semana completa de descanso cada 8-10 semanas (anúncialo a tu audiencia con anticipación)',
        'Prepara contenido con anticipación para no improvisar cada sesión',
        'Ten un plan B para días de baja energía (formato más ligero, Q&A, stream relajado)',
      ],
    },
  ],
};
