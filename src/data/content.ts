export const WHATSAPP_NUMBER = '522202079074';
export const PANEL_URL = 'https://livecoins.onrender.com';
export const PREMIUM_PRICE = '$12 USD';

export function whatsappBuyUrl(username = '') {
  const msg = `Hola, quiero comprar el Plan Premium (${PREMIUM_PRICE}/mes) de Livecoins.${username ? ` Mi usuario es: ${username}` : ''}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export const stats = [
  { value: '40+', label: 'Overlays para OBS' },
  { value: '15+', label: 'Minijuegos conectados' },
  { value: '∞', label: 'Acciones con Premium' },
  { value: '3:4', label: 'Formato TikTok LIVE' },
];

export const features = [
  {
    icon: '🎮',
    title: 'Regalos → Acciones en juego',
    desc: 'Cada rosa, león o regalo dispara spawns, efectos y comandos en tiempo real dentro del juego.',
  },
  {
    icon: '📺',
    title: 'Overlays listos para OBS',
    desc: 'Copia el enlace, pégalo en OBS o TikTok Studio. Contadores, metas, batallas y alertas visuales.',
  },
  {
    icon: '🔊',
    title: 'Alertas de sonido y video',
    desc: 'Personaliza qué regalo reproduce un sonido, imagen o clip en tu stream.',
  },
  {
    icon: '⚔️',
    title: 'Batallas de regalos y likes',
    desc: 'Competencias en vivo con barras animadas que enganchan al chat.',
  },
  {
    icon: '🔗',
    title: 'Webhook y TTS',
    desc: 'Integra herramientas externas y deja que TikTok lea los mensajes en voz alta.',
  },
  {
    icon: '💻',
    title: 'App de escritorio (.exe)',
    desc: 'Ejecuta juegos locales desde tu PC con relay a la nube. Ideal para streamers pro.',
  },
];

export type GameItem = {
  id: string;
  name: string;
  emoji: string;
  desc: string;
  gradient: string;
  premium?: boolean;
  tags: string[];
};

export const games: GameItem[] = [
  { id: 'minecraft', name: 'Minecraft Java', emoji: '⛏️', desc: 'RCON, ServerTap y mods interactivos.', gradient: 'from-green-600/40 to-emerald-900/60', tags: ['RCON', 'Mods'] },
  { id: 'mcparkour', name: 'MC Parkour', emoji: '🏃', desc: 'Obstáculos y spawns con regalos.', gradient: 'from-lime-500/30 to-green-900/50', tags: ['Parkour'] },
  { id: 'mckoth', name: 'MC KOTH', emoji: '👑', desc: 'Rey de la colina controlado por viewers.', gradient: 'from-yellow-500/30 to-orange-900/50', tags: ['PvP'] },
  { id: 'mcfarm', name: 'MC Farm', emoji: '🌾', desc: 'Granja interactiva en directo.', gradient: 'from-amber-500/30 to-yellow-900/50', tags: ['Survival'] },
  { id: 'mcshooter', name: 'MC Shooter', emoji: '🔫', desc: 'Disparos y efectos con el chat.', gradient: 'from-red-500/30 to-rose-900/50', tags: ['Action'] },
  { id: 'bedrock', name: 'Minecraft Bedrock', emoji: '🪨', desc: 'Conexión con mundos Bedrock.', gradient: 'from-teal-500/30 to-cyan-900/50', tags: ['Bedrock'] },
  { id: 'sandbox', name: 'MC Sandbox', emoji: '🧱', desc: 'Modo creativo interactivo.', gradient: 'from-sky-500/30 to-blue-900/50', tags: ['Creative'] },
  { id: 'roblox', name: 'Roblox', emoji: '🟥', desc: 'Teclas y acciones remotas.', gradient: 'from-red-600/40 to-gray-900/60', tags: ['Keys'] },
  { id: 'mario', name: 'Mario SMBX2', emoji: '🍄', desc: 'Spawns de enemigos y power-ups.', gradient: 'from-red-500/40 to-blue-900/60', tags: ['Platform'] },
  { id: 'smb3', name: 'Super Mario Bros 3', emoji: '🎮', desc: 'Acciones clásicas en NES.', gradient: 'from-orange-500/40 to-red-900/60', tags: ['Retro'] },
  { id: 'mari0', name: 'Mari0', emoji: '🌀', desc: 'Portales y power-ups con regalos.', gradient: 'from-blue-500/40 to-purple-900/60', tags: ['Portal'] },
  { id: 'pvz', name: 'Plants vs Zombies', emoji: '🌻', desc: 'Zombies, soles y comandos toolkit.', gradient: 'from-lime-500/40 to-green-900/60', tags: ['Tower'] },
  { id: 'pvzhybrid', name: 'PvZ Hybrid', emoji: '🧟', desc: 'Versión hybrid con PvZ Tools.', gradient: 'from-purple-500/40 to-green-900/60', premium: true, tags: ['Premium'] },
  { id: 'repo', name: 'R.E.P.O.', emoji: '👻', desc: 'Spawns y caos cooperativo.', gradient: 'from-violet-500/40 to-indigo-900/60', premium: true, tags: ['Horror'] },
  { id: 'l4d', name: 'Left 4 Dead 2', emoji: '🧟‍♂️', desc: 'Infectados y eventos en partida.', gradient: 'from-red-700/40 to-gray-900/60', premium: true, tags: ['Co-op'] },
  { id: 'ctr', name: 'Crash Team Racing', emoji: '🏎️', desc: 'Ítems y efectos en carrera.', gradient: 'from-orange-500/40 to-yellow-900/60', premium: true, tags: ['Racing'] },
  { id: 'gdash', name: 'Geometry Dash', emoji: '🔷', desc: 'Efectos sincronizados al ritmo.', gradient: 'from-cyan-500/40 to-blue-900/60', premium: true, tags: ['Rhythm'] },
  { id: 'mslug', name: 'Metal Slug', emoji: '💣', desc: 'Acciones del overlay oficial.', gradient: 'from-yellow-500/40 to-orange-900/60', tags: ['Arcade'] },
];

export type OverlayItem = {
  id: string;
  name: string;
  emoji: string;
  desc: string;
  preview: 'counter' | 'battle' | 'join' | 'meta' | 'gift' | 'rank' | 'timer';
  accent: string;
};

export const overlays: OverlayItem[] = [
  { id: 'joinlive', name: 'Join Live', emoji: '🔴', desc: 'Animación de bienvenida al entrar al live.', preview: 'join', accent: '#ff2d87' },
  { id: 'winscounter', name: 'Contador de victorias', emoji: '🏆', desc: 'Lleva la cuenta de wins en pantalla.', preview: 'counter', accent: '#fbbf24' },
  { id: 'giftvs', name: 'Batalla de regalos', emoji: '⚔️', desc: 'Dos bandos compiten con regalos en vivo.', preview: 'battle', accent: '#a855f7' },
  { id: 'batallalikes', name: 'Batalla de likes', emoji: '❤️', desc: 'Barra VS animada con likes del chat.', preview: 'battle', accent: '#ff2d87' },
  { id: 'meta', name: 'Meta de monedas', emoji: '🎯', desc: 'Progreso hacia tu meta del stream.', preview: 'meta', accent: '#00f0ff' },
  { id: 'topdonor', name: 'Top donador', emoji: '👑', desc: 'Destaca al mejor donador del live.', preview: 'rank', accent: '#fbbf24' },
  { id: 'giftshowcase', name: 'Showcase de regalos', emoji: '🎁', desc: 'Muestra regalos recibidos con estilo.', preview: 'gift', accent: '#a855f7' },
  { id: 'alertaregalo', name: 'Alerta de regalo', emoji: '🔔', desc: 'Pop-up cuando llega un regalo.', preview: 'gift', accent: '#00f0ff' },
  { id: 'timer', name: 'Timer interactivo', emoji: '⏱️', desc: 'Cuenta regresiva que suma tiempo con interacción.', preview: 'timer', accent: '#22c55e' },
  { id: 'toplikes', name: 'Top likes', emoji: '📊', desc: 'Ranking de likes en tiempo real.', preview: 'rank', accent: '#ff2d87' },
  { id: 'coinmatch', name: 'Coin Match', emoji: '🪙', desc: 'Minijuego visual de monedas en overlay.', preview: 'counter', accent: '#fbbf24' },
  { id: 'joinlivemc', name: 'Join Live Minecraft', emoji: '⛏️', desc: 'Bienvenida temática Minecraft.', preview: 'join', accent: '#22c55e' },
];

export const appTabs = [
  { id: 'juegos', label: 'Juegos', icon: '🎮' },
  { id: 'overlays', label: 'Overlays', icon: '📺' },
  { id: 'alertas', label: 'Alertas', icon: '🔊' },
  { id: 'batallas', label: 'Batallas', icon: '⚔️' },
  { id: 'webhook', label: 'Webhook', icon: '🔗' },
] as const;

export type AppTabId = (typeof appTabs)[number]['id'];

export const planFree = [
  'Alertas de sonido (hasta 5)',
  'Videos y batallas básicas',
  'Overlays esenciales',
  'Juegos principales (Mario, PvZ, MC…)',
  '1 perfil de configuración',
];

export const planPremium = [
  'Todo ilimitado — sin topes',
  'PvZ Hybrid, R.E.P.O., L4D2, CTR, GD',
  '40+ overlays desbloqueados',
  'TTS de TikTok',
  'Perfiles ilimitados',
  'Soporte prioritario',
];
