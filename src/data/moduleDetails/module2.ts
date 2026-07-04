import { ModuleDetailContent } from './types';

export const module2Detail: ModuleDetailContent = {
  heroDescription:
    'Tu configuración técnica es la base de todo. Un audio deficiente arruina transmisiones más rápido que cualquier otra cosa. Este módulo cubre el stack de equipo exacto y las configuraciones usadas por creadores que ganan más de $5,000 USD al mes en LIVE.',
  stats: [
    { label: 'Impacto del audio', value: '+73%', trend: 'up' },
    { label: 'Presupuesto óptimo', value: '$300', trend: 'neutral' },
    { label: 'Tasa de fallos técnicos', value: '-85%', trend: 'down' },
  ],
  objectives: [
    'Seleccionar el equipo correcto para tu presupuesto',
    'Configurar audio e iluminación óptimos',
    'Configurar ángulos multicámara',
    'Solucionar problemas técnicos comunes',
    'Crear un entorno de transmisión profesional',
    'Construir redundancia en tu setup',
  ],
  sections: [
    {
      title: 'La jerarquía del equipo',
      paragraphs: [
        'El orden de prioridad para invertir en equipo es: Audio > Iluminación > Cámara > Fondo > Accesorios. La mayoría de principiantes cometen el error de invertir primero en calidad de cámara.',
        'Los datos muestran que los espectadores toleran menor calidad de video hasta por 12 minutos, pero un audio deficiente hace que el 73% de los espectadores se vayan en los primeros 30 segundos. Una mejora de micrófono de $50 USD puede aumentar tus ingresos promedio por sesión en un 40%.',
        '¿Por qué? Porque la calidad de audio impacta directamente la percepción de profesionalismo, lo que influye en el comportamiento de regalos. Los espectadores tienen 3 veces más probabilidades de regalar a creadores que suenan profesionales, sin importar la calidad de video. La segunda prioridad es iluminación — una buena iluminación hace que incluso la cámara de un teléfono se vea profesional.',
        'Un simple ring light ($25-40 USD) elimina sombras y crea el look brillante y uniforme que favorece el algoritmo de TikTok.',
      ],
    },
    {
      title: 'Inversión vs retorno de ingresos',
      paragraphs: [
        'Curva de ROI que muestra cómo la inversión en equipo se correlaciona con el crecimiento de ingresos. El punto ideal está entre $200-$500 USD de inversión total. Más allá de $1,000 USD, los rendimientos decrecientes aparecen a menos que hagas producción multicámara.',
      ],
      showChart: 'investment',
    },
    {
      title: 'Configuraciones de setup por nivel',
      paragraphs: [
        'Tres niveles de setup según presupuesto y objetivos. Empieza con Starter, sube a Growth en tu primer mes, y considera Pro solo cuando ganes de forma consistente.',
      ],
      tiers: [
        {
          label: 'Starter ($0-100 USD):',
          text: 'Teléfono + ring light + audífonos con cable. Es suficiente para empezar. Enfócate en calidad de contenido, no en calidad de equipo en esta etapa. Muchos creadores de $5,000 USD/mes empezaron exactamente con este setup.',
        },
        {
          label: 'Growth ($100-500 USD):',
          text: 'Micrófono externo (Rode Wireless Go II o similar) + luces softbox (2x) + soporte/tripode para teléfono + fondo simple. Aquí es donde la mayoría de creadores deberían invertir una vez que transmiten 3+ veces por semana.',
        },
        {
          label: 'Pro ($500+ USD):',
          text: 'Cámara DSLR/mirrorless + interfaz de audio + iluminación de 3 puntos + pantalla verde + stream deck + monitores duales. Solo invierte aquí cuando ganes $2,000+ USD/mes y estés listo para diferenciarte con calidad de producción.',
        },
      ],
    },
    {
      title: 'Guía de configuración de audio',
      paragraphs: [
        'Configuración de audio paso a paso para cada nivel. El audio es tu prioridad #1 — sigue estos pasos con precisión.',
      ],
      audioSteps: [
        { text: 'Prueba tu audio actual grabando un clip de 30 segundos y escúchalo con audífonos. Califícalo del 1 al 10.' },
        { text: 'Si está por debajo de 7/10, invierte en un micrófono lavalier de clip ($15-30 USD) como tu primera mejora.' },
        { text: 'Posiciona el micrófono a 15-20 cm de tu boca, inclinado ligeramente para evitar plosivas (sonidos p/b).' },
        { text: 'Prueba los niveles de audio — quieres niveles consistentes entre -12dB y -6dB. Evita el clipping a toda costa.' },
        { text: 'Elimina ruido de fondo — cierra ventanas, apaga ventiladores, agrega textiles suaves para reducir eco.' },
        { text: 'Sube a un sistema de micrófono inalámbrico (Rode Wireless Go II, $150 USD) cuando transmitas 5+ veces por semana.' },
      ],
    },
    {
      title: 'Guía de solución de problemas técnicos',
      checklist: [
        'Ancho de banda: Mínimo 10 Mbps de subida (prueba en speedtest.net antes de cada transmisión)',
        'Latencia: Usa conexión ethernet cableada cuando sea posible — WiFi agrega 20-50ms de latencia',
        'Sincronización de audio: Revisa retraso Bluetooth — siempre usa audio cableado para streaming',
        'Sobrecalentamiento: Quita la funda del teléfono durante transmisiones de más de 30 minutos',
        'Batería: Siempre transmite conectado — nunca confíes solo en la batería',
        'Notificaciones: Activa No Molestar y desactiva todas las notificaciones emergentes',
        'Almacenamiento: Asegura 2GB+ de espacio libre en el dispositivo antes de transmitir',
        'Actualizaciones: Actualiza la app de TikTok antes de transmitir — no durante',
        'Reiniciar dispositivo: Reinicia el teléfono 10 minutos antes de iniciar para liberar memoria',
        'Plan de respaldo: Ten un dispositivo secundario listo en caso de fallo técnico',
      ],
    },
    {
      title: 'Dominio de la iluminación',
      paragraphs: [
        'Setups de iluminación comparados por costo e impacto en calidad. La iluminación correcta puede hacer que un teléfono de $200 se vea mejor que una cámara de $2,000 con mala luz.',
      ],
      bullets: [
        {
          label: 'Ring Light ($25-40 USD):',
          text: 'Mejor opción para empezar. Crea luz uniforme y favorecedora. Posiciónalo a la altura de los ojos, a 60-90 cm de tu rostro. Evita usarlo como única fuente — agrega una ventana o segunda lámpara para reducir el look "plano".',
        },
        {
          label: 'Softbox de 2 puntos ($60-120 USD):',
          text: 'Look profesional con profundidad. Luz principal a 45° de tu rostro, luz de relleno al otro lado al 50% de intensidad. Esto elimina sombras duras mientras crea dimensión.',
        },
        {
          label: 'Setup de 3 puntos ($150-300 USD):',
          text: 'Calidad de broadcast. Luz principal (más fuerte), luz de relleno (50%), luz trasera/de cabello (30%). La luz trasera te separa del fondo y agrega un "glow" profesional.',
        },
        {
          label: 'Luz natural (Gratis):',
          text: 'Posiciónate frente a una ventana grande. Mejor durante la "hora dorada" (1 hora antes del atardecer). Usa un reflector (un cartulina blanca funciona) para rellenar sombras del lado opuesto.',
        },
      ],
    },
  ],
};
