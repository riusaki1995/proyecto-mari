export type Level = 'principiante' | 'intermedio' | 'avanzado' | 'experto';

export type Category =
  | 'fundamentos-live'
  | 'crecimiento-audiencia'
  | 'monetizacion'
  | 'estrategia-contenido'
  | 'analitica-datos'
  | 'rendimiento-avanzado'
  | 'negocios-marca';

export interface Module {
  id: number;
  icon: string;
  title: string;
  description: string;
  level: Level;
  category: Category;
  duration: number;
  sections: number;
  gradient: string;
}

export const LEVEL_LABELS: Record<Level, string> = {
  principiante: 'Principiante',
  intermedio: 'Intermedio',
  avanzado: 'Avanzado',
  experto: 'Experto',
};

export const CATEGORY_LABELS: Record<Category, string> = {
  'fundamentos-live': 'Fundamentos de LIVE',
  'crecimiento-audiencia': 'Crecimiento de audiencia',
  monetizacion: 'Maestría en monetización',
  'estrategia-contenido': 'Estrategia de contenido',
  'analitica-datos': 'Analítica y datos',
  'rendimiento-avanzado': 'Rendimiento avanzado',
  'negocios-marca': 'Negocios y marca',
};

export const LEVELS: Level[] = ['principiante', 'intermedio', 'avanzado', 'experto'];

export const CATEGORIES: Category[] = [
  'fundamentos-live',
  'crecimiento-audiencia',
  'monetizacion',
  'estrategia-contenido',
  'analitica-datos',
  'rendimiento-avanzado',
  'negocios-marca',
];

