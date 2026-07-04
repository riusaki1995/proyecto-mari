import { ModuleDetailContent } from './types';

export const module10Detail: ModuleDetailContent = {
  heroDescription:
    'Coloca tu transmisión LIVE frente a millones sin gastar un centavo en anuncios. Domina el motor de descubrimiento orgánico que TikTok usa para recomendar transmisiones LIVE a nuevas audiencias.',
  stats: [
    { label: 'Ubicación FYP', value: '55%', trend: 'up' },
    { label: 'Nuevos espectadores', value: '+800%', trend: 'up' },
    { label: 'Tasa de crecimiento', value: '12%/sem', trend: 'up' },
  ],
  objectives: [
    'Activa la ubicación LIVE en el feed For You',
    'Construye loops de crecimiento compuesto',
    'Entiende el embudo de descubrimiento',
    'Optimiza señales de descubrimiento',
    'Rastrea métricas de descubrimiento',
    'Crea contenido optimizado para descubrimiento',
  ],
  sections: [
    {
      title: 'Inmersión profunda en el motor de descubrimiento',
      paragraphs: [
        'El descubrimiento LIVE de TikTok usa tres canales principales: burbujas del feed For You (55% del descubrimiento), pestaña Siguiendo (30%) y pestaña LIVE (15%).',
        'La ubicación en el feed For You es el santo grial — te coloca frente a audiencias completamente nuevas. Para activarla, tu stream necesita engagement alto sostenido (no solo un pico) durante al menos 15 minutos consecutivos. El algoritmo busca CONSISTENCIA, no picos.',
        'Un stream que mantiene engagement 7/10 durante 30 minutos superará a uno que alcanza 10/10 por 5 minutos y luego cae a 3/10. El algoritmo premia la calidad sostenida sobre los momentos brillantes.',
      ],
    },
    {
      title: 'Distribución por canal de descubrimiento',
      paragraphs: [
        'Dónde encuentran nuevos espectadores tu transmisión LIVE. El feed For You es el motor principal de descubrimiento, pero los tres canales importan.',
      ],
      showChart: 'discovery-channel',
    },
    {
      title: 'Efecto compuesto de crecimiento',
      paragraphs: [
        'Cómo el descubrimiento orgánico se compone durante 90 días. Esta es la curva de crecimiento que separa a los creadores exitosos de quienes se rinden demasiado pronto.',
      ],
      animatedTimeline: true,
      timeline: [
        {
          time: 'Días 1-7',
          text: 'Audiencia base de seguidores viendo. Espera 20-50 espectadores. Enfócate en calidad, no en números.',
        },
        {
          time: 'Días 8-21',
          text: 'Comienzan los primeros impulsos algorítmicos. Verás picos ocasionales de 50-150 espectadores. Son impulsos de prueba — el algoritmo evalúa si tu contenido merece distribución más amplia.',
        },
        {
          time: 'Días 22-45',
          text: 'Ubicación de descubrimiento consistente para quienes rinden bien. Espera 150-500 espectadores con tasas crecientes de espectadores recurrentes. Aquí comienza el crecimiento compuesto.',
        },
        {
          time: 'Días 46-90',
          text: 'Crecimiento compuesto completo de espectadores recurrentes + descubrimiento continuo de nuevos. Los mejores performers alcanzan 500-2000+ espectadores. Tu audiencia se vuelve autosostenible por boca a boca y amplificación algorítmica.',
        },
      ],
    },
    {
      title: 'Optimización de descubrimiento',
      checklist: [
        'Transmite en horarios consistentes para construir expectativa algorítmica y hábitos de espectadores',
        'Usa sonidos, temas y hashtags en tendencia en el título de tu stream para coincidencia de relevancia',
        'Mantén el engagement arriba de 5 comentarios por minuto — este es el umbral mínimo para ubicación en For You',
        'Mantén el tiempo promedio de visualización arriba de 5 minutos — debajo de esto, el algoritmo no impulsará tu stream',
        'Fomenta compartidos — cada share activa una mini-ola de distribución a la red del que comparte',
        'Colabora con otros creadores LIVE para polinización cruzada y compartir audiencias',
        'Publica un video de TikTok 1 hora antes de ir en vivo para "calentar" el algoritmo',
        'Termina cada stream anunciando el próximo — los espectadores recurrentes son la señal de descubrimiento más fuerte',
      ],
    },
    {
      title: 'Dashboard de métricas de descubrimiento',
      paragraphs: [
        'Rastrea estas métricas específicas semanalmente para medir tu progreso de descubrimiento.',
      ],
      tiers: [
        {
          label: 'Porcentaje de espectadores nuevos:',
          text: 'Rastrea qué % de espectadores de cada sesión son nuevos vs recurrentes. Objetivo: ratio saludable de 40-60% nuevos.',
        },
        {
          label: 'Fuente de descubrimiento:',
          text: 'Revisa tus analíticas para ver dónde te encuentran los espectadores. Objetivo: 50%+ desde el feed For You.',
        },
        {
          label: 'Tasa de conversión a seguidor:',
          text: 'Qué % de espectadores te siguen durante/después de tu stream. Objetivo: 5-10% del total de espectadores.',
        },
        {
          label: 'Tasa de espectadores recurrentes:',
          text: 'Qué % de los espectadores de la semana pasada regresaron esta semana. Objetivo: 30%+ para sostenibilidad.',
        },
        {
          label: 'Coeficiente viral:',
          text: '¿Cuántos espectadores nuevos trae cada espectador existente? Objetivo: 1.2+ (cada espectador trae 1.2 más).',
        },
      ],
    },
  ],
};
