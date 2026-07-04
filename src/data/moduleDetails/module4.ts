import { ModuleDetailContent } from './types';

export const module4Detail: ModuleDetailContent = {
  heroDescription:
    'Tu marca es lo que hace que los espectadores te elijan a TI sobre 50,000 otros creadores transmitiendo en este momento. Este módulo te enseña a crear una identidad de marca memorable y consistente que convierte espectadores casuales en fans leales.',
  stats: [
    { label: 'Tasa de retorno', value: '+320%', trend: 'up' },
    { label: 'Recuerdo de marca', value: '78%', trend: 'up' },
    { label: 'Conv. de regalos', value: '+210%', trend: 'up' },
  ],
  objectives: [
    'Definir tu persona única como creador',
    'Diseñar consistencia visual de marca',
    'Crear tu apertura distintiva y frases clave',
    'Construir sistemas de reconocimiento de marca',
    'Crear conexiones emocionales de marca',
    'Desarrollar tu guía de voz de marca',
  ],
  sections: [
    {
      title: 'El framework de identidad de marca',
      paragraphs: [
        'Tu marca en LIVE se apoya en 4 pilares: Identidad Visual (lo que ven), Identidad Verbal (lo que escuchan), Identidad Emocional (lo que sienten) e Identidad de Valor (lo que obtienen).',
        'La mayoría de creadores se enfocan solo en elementos visuales, pero los datos muestran que la identidad verbal — tu voz, frases clave y estilo de comunicación — representa el 45% del recuerdo de marca. Los espectadores que pueden describir tu marca en 3 palabras tienen 8 veces más probabilidades de regresar.',
        'La perspectiva clave: tu marca no es lo que tú dices que es — es lo que los espectadores dicen cuando te describen a amigos. Empieza preguntando a tus espectadores actuales: "Si tuvieras que describir mi transmisión en 3 palabras a un amigo, ¿qué dirías?" Sus respuestas son tu marca real.',
        'La brecha entre sus respuestas y tu marca intencionada es tu trabajo de marca.',
      ],
    },
    {
      title: 'Recuerdo de marca por elemento',
      paragraphs: [
        'Lo que los espectadores recuerdan más de sus creadores de LIVE favoritos. La voz y el estilo de comunicación dominan, seguidos por el look visual.',
      ],
      showChart: 'brand-recall',
    },
    {
      title: 'Puntuación de consistencia de marca',
      paragraphs: [
        'Cómo el branding consistente impacta métricas clave en más de 200 creadores rastreados durante 6 meses.',
      ],
      comparisons: [
        'Branding consistente: 4.2x mayor tasa de espectadores recurrentes — los espectadores regresan cuando saben exactamente qué esperar',
        'Aperturas con marca: 67% más rápido en ramp-up de espectadores — aperturas familiares señalan al algoritmo que tu contenido es de alta calidad',
        'Frases clave distintivas: 3.8x mayor tasa de comentarios — a los espectadores les encanta repetir frases clave en el chat, lo que impulsa señales de engagement',
        'Plantillas visuales: 2.1x mayor conversión de regalos — el branding visual profesional aumenta el valor percibido y la disposición a regalar',
        'Consistencia de voz de marca: 5.1x más referidos boca a boca — una marca clara y memorable es más fácil de recomendar para los fans',
      ],
    },
    {
      title: 'Checklist de construcción de marca',
      checklist: [
        'Define 3 palabras que describan tu transmisión (escríbelas y ponlas donde puedas verlas)',
        'Crea una secuencia de apertura distintiva (menos de 15 segundos) que uses en CADA transmisión',
        'Diseña plantillas de overlay que coincidan con los colores de tu marca (usa Canva para plantillas gratis)',
        'Desarrolla 3-5 segmentos recurrentes o frases clave que los espectadores puedan anticipar',
        'Establece títulos de transmisión consistentes con tu nombre de marca y una propuesta de valor clara',
        'Usa la misma estética de perfil en todas las plataformas (TikTok, Instagram, YouTube)',
        'Crea un documento "biblia de marca" — colores, fuentes, frases, qué hacer y qué no hacer',
        'Graba tu apertura con marca y revísala — ¿se siente auténticamente como TÚ?',
        'Pregunta a 5 espectadores regulares que describan tu marca en 3 palabras — compara con tus 3 palabras',
      ],
    },
    {
      title: 'Construyendo tu voz de marca',
      paragraphs: [
        'Un proceso de 4 semanas para desarrollar y refinar tu voz de marca auténtica.',
      ],
      animatedTimeline: true,
      timeline: [
        {
          time: 'Semana 1',
          text: 'Audita a 10 de tus creadores favoritos. ¿Qué hace distintiva su voz? Anota rasgos específicos que admiras (no para copiar, sino para entender la mecánica).',
        },
        {
          time: 'Semana 2',
          text: 'Grábate hablando sobre 5 temas diferentes por 2 minutos cada uno. Escucha y identifica tus patrones naturales de comunicación — tu voz real.',
        },
        {
          time: 'Semana 3',
          text: 'Desarrolla 3 frases distintivas y 1 apertura distintiva. Pruébalas en transmisiones. Anota cuáles generan la respuesta más fuerte en el chat.',
        },
        {
          time: 'Semana 4',
          text: 'Consolida tu guía de voz de marca. Documenta: Cómo saludas a espectadores, cómo manejas la negatividad, cómo pides engagement, cómo cierras transmisiones. Sigue esta guía por 30 días.',
        },
      ],
    },
  ],
};