export const modules: Module[] = [
  // Fundamentos de LIVE (1-9)
  {
    id: 1,
    icon: '🏗️',
    title: 'La arquitectura de un LIVE perfecto',
    description:
      'Domina la estructura fundamental que separa a los streamers profesionales de los aficionados. Aprende el marco de apertura, desarrollo y cierre que mantiene a los espectadores enganchados.',
    level: 'principiante',
    category: 'fundamentos-live',
    duration: 45,
    sections: 7,
    gradient: 'from-violet-500 to-blue-500',
  },
  {
    id: 2,
    icon: '🎙️',
    title: 'Masterclass de equipo y configuración técnica',
    description:
      'Tu configuración técnica es la base de todo. Un audio deficiente arruina transmisiones más rápido que cualquier otro factor. Domina micrófonos, iluminación, cámaras y conexión.',
    level: 'principiante',
    category: 'fundamentos-live',
    duration: 60,
    sections: 6,
    gradient: 'from-pink-500 to-purple-500',
  },
  {
    id: 3,
    icon: '🧮',
    title: 'Entendiendo el algoritmo de TikTok LIVE',
    description:
      'El algoritmo no es tu enemigo — es tu herramienta de distribución más poderosa. Aprende cómo funciona el feed de LIVE, qué señales prioriza y cómo optimizar para máximo alcance.',
    level: 'intermedio',
    category: 'fundamentos-live',
    duration: 50,
    sections: 6,
    gradient: 'from-orange-400 to-pink-500',
  },
  {
    id: 4,
    icon: '🎨',
    title: 'Construyendo tu identidad de marca en LIVE',
    description:
      'Tu marca es lo que hace que los espectadores te elijan a TI sobre 50,000 otros creadores. Define tu voz, estética visual y propuesta de valor única.',
    level: 'principiante',
    category: 'fundamentos-live',
    duration: 55,
    sections: 5,
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    id: 5,
    icon: '💬',
    title: 'Dominando la dinámica de engagement en el chat',
    description:
      'El chat es el latido de tu transmisión en LIVE. Aprende la psicología del engagement en chat, técnicas de respuesta y cómo convertir espectadores pasivos en participantes activos.',
    level: 'intermedio',
    category: 'fundamentos-live',
    duration: 40,
    sections: 5,
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    id: 6,
    icon: '📅',
    title: 'Programación y ciencia de la consistencia',
    description:
      'La consistencia es el predictor más fuerte del éxito en LIVE. Este módulo revela la ciencia detrás de horarios óptimos, frecuencia y cómo construir hábitos de transmisión sostenibles.',
    level: 'principiante',
    category: 'fundamentos-live',
    duration: 35,
    sections: 5,
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    id: 7,
    icon: '🧠',
    title: 'Psicología del comportamiento del espectador en LIVE',
    description:
      'Entiende los patrones psicológicos profundos que impulsan el comportamiento del espectador en LIVE. Desde la atención hasta la lealtad, domina lo que hace que la gente se quede.',
    level: 'avanzado',
    category: 'fundamentos-live',
    duration: 55,
    sections: 5,
    gradient: 'from-purple-500 to-violet-600',
  },
  {
    id: 8,
    icon: '🌐',
    title: 'Estrategia LIVE multiplataforma',
    description:
      'Aunque TikTok LIVE es tu plataforma principal, entender el ecosistema multiplataforma amplifica tu alcance. Aprende sinergias entre TikTok, Instagram y YouTube.',
    level: 'intermedio',
    category: 'fundamentos-live',
    duration: 45,
    sections: 4,
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    id: 9,
    icon: '🪝',
    title: 'La fórmula del gancho viral para LIVE',
    description:
      'Tu gancho lo determina todo. Aprende las 12 fórmulas de gancho probadas que usan los mejores creadores de LIVE para capturar atención en los primeros 30 segundos.',
    level: 'intermedio',
    category: 'fundamentos-live',
    duration: 50,
    sections: 5,
    gradient: 'from-rose-500 to-pink-500',
  },

  // Crecimiento de audiencia (10-15)
  {
    id: 10,
    icon: '🔍',
    title: 'Descubrimiento orgánico y ubicación en el feed',
    description:
      'Haz que tu transmisión en VIVO llegue a millones sin gastar un centavo en anuncios. Domina el posicionamiento orgánico, señales de descubrimiento y optimización del feed.',
    level: 'avanzado',
    category: 'crecimiento-audiencia',
    duration: 55,
    sections: 5,
    gradient: 'from-violet-500 to-blue-500',
  },
  {
    id: 11,
    icon: '🤝',
    title: 'Estrategias de colaboración y funciones de invitados',
    description:
      'Aprovecha las colaboraciones para multiplicar tu alcance por 10. Aprende a encontrar, contactar y ejecutar VIVOS exitosos con otros creadores e invitados especiales.',
    level: 'intermedio',
    category: 'crecimiento-audiencia',
    duration: 45,
    sections: 8,
    gradient: 'from-pink-500 to-purple-500',
  },
  {
    id: 12,
    icon: '🎯',
    title: 'Convirtiendo espectadores en seguidores',
    description:
      'El botón de seguir es la acción más valiosa que puede realizar un espectador. Domina los disparadores psicológicos y momentos óptimos para convertir viewers en followers.',
    level: 'intermedio',
    category: 'crecimiento-audiencia',
    duration: 40,
    sections: 8,
    gradient: 'from-orange-400 to-pink-500',
  },
  {
    id: 13,
    icon: '👥',
    title: 'Construcción de comunidad a escala',
    description:
      'Crea una comunidad próspera que crezca por sí sola. Aprende sobre arquitectura de comunidad, sistemas de moderación y cultura que fideliza a tu audiencia.',
    level: 'avanzado',
    category: 'crecimiento-audiencia',
    duration: 60,
    sections: 8,
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    id: 14,
    icon: '🏷️',
    title: 'Estrategia de hashtags y SEO para VIVOS',
    description:
      'Optimiza tu visibilidad mediante el uso estratégico de hashtags, títulos optimizados para SEO y palabras clave que aumentan tu descubrimiento orgánico.',
    level: 'principiante',
    category: 'crecimiento-audiencia',
    duration: 35,
    sections: 8,
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    id: 15,
    icon: '🔄',
    title: 'Promoción cruzada y diseño de embudos',
    description:
      'Diseña embudos de audiencia que muevan sistemáticamente a las personas desde el descubrimiento hasta ser espectadores habituales y super fans leales.',
    level: 'avanzado',
    category: 'crecimiento-audiencia',
    duration: 50,
    sections: 8,
    gradient: 'from-amber-400 to-orange-500',
  },

  // Maestría en monetización (16-24)
  {
    id: 16,
    icon: '⏱️',
    title: 'Psicología de retención y tiempo de visualización',
    description:
      'El tiempo de visualización es la métrica reina. Aprende técnicas psicológicas avanzadas para mantener a los espectadores enganchados durante toda tu transmisión.',
    level: 'experto',
    category: 'monetizacion',
    duration: 55,
    sections: 8,
    gradient: 'from-purple-500 to-violet-600',
  },
  {
    id: 17,
    icon: '💎',
    title: 'Mecánicas y optimización de la economía de regalos',
    description:
      'Domina la economía de regalos de TikTok LIVE. Desde regalos básicos hasta universos, aprende las mecánicas que impulsan la generosidad de tu audiencia.',
    level: 'intermedio',
    category: 'monetizacion',
    duration: 50,
    sections: 8,
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    id: 18,
    icon: '💰',
    title: 'Optimización de ingresos por hora (RPH)',
    description:
      'Maximiza cuánto ganas por cada hora en LIVE. Aprende a calcular, rastrear y optimizar tu Revenue Per Hour con estrategias probadas de monetización.',
    level: 'avanzado',
    category: 'monetizacion',
    duration: 55,
    sections: 8,
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    id: 19,
    icon: '🤝',
    title: 'Negociación de acuerdos de marca para creadores de LIVE',
    description:
      'Cierra deals con marcas que valoren tu audiencia. Aprende negociación, tarifas, contratos y cómo posicionarte como partner premium para marcas.',
    level: 'avanzado',
    category: 'monetizacion',
    duration: 50,
    sections: 8,
    gradient: 'from-violet-500 to-blue-500',
  },
  {
    id: 20,
    icon: '📈',
    title: 'Construcción de flujos de ingresos recurrentes',
    description:
      'Deja de depender solo de regalos. Construye múltiples flujos de ingresos recurrentes: membresías, suscripciones, productos digitales y más.',
    level: 'experto',
    category: 'monetizacion',
    duration: 60,
    sections: 8,
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    id: 21,
    icon: '🛒',
    title: 'Integración de e-commerce en LIVE',
    description:
      'Vende productos directamente durante tus transmisiones. Domina la integración de tiendas, demostraciones en vivo y técnicas de conversión en tiempo real.',
    level: 'intermedio',
    category: 'monetizacion',
    duration: 45,
    sections: 8,
    gradient: 'from-pink-500 to-purple-500',
  },
  {
    id: 22,
    icon: '📊',
    title: 'Impuestos, finanzas y estructura de negocios',
    description:
      'El lado empresarial de ser creador. Entiende obligaciones fiscales, estructuras de negocio y finanzas personales para proteger y hacer crecer tus ingresos.',
    level: 'principiante',
    category: 'monetizacion',
    duration: 40,
    sections: 8,
    gradient: 'from-orange-400 to-pink-500',
  },
  {
    id: 23,
    icon: '🏆',
    title: 'Psicología de regalos premium',
    description:
      'La psicología detrás de regalos premium (Rosa, Universo, León). Entiende qué impulsa regalos de alto valor y cómo cultivar donadores premium.',
    level: 'experto',
    category: 'monetizacion',
    duration: 50,
    sections: 8,
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    id: 24,
    icon: '🏗️',
    title: 'Arquitectura del stack de monetización',
    description:
      'Diseña tu stack completo de monetización — capas de regalos, deals con marcas, merchandise, suscripciones y más en un sistema cohesivo.',
    level: 'experto',
    category: 'monetizacion',
    duration: 55,
    sections: 8,
    gradient: 'from-amber-400 to-orange-500',
  },

  // Estrategia de contenido (25-33)
  {
    id: 25,
    icon: '📋',
    title: 'Desarrollo de pilares de contenido',
    description:
      'Define los 3-5 pilares de contenido que serán la base de cada transmisión. Aprende cómo los pilares crean consistencia, identidad y crecimiento sostenible.',
    level: 'intermedio',
    category: 'estrategia-contenido',
    duration: 45,
    sections: 8,
    gradient: 'from-violet-500 to-blue-500',
  },
  {
    id: 26,
    icon: '🎮',
    title: 'Formatos de contenido interactivo',
    description:
      'Domina los formatos de contenido interactivo que generan el mayor engagement: encuestas, sesiones de Q&A, retos, juegos y dinámicas participativas.',
    level: 'intermedio',
    category: 'estrategia-contenido',
    duration: 50,
    sections: 8,
    gradient: 'from-pink-500 to-purple-500',
  },
  {
    id: 27,
    icon: '📖',
    title: 'Storytelling en LIVE',
    description:
      'Los creadores más poderosos son maestros narradores. Aprende arcos narrativos, construcción de tensión y técnicas emocionales que mantienen a la audiencia enganchada.',
    level: 'avanzado',
    category: 'estrategia-contenido',
    duration: 55,
    sections: 8,
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    id: 28,
    icon: '🔥',
    title: 'Trend jacking y relevancia cultural',
    description:
      'Súbete a las olas de tendencias sin perder tu identidad. Domina el arte del trend-jacking: adaptando lo viral a tu nicho y audiencia única.',
    level: 'intermedio',
    category: 'estrategia-contenido',
    duration: 40,
    sections: 8,
    gradient: 'from-orange-400 to-pink-500',
  },
  {
    id: 29,
    icon: '📅',
    title: 'Calendario de contenidos y sistemas de planificación',
    description:
      'Crea un sistema de planificación de contenido que elimine el problema de "¿qué debería transmitir hoy?" para siempre. Plantillas, workflows y herramientas.',
    level: 'principiante',
    category: 'estrategia-contenido',
    duration: 35,
    sections: 8,
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    id: 30,
    icon: '🎤',
    title: 'Creación de contenido impulsada por la audiencia',
    description:
      'Deja que tu audiencia dé forma a tu contenido. Aprende a usar encuestas, peticiones y ciclos de retroalimentación para crear lo que tu comunidad realmente quiere.',
    level: 'avanzado',
    category: 'estrategia-contenido',
    duration: 50,
    sections: 8,
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    id: 31,
    icon: '🎄',
    title: 'Programación estacional y basada en eventos',
    description:
      'Aprovecha los momentos de temporada, festividades y eventos culturales. Construye un calendario de contenido anual que capitalice cada oportunidad.',
    level: 'intermedio',
    category: 'estrategia-contenido',
    duration: 45,
    sections: 8,
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    id: 32,
    icon: '🧪',
    title: 'Marco de experimentación de contenido',
    description:
      'La innovación impulsa el crecimiento. Aprende a experimentar sistemáticamente con nuevos formatos, probar hipótesis y escalar lo que funciona.',
    level: 'avanzado',
    category: 'estrategia-contenido',
    duration: 50,
    sections: 8,
    gradient: 'from-purple-500 to-violet-600',
  },
  {
    id: 33,
    icon: '📊',
    title: 'Lectura de tu panel de analíticas en VIVO',
    description:
      'Entiende cada métrica en tu panel de analíticas. Desde gráficos de espectadores hasta desgloses de ingresos, aprende a interpretar tus datos.',
    level: 'principiante',
    category: 'estrategia-contenido',
    duration: 40,
    sections: 8,
    gradient: 'from-emerald-500 to-cyan-500',
  },

  // Analítica y datos (34-39)
  {
    id: 34,
    icon: '📈',
    title: 'Construcción de dashboards KPI personalizados',
    description:
      'Ve más allá de las analíticas nativas de TikTok. Construye dashboards personalizados que rastreen los KPIs específicos que impulsan TU crecimiento.',
    level: 'avanzado',
    category: 'analitica-datos',
    duration: 55,
    sections: 8,
    gradient: 'from-emerald-500 to-cyan-500',
  },
  {
    id: 35,
    icon: '🔬',
    title: 'Pruebas A/B para transmisiones en LIVE',
    description:
      'Aplica metodología científica de pruebas a tus transmisiones. Aprende a diseñar experimentos, controlar variables y tomar decisiones basadas en datos.',
    level: 'avanzado',
    category: 'analitica-datos',
    duration: 50,
    sections: 8,
    gradient: 'from-violet-500 to-blue-500',
  },
  {
    id: 36,
    icon: '🎯',
    title: 'Segmentación y análisis de espectadores',
    description:
      'No todos los espectadores son iguales. Aprende a segmentar tu audiencia por comportamiento, valor y nivel de engagement para estrategias personalizadas.',
    level: 'experto',
    category: 'analitica-datos',
    duration: 60,
    sections: 8,
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    id: 37,
    icon: '🔮',
    title: 'Analítica predictiva para streamers',
    description:
      'Usa datos históricos para predecir rendimiento futuro. Construye modelos de pronóstico para audiencia, ingresos y tendencias de crecimiento.',
    level: 'experto',
    category: 'analitica-datos',
    duration: 55,
    sections: 8,
    gradient: 'from-purple-500 to-violet-600',
  },
  {
    id: 38,
    icon: '🏅',
    title: 'Análisis competitivo y benchmarking',
    description:
      'Estudia a tus competidores sin copiarlos. Aprende enfoques sistemáticos para analizar a los mejores creadores en tu nicho y aplicar insights.',
    level: 'intermedio',
    category: 'analitica-datos',
    duration: 45,
    sections: 8,
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    id: 39,
    icon: '💹',
    title: 'Modelado de atribución de ingresos',
    description:
      'Entiende exactamente qué acciones generan ingresos. Construye modelos de atribución que conecten acciones específicas de streaming con resultados financieros.',
    level: 'experto',
    category: 'analitica-datos',
    duration: 50,
    sections: 8,
    gradient: 'from-emerald-500 to-teal-500',
  },

  // Rendimiento avanzado (40-45)
  {
    id: 40,
    icon: '🧭',
    title: 'Toma de decisiones basada en datos',
    description:
      'Convierte los datos en decisiones. Aprende marcos de trabajo para interpretar analíticas, evitar la parálisis por análisis y actuar con confianza.',
    level: 'avanzado',
    category: 'rendimiento-avanzado',
    duration: 45,
    sections: 8,
    gradient: 'from-emerald-500 to-cyan-500',
  },
  {
    id: 41,
    icon: '🧠',
    title: 'Mentalidad de alto rendimiento',
    description:
      'El juego mental de las transmisiones en VIVO. Desarrolla resiliencia, gestiona la ansiedad por el desempeño y prepara tu rutina pre-transmisión.',
    level: 'avanzado',
    category: 'rendimiento-avanzado',
    duration: 50,
    sections: 8,
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    id: 42,
    icon: '🎵',
    title: 'Entrenamiento de voz para streamers',
    description:
      'Tu voz es tu herramienta principal. Aprende calentamientos vocales, técnicas de proyección, modulación de energía y cuidado vocal para maratones.',
    level: 'intermedio',
    category: 'rendimiento-avanzado',
    duration: 45,
    sections: 8,
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    id: 43,
    icon: '🔬',
    title: 'Psicología avanzada de la audiencia',
    description:
      'Tácticas psicológicas profundas para creadores avanzados. Cascadas de prueba social, mecánicas de escasez y triggers emocionales de alto impacto.',
    level: 'experto',
    category: 'rendimiento-avanzado',
    duration: 60,
    sections: 8,
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    id: 44,
    icon: '🚨',
    title: 'Gestión de crisis en VIVO',
    description:
      'Cuando las cosas salen mal en un VIVO — y pasarán. Domina marcos de respuesta ante crisis para fallos técnicos, trolls, controversias y momentos difíciles.',
    level: 'avanzado',
    category: 'rendimiento-avanzado',
    duration: 40,
    sections: 8,
    gradient: 'from-orange-400 to-red-500',
  },
  {
    id: 45,
    icon: '🏃',
    title: 'Técnicas de streaming maratónico',
    description:
      'Las sesiones de streaming extendidas (2-6 horas) requieren técnicas especiales. Aprende gestión de energía, hidratación, breaks estratégicos y sostenibilidad.',
    level: 'experto',
    category: 'rendimiento-avanzado',
    duration: 55,
    sections: 8,
    gradient: 'from-amber-400 to-orange-500',
  },

  // Negocios y marca (46-50)
  {
    id: 46,
    icon: '🎬',
    title: 'El arte del cierre',
    description:
      'Cómo terminas tu transmisión determina si los espectadores regresan. Domina técnicas de cierre que crean anticipación, fidelizan y convierten en seguidores leales.',
    level: 'avanzado',
    category: 'negocios-marca',
    duration: 40,
    sections: 8,
    gradient: 'from-orange-400 to-pink-500',
  },
  {
    id: 47,
    icon: '🏢',
    title: 'Construyendo un negocio de creador',
    description:
      'Transición de creador a CEO. Construye la infraestructura empresarial — equipo, sistemas, legal, finanzas — que escala más allá de tu presencia personal.',
    level: 'experto',
    category: 'negocios-marca',
    duration: 65,
    sections: 8,
    gradient: 'from-violet-500 to-blue-500',
  },
  {
    id: 48,
    icon: '⭐',
    title: 'Marca personal más allá de LIVE',
    description:
      'Extiende tu marca de LIVE a una marca personal más amplia. Conferencias, consultoría, cursos, merchandise y oportunidades de medios tradicionales.',
    level: 'experto',
    category: 'negocios-marca',
    duration: 55,
    sections: 8,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 49,
    icon: '👔',
    title: 'Construcción de equipo y delegación',
    description:
      'No puedes escalar solo. Aprende cuándo y cómo contratar, qué delegar primero y cómo construir un equipo que multiplique tu impacto.',
    level: 'avanzado',
    category: 'negocios-marca',
    duration: 50,
    sections: 8,
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    id: 50,
    icon: '🌳',
    title: 'Legado y visión a largo plazo',
    description:
      'Construye algo que trascienda las tendencias. Define tu visión a 5 años, crea activos que se acumulen y diseña un legado duradero como creador.',
    level: 'experto',
    category: 'negocios-marca',
    duration: 45,
    sections: 8,
    gradient: 'from-elarbol-600 to-emerald-400',
  },
];

export const STATS = {
  modules: 50,
  hours: 42,
  categories: 7,
  completionRate: 94,
};
