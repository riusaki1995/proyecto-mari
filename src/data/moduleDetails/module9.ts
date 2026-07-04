import { ModuleDetailContent } from './types';

export const module9Detail: ModuleDetailContent = {
  heroDescription:
    'Tu gancho lo determina todo. Aprende las 12 fórmulas de gancho probadas que usan los mejores creadores de LIVE para detener el scroll y convertir espectadores en los primeros 3 segundos.',
  stats: [
    { label: 'Retención 30s', value: '+420%', trend: 'up' },
    { label: 'Nuevos espectadores', value: '+180%', trend: 'up' },
    { label: 'Biblioteca de ganchos', value: '12 tipos', trend: 'neutral' },
  ],
  objectives: [
    'Domina los 12 arquetipos de gancho',
    'Construye una biblioteca de ganchos',
    'Adapta ganchos para diferentes tipos de contenido',
    'Haz pruebas A/B de ganchos de forma sistemática',
    'Mide la efectividad de tus ganchos',
    'Crea ganchos que activen impulsos algorítmicos',
  ],
  sections: [
    {
      title: 'La regla de los 3 segundos',
      paragraphs: [
        'Tienes exactamente 3 segundos para detener a un espectador de hacer scroll más allá de tu transmisión LIVE. Un gancho es la combinación de setup visual, energía y primeras palabras.',
        'Los ganchos que usan un "pattern interrupt" (algo inesperado) son 4.2x más efectivos reteniendo espectadores nuevos que saludos estándar.',
        'Los ganchos efectivos crean un "open loop" — empiezan una historia o hacen una pregunta que los espectadores sienten necesidad psicológica de ver resuelta.',
        'Empezar con "Hola chicos, bienvenidos a mi stream" pierde el 70% de espectadores potenciales. Nunca empieces con un saludo genérico.',
      ],
    },
    {
      title: 'Rendimiento de ganchos por tipo',
      paragraphs: [
        'Tasa de retención de espectadores a los 30 segundos por tipo de gancho. Los ganchos basados en preguntas dominan, seguidos por controversia y aperturas tipo tutorial.',
      ],
      showChart: 'hook-performance',
    },
    {
      title: '12 fórmulas de gancho',
      checklist: [
        'La pregunta audaz: "¿Qué pasaría si te dijera que..." — crea curiosidad y open loops',
        'El reto: "Apuesto a que nadie puede..." — activa el instinto competitivo',
        'El tutorial: "Déjame mostrarte exactamente cómo..." — promete valor concreto',
        'La encuesta: "Rápido — ¿cuál prefieres..." — exige interacción inmediata',
        'La historia: "Algo loco pasó..." — activa la curiosidad narrativa',
        'El invitado: "Hoy estoy aquí con..." — agrega prueba social y novedad',
        'La cuenta regresiva: "En los próximos 5 minutos..." — crea urgencia y presión de tiempo',
        'La revelación: "He estado ocultando algo..." — aprovecha misterio y anticipación',
        'La reacción: "No vas a creer lo que acaba de pasar..." — usa shock y novedad',
        'La controversia: "Opinión impopular..." — dispara respuesta emocional',
        'El logro: "Acabamos de llegar a [hito]..." — crea energía de celebración',
        'La urgencia: "Esto solo está pasando ahora mismo..." — crea FOMO y exclusividad',
      ],
    },
    {
      title: 'Framework de prueba de ganchos',
      paragraphs: [
        'Cómo probar y optimizar tus ganchos sistemáticamente usando datos, no suposiciones.',
      ],
      tiers: [
        {
          label: 'Prueba 2 ganchos diferentes por semana',
          text: '— usa el mismo contenido pero varía la apertura.',
        },
        {
          label: 'Rastrea la retención a 30 segundos de cada gancho',
          text: '— esta es tu métrica principal de éxito.',
        },
        {
          label: '',
          text: 'Mantén una hoja de cálculo de tipo de gancho → retención 30s → retención 5min → ingresos.',
        },
        {
          label: 'Duplica lo que mejor funciona',
          text: '— usa tus mejores ganchos 3 veces antes de retirarlos.',
        },
        {
          label: 'Retira ganchos por debajo del 25% de retención a 30 segundos',
          text: '— te están costando espectadores.',
        },
        {
          label: 'Crea variaciones estacionales de tus mejores ganchos',
          text: '— misma estructura, contenido fresco.',
        },
      ],
    },
    {
      title: 'Apilamiento avanzado de ganchos',
      paragraphs: [
        'Para creadores experimentados: apila múltiples técnicas de gancho en los primeros 15 segundos para máximo impacto.',
      ],
      animatedTimeline: true,
      timeline: [
        {
          time: 'Segundo 0-3',
          text: 'Pattern interrupt visual — usa algo inesperado: colores brillantes, movimiento súbito o props.',
        },
        {
          time: 'Segundo 3-5',
          text: 'Explosión de energía — sube tu nivel de energía (voz al 120% de lo normal, gran sonrisa, movimiento).',
        },
        {
          time: 'Segundo 5-10',
          text: 'La pregunta o declaración de gancho — entrega tu gancho principal (de las 12 fórmulas).',
        },
        {
          time: 'Segundo 10-15',
          text: 'Comando de engagement — "Escribe 1 en el chat si alguna vez has..."',
        },
        {
          time: 'Segundo 15-20',
          text: 'Promesa de valor — "Quédate los próximos 10 minutos y te mostraré..."',
        },
      ],
    },
  ],
};
