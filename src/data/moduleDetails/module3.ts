import { ModuleDetailContent } from './types';

export const module3Detail: ModuleDetailContent = {
  heroDescription:
    'El algoritmo no es tu enemigo — es tu herramienta de distribución más poderosa. Aprende exactamente cómo TikTok decide quién ve tu LIVE, cómo activar impulsos algorítmicos y cuáles son las métricas que más importan para el descubrimiento.',
  stats: [
    { label: 'Alcance de descubrimiento', value: '+340%', trend: 'up' },
    { label: 'Puntuación algorítmica', value: '92/100', trend: 'up' },
    { label: 'Tasa de impulso', value: '3.2x', trend: 'up' },
  ],
  objectives: [
    'Descifrar el motor de recomendación de LIVE',
    'Identificar las 7 señales de ranking',
    'Optimizar para distribución algorítmica',
    'Construir patrones de descubrimiento consistentes',
    'Entender los ciclos de retroalimentación',
    'Programar tus transmisiones para máximo favor algorítmico',
  ],
  sections: [
    {
      title: 'Las 7 señales de ranking',
      paragraphs: [
        'El algoritmo de TikTok LIVE evalúa 7 señales principales: (1) Velocidad de espectadores — qué tan rápido se unen, (2) Tiempo promedio de visualización — cuánto se quedan, (3) Tasa de engagement — comentarios/compartidos por espectador, (4) Velocidad de regalos — diamantes por minuto, (5) Ratio seguidor/espectador — % de espectadores que te siguen, (6) Puntuación de consistencia — tu patrón de transmisión, (7) Relevancia de contenido — coincidencia de tema con intereses del espectador.',
        'Cada señal tiene un peso diferente, y entender la jerarquía es crucial. El algoritmo evalúa tu transmisión en tiempo real en checkpoints específicos: 2 minutos, 5 minutos, 15 minutos y 30 minutos. Cada checkpoint determina si tu transmisión se impulsa a una audiencia más amplia o se suprime.',
        'La perspectiva más importante: el algoritmo premia la calidad SOSTENIDA, no los picos. Una transmisión consistente de 7/10 supera a una que es 10/10 por 5 minutos y 4/10 el resto.',
      ],
    },
    {
      title: 'Distribución del peso de señales',
      paragraphs: [
        'Peso relativo de cada señal de ranking en el algoritmo. El tiempo de visualización es el factor más importante, seguido por la velocidad de espectadores. La velocidad de regalos importa menos de lo que la mayoría de creadores cree.',
      ],
      showChart: 'signal-weight',
    },
    {
      title: 'Timeline de impulso algorítmico',
      paragraphs: [
        'Momentos clave durante una transmisión cuando ocurre la evaluación algorítmica. Estos son tus momentos "decisivos" — prepara contenido específico para cada checkpoint.',
      ],
      animatedTimeline: true,
      timeline: [
        {
          time: '0-2 min',
          text: 'Evaluación inicial — se evalúa la calidad del gancho. Si el 60%+ de espectadores se queda después de 2 minutos, pasas la primera puerta.',
        },
        {
          time: '5 min',
          text: 'Primera ola de distribución. Señales fuertes tempranas activan un impulso a 2-5x tu base de seguidores.',
        },
        {
          time: '15 min',
          text: 'Actualización mayor de ranking — se mide engagement sostenible. Este es el checkpoint más importante. Calidad consistente activa la colocación "LIVE recomendado".',
        },
        {
          time: '30 min',
          text: 'Decisión de impulso extendido — los mejores performers obtienen 2x alcance. Solo el 15% de transmisiones llegan aquí con señales fuertes.',
        },
        {
          time: '45 min',
          text: 'Checkpoint avanzado — engagement sostenido a esta altura señala calidad premium al algoritmo y prepara el camino hacia el feed de descubrimiento.',
        },
        {
          time: '60 min',
          text: 'Bonus maratón — calidad consistente activa colocación en feed de descubrimiento. Menos del 5% de transmisiones logran esto, pero las que lo hacen ven 10x+ la audiencia normal.',
        },
      ],
    },
    {
      title: 'Checklist de optimización',
      checklist: [
        'Empieza fuerte — los primeros 60 segundos deben enganchar de inmediato (ver Módulo 1)',
        'Fomenta comentarios cada 3-5 minutos con preguntas directas',
        'Usa funciones interactivas (encuestas, Q&A) en checkpoints algorítmicos (2min, 5min, 15min)',
        'Mantén un horario de transmisión consistente — mismos días y horas cada semana',
        'Promociona cruzadamente tus próximas transmisiones en tu feed 24 horas y 1 hora antes',
        'Interactúa con quienes regalan de inmediato — di su nombre, agradéceles específicamente',
        'Mantén el tiempo promedio de visualización arriba de 5 minutos — este es el umbral mínimo para distribución',
        'Monitorea tu gráfico de velocidad de espectadores — si se estanca, aumenta energía y engagement',
      ],
    },
    {
      title: 'Mitos del algoritmo desmentidos',
      paragraphs: [
        'Conceptos erróneos comunes sobre el algoritmo de TikTok LIVE que desperdician el tiempo y energía de los creadores.',
      ],
      comparisons: [
        'Mito: Transmitir más tiempo siempre significa más vistas → Realidad: La calidad importa más que la cantidad. Una transmisión de alta calidad de 30 minutos supera a una mediocre de 3 horas siempre.',
        'Mito: Más regalos = mayor ranking algorítmico → Realidad: Los regalos son solo la 4ta señal más importante. El tiempo de visualización y la tasa de engagement importan mucho más.',
        'Mito: El algoritmo te castiga por faltar un día → Realidad: La consistencia se mide en semanas, no en días. Faltar un día no te perjudica. Romper un patrón sí lo hará.',
        'Mito: Ciertas horas del día son "amigables con el algoritmo" → Realidad: El mejor momento es cuando TU audiencia está en línea. Usa tus analíticas para encontrar tu ventana óptima.',
      ],
    },
    {
      title: 'Construyendo tu estrategia algorítmica',
      paragraphs: [
        'Estrategias respaldadas por datos para maximizar la distribución algorítmica basadas en el análisis de más de 50,000 transmisiones en LIVE.',
      ],
      tiers: [
        {
          label: 'Estrategia 1: El enfoque de 3 olas —',
          text: 'Estructura tu transmisión en 3 olas de engagement (5min, 15min, 30min, 45min) con energía pico en cada checkpoint algorítmico.',
        },
        {
          label: 'Estrategia 2: El piso de engagement —',
          text: 'Nunca dejes que el engagement caiga por debajo de 3 comentarios por minuto. Si lo hace, despliega de inmediato un disparador de engagement (pregunta, encuesta, reto).',
        },
        {
          label: 'Estrategia 3: La pila de espectadores recurrentes —',
          text: 'Los espectadores recurrentes señalan calidad al algoritmo. Termina cada transmisión con una "cita" clara para tu próxima sesión para impulsar retorno.',
        },
        {
          label: 'Estrategia 4: El pipeline de contenido cruzado —',
          text: 'Publica un clip de formato corto de tu sesión LIVE dentro de 1 hora. El algoritmo conecta tu contenido LIVE y de feed, impulsando ambos.',
        },
      ],
    },
  ],
};
