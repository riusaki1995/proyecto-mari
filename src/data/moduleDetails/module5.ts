import { ModuleDetailContent } from './types';

export const module5Detail: ModuleDetailContent = {
  heroDescription:
    'El chat es el latido de tu transmisión en LIVE. Aprende la psicología del engagement en chat, cómo manejar conversaciones de alto volumen, lidiar con trolls y crear una cultura de chat adictiva que mantiene a los espectadores enganchados.',
  stats: [
    { label: 'Tiempo de visualización', value: '+38%', trend: 'up' },
    { label: 'Tasa de chat', value: '12/min', trend: 'neutral' },
    { label: 'Toxicidad', value: '-90%', trend: 'down' },
  ],
  objectives: [
    'Entender patrones de psicología del chat',
    'Dominar el ritmo de engagement',
    'Manejar chat negativo de forma efectiva',
    'Construir comunidad a través de cultura de chat',
    'Crear segmentos de contenido impulsados por el chat',
    'Desarrollar sistemas de moderación',
  ],
  sections: [
    {
      title: 'El ritmo de engagement en el chat',
      paragraphs: [
        'Los creadores de élite siguen un ritmo 3-2-1: cada 3 minutos haz una pregunta, cada 2 minutos reconoce a un espectador específico, cada 1 minuto responde a un comentario. Esto crea un loop de engagement predecible con el que los espectadores se sincronizan subconscientemente, aumentando el tiempo promedio de visualización en un 38%.',
        'La perspectiva clave: el engagement en chat no es reactivo — es proactivo y orquestado. No esperas a que el chat esté activo; lo haces activo mediante prompts consistentes. Piensa en ti como un conductor de talk show, no como un conferencista.',
        'Los mejores creadores de LIVE dedican el 60% de su tiempo a interactuar con el chat y el 40% a entregar contenido. La mayoría de creadores en dificultades tienen esta proporción invertida.',
      ],
    },
    {
      title: 'Engagement vs tiempo de visualización',
      paragraphs: [
        'Correlación entre frecuencia de interacción en chat y retención de espectadores. Hay un punto ideal — muy poco engagement y los espectadores se van, demasiado y la calidad del contenido cae.',
      ],
      showChart: 'engagement',
    },
    {
      title: 'Framework de manejo de trolls',
      paragraphs: [
        'Cómo manejar diferentes tipos de chat negativo sin descarrilar tu transmisión o tu energía.',
      ],
      comparisons: [
        'Crítica leve: Reconoce y redirige con humor — "¡Buen punto! Pero esto es lo que pienso..." Esto muestra confianza y a menudo convierte críticos en fans.',
        'Trolls persistentes: Una advertencia calmada, luego silenciar. Nunca discutas — discutir les da lo que quieren (atención) y te hace ver mal ante otros espectadores.',
        'Spam: Configura filtros de palabras clave antes de transmitir. Los filtros integrados de TikTok capturan la mayoría del spam. Agrega filtros personalizados para términos específicos de tu nicho.',
        'Temas controvertidos: Desvía con "Buena pregunta — enfoquémonos en [tema]". Nunca te involucres con provocaciones políticas/religiosas durante transmisiones.',
        'Ataques personales: Silencia de inmediato. Sin advertencia. Luego di "Aquí mantenemos lo positivo" y sigue adelante. No te detengas más de 5 segundos en ello.',
      ],
    },
    {
      title: 'Constructores de cultura de chat',
      checklist: [
        'Crea un saludo único para nuevos que se unen (ej. "¡Bienvenido al squad!")',
        'Establece bromas internas solo para el chat que los regulares usarán',
        'Usa nombres de espectadores frecuentemente — mínimo 3 veces por minuto en pico de engagement',
        'Crea retos o juegos de chat (ej. "La primera persona en escribir X gana un shoutout")',
        'Recompensa a quienes chatean activamente con menciones y reconocimiento',
        'Establece reglas de chat visualmente en stream o en tu bio',
        'Crea un "muro de la fama del chat" para tus espectadores más activos',
        'Usa comentarios fijados para marcar el tono y guiar conversaciones',
        'Desarrolla emojis de chat o respuestas codificadas que use tu comunidad',
      ],
    },
    {
      title: 'Técnicas de engagement por cantidad de espectadores',
      paragraphs: [
        'Diferentes cantidades de espectadores requieren diferentes estrategias de engagement. Lo que funciona con 50 espectadores falla con 500.',
      ],
      tiers: [
        {
          label: '1-20 espectadores:',
          text: 'Hazlo íntimo. Usa el nombre de cada espectador. Ten conversaciones, no monólogos. Esta es tu fase de construcción de base.',
        },
        {
          label: '20-50 espectadores:',
          text: 'Empieza a usar disparadores de engagement estructurados (encuestas, preguntas). No puedes atender a todos individualmente, así que crea momentos de engagement grupal.',
        },
        {
          label: '50-200 espectadores:',
          text: 'Despliega el ritmo 3-2-1. Usa moderadores de chat. Enfócate en reconocer a quienes regalan y chatean consistentemente por nombre.',
        },
        {
          label: '200-500 espectadores:',
          text: 'Cambia a "modo conductor". Usa funciones interactivas (Q&A, encuestas) como tu herramienta principal de engagement. Aborda temas del chat, no mensajes individuales.',
        },
        {
          label: '500+ espectadores:',
          text: 'Estás manejando una multitud. Usa comandos claros de engagement ("Escribe 1 si..."), responde a regalos y crea momentos que hagan estallar el chat juntos.',
        },
      ],
    },
  ],
};
