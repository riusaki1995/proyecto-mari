import { ModuleDetailContent } from './types';

export const module1Detail: ModuleDetailContent = {
  heroDescription:
    'Domina la estructura fundamental que separa a los streamers profesionales de los aficionados. Aprende a diseñar cada segundo de tu transmisión para maximizar la retención, el engagement y los ingresos.',
  stats: [
    { label: 'Incremento promedio de retención', value: '+220%' },
    { label: 'Impacto en ingresos', value: '+589%' },
    { label: 'Calidad de sesión', value: 'A+' },
  ],
  objectives: [
    'Comprender la arquitectura de 5 fases',
    'Dominar los primeros 60 segundos de oro',
    'Implementar el enfoque de retención primero',
    'Construir tu checklist pre-transmisión',
    'Diseñar tu plantilla de flujo de transmisión',
    'Crear tu estructura de transmisión distintiva',
  ],
  sections: [
    {
      title: 'La arquitectura de transmisión en 5 fases',
      paragraphs: [
        'Cada transmisión en LIVE exitosa sigue una arquitectura predecible de cinco fases: Gancho, Construcción, Pico, Sostenimiento y Cierre. La mayoría de los creadores improvisan — y pierden espectadores en cada transición. Los profesionales diseñan cada fase con intención.',
        'La fase de Gancho (0–60 segundos) determina si alguien se queda o se va. La fase de Construcción (1–5 minutos) establece rapport y contexto. El Pico (5–15 minutos) entrega tu contenido de mayor valor. Sostenimiento (15–30 minutos) mantiene el momentum con engagement. El Cierre (últimos 2–3 minutos) convierte espectadores en seguidores.',
        'Cuando dominas esta arquitectura, dejas de preguntarte "¿qué hago ahora?" durante tu transmisión. Cada minuto tiene un propósito. Cada transición es intencional. Tus espectadores lo sienten — y se quedan más tiempo.',
      ],
    },
    {
      title: 'Retención de espectadores por fase',
      paragraphs: [
        'La retención promedio de espectadores a través de las 5 fases muestra un punto crítico de abandono en el minuto 2. Los creadores que dominan la fase de gancho retienen 3.2 veces más espectadores durante toda la sesión. Los datos a continuación están agregados de más de 10,000 transmisiones en LIVE en nuestra red de creadores.',
      ],
      showChart: 'retention' as const,
    },
    {
      title: 'Checklist pre-transmisión',
      checklist: [
        'Iluminación posicionada a 45° para óptima iluminación facial',
        'Audio probado — mantener entre -12dB y -6dB para claridad',
        'Fondo limpio, con marca y sin distracciones',
        'Título de transmisión optimizado con palabras clave en tendencia y propuesta de valor clara',
        'Primeros 3 puntos de conversación preparados y ensayados',
        'Ganchos de engagement scripteados para los minutos 1, 5 y 15',
        'Meta de regalos definida, visible y ligada a una recompensa específica',
        'Notificación enviada a seguidores 15 min antes de iniciar',
        'Teléfono/dispositivo cargado arriba del 80% y conectado',
        'Modo No Molestar activado para evitar interrupciones',
        'Agua y cualquier accesorio al alcance de la mano',
        'Transmisión de prueba de 30 segundos para verificar calidad',
      ],
    },
    {
      title: 'Comparación de rendimiento por fase',
      paragraphs: [
        'Las transmisiones estructuradas vs. no estructuradas muestran resultados dramáticamente diferentes en cada métrica. Estos datos provienen de un estudio controlado con 50 creadores — 25 usando nuestra arquitectura de 5 fases, 25 transmitiendo sin estructura.',
      ],
      comparisons: [
        'Estructurado: 68% retención promedio vs No estructurado: 31% — una mejora del 119%',
        'Estructurado: $124/hr ingresos vs No estructurado: $18/hr — una mejora del 589%',
        'Estructurado: 45 min tiempo promedio de visualización vs No estructurado: 8 min — una mejora del 463%',
        'Estructurado: 12 comentarios/min vs No estructurado: 3 comentarios/min — una mejora del 300%',
        'Estructurado: 78% tasa de espectadores recurrentes vs No estructurado: 22% — una mejora del 255%',
      ],
    },
    {
      title: 'Los 60 segundos de oro',
      paragraphs: [
        'Tus primeros 60 segundos son el minuto más importante de toda tu transmisión. En este tiempo, los espectadores deciden si te quedan o se van — y el 73% de quienes se van lo hacen en el minuto 2. Segundos 0–5: saludo energético + declaración de valor ("Hoy vas a aprender..."). Segundos 5–15: pregunta interactiva que exige respuesta en el chat.',
        'Pregunta algo que exija una respuesta — no "¿cómo están?" sino "Escribe 1 si eres nuevo y 2 si ya me has visto antes." Esto activa el chat y crea inversión psicológica. Segundos 15–30: preview de lo que viene ("En los próximos 30 minutos vamos a..."). Segundos 30–45: primer momento de engagement — reconoce a los primeros espectadores por nombre.',
        'Menciona tu comunidad, victorias recientes o algo personal que conecte. Segundos 45–60: establece el tono y las reglas ("Este es un espacio positivo, interactúa en el chat y..."). Los creadores que siguen este framework tienen 3.2 veces más retención a los 5 minutos.',
      ],
    },
    {
      title: 'Plantilla de flujo de transmisión',
      paragraphs: [
        'Usa esta plantilla minuto a minuto para tus primeras 10 transmisiones. Después, personalízala según tus datos.',
      ],
      timeline: [
        { time: '0-1 min', text: 'Secuencia de gancho (usa el framework de los 60 segundos de oro)' },
        {
          time: '1-5 min',
          text: 'Construir rapport — responde al chat, reconoce nuevos espectadores, comparte una historia personal breve',
        },
        {
          time: '5-10 min',
          text: 'Entrega el primer bloque de contenido — debe ser tu segmento planificado más fuerte',
        },
        {
          time: '10-15 min',
          text: 'Primer juego de engagement o segmento interactivo (encuesta, Q&A, reto)',
        },
        { time: '15-20 min', text: 'Contenido pico — tu segmento más valioso o entretenido' },
        {
          time: '20-30 min',
          text: 'Ventana de monetización — metas de regalos, menciones, interacciones premium',
        },
        { time: '30-40 min', text: 'Segundo bloque de contenido o segmento de peticiones de la audiencia' },
        { time: '40-45 min', text: 'Cierre gradual — resume lo destacado, adelanta la próxima transmisión' },
        {
          time: '45-50 min',
          text: 'Secuencia de cierre — llamada a la acción (seguir, compartir, activar notificaciones)',
        },
      ],
    },
  ],
  implementationDescription:
    'Sigue estos pasos exactamente en tu primera semana para implementar la arquitectura de 5 fases.',
  implementationSteps: [
    'Escribe tu script de gancho de 60 segundos. Ensáyalo 5 veces antes de transmitir.',
    'Crea un outline de transmisión con 3-5 bloques de contenido. Asigna cada uno a una fase.',
    'Configura timers en tu teléfono para cada transición de fase (visibles solo para ti).',
    'Graba tu primera transmisión estructurada. Revísala a 2x velocidad inmediatamente después.',
    'Anota los momentos exactos donde los espectadores se unieron, se fueron, chatearon y regalaron.',
    'Ajusta tu plantilla según los datos. Repite durante 5 transmisiones consecutivas.',
  ],
};
