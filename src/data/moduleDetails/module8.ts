import { ModuleDetailContent } from './types';

export const module8Detail: ModuleDetailContent = {
  heroDescription:
    'Aunque TikTok LIVE es tu plataforma principal, entender el ecosistema multiplataforma te permite maximizar el alcance y construir resiliencia. Aprende a reutilizar contenido LIVE en otras plataformas sin quemarte.',
  stats: [
    { label: 'Alcance total', value: '+340%', trend: 'up' },
    { label: 'Aumento de esfuerzo', value: '20%', trend: 'neutral' },
    { label: 'Multiplataforma', value: '6 plataformas', trend: 'up' },
  ],
  objectives: [
    'Mapea el panorama multiplataforma',
    'Construye estrategias específicas por plataforma',
    'Automatiza flujos de reutilización de contenido',
    'Crea flujos eficientes de reutilización de contenido',
    'Desarrolla embudos de audiencia cross-platform',
    'Mide el ROI multiplataforma',
  ],
  sections: [
    {
      title: 'Mapa del ecosistema de plataformas',
      paragraphs: [
        'TikTok LIVE debe ser tu "base de operaciones" — donde creas. Pero cada sesión LIVE genera contenido para 4+ plataformas. Una sesión LIVE de 1 hora puede producir: 5-10 clips de TikTok, 3-5 Reels de Instagram, 1-2 YouTube Shorts, 2-3 clips de Twitter/X y 1 episodio de podcast (solo audio).',
        'Los creadores que reutilizan contenido ven 340% más impresiones totales con solo 20% más esfuerzo. El principio clave: crea una vez, distribuye en todas partes. Tu transmisión LIVE es una fábrica de contenido — todo lo demás es empaquetado y distribución.',
      ],
    },
    {
      title: 'Comparación de ROI por plataforma',
      paragraphs: [
        'Ingresos por hora de esfuerzo de creación de contenido por plataforma. TikTok LIVE domina, pero el contenido reutilizado en otras plataformas crea crecimiento compuesto.',
      ],
      showChart: 'platform-roi',
    },
    {
      title: 'Flujo de reutilización de contenido',
      paragraphs: [
        'El sistema diario de reutilización de contenido. Tiempo adicional total: 30-45 minutos por día de transmisión.',
      ],
      animatedTimeline: true,
      timeline: [
        {
          time: 'Durante el stream',
          text: 'Usa un dispositivo separado para recortar highlights en tiempo real (o usa herramientas de IA como Opus Clip).',
        },
        {
          time: 'Post-stream (15 min)',
          text: 'Exporta los 5 mejores momentos como clips de formato corto. Agrega subtítulos usando CapCut.',
        },
        {
          time: 'Mismo día',
          text: 'Publica 2-3 clips en TikTok con sonidos en tendencia. Publica 1 en Instagram Reels.',
        },
        {
          time: 'Día siguiente',
          text: 'Publica los clips restantes en TikTok. Programa YouTube Shorts. Publica highlights en texto en Twitter/X.',
        },
        {
          time: 'Semanal (30 min)',
          text: 'Compila los mejores momentos en un video recap semanal. Crea 1 episodio de podcast a partir del audio.',
        },
      ],
    },
    {
      title: 'Checklist multiplataforma',
      checklist: [
        'Configura herramientas de auto-clip (Opus Clip, Gling o la función de clip integrada de TikTok)',
        'Construye un calendario de contenido para material reutilizado (usa Notion o Google Sheets)',
        'Mantén branding consistente en todas las plataformas (mismo handle, misma bio, misma estética)',
        'Configura un sistema simple de archivos para clips (por tema, fecha y plataforma)',
        'Crea plantillas de captions específicas por plataforma (TikTok: ganchos, Instagram: storytelling, YouTube: búsqueda)',
        'Rastrea qué plataformas traen espectadores de vuelta a tus sesiones LIVE',
        'Nunca transmitas en vivo simultáneamente en plataformas competidoras (divide tu audiencia)',
        'Agrupa tu trabajo de reutilización — hazlo todo en una sesión de 30 minutos, no a lo largo del día',
      ],
    },
  ],
};
