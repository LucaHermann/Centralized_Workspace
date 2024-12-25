export const THEME_CONSTANTS = {
  ANIMATION_DURATION: 300,
  MIN_NAME_LENGTH: 3,
  MAX_COUNT: 10,
  MIN_COUNT: 0,
  TOAST_DURATION: 3000,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
} as const;

export const THEME_VARIANTS = {
  DARK: {
    BASE: 'dark',
    BACKGROUND: 'bg-gray-900 text-white',
    BACKGROUND_GRADIENT: 'from-gray-900 to-gray-800',
    TEXT: 'text-gray-100',
    TEXT_SECONDARY: 'text-gray-400',
    GRADIENT: 'from-cyan-400 via-blue-500 to-fuchsia-500',
    ACCENT: 'from-blue-500 via-cyan-300 to-fuchsia-500',
    CARD: 'bg-gray-800/50 hover:bg-gray-700/50',
    BORDER: 'border-gray-700/50',
    DIVIDER: 'via-cyan-500',
    HOVER: 'hover:text-cyan-400',
    INPUT: 'bg-gray-700 border-gray-600 focus:ring-cyan-500',
    MODAL: 'bg-gray-800/95 border-gray-700',
    BUTTON: {
      primary: 'bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 text-white hover:opacity-90',
      secondary: 'bg-gray-800 text-gray-100 hover:bg-gray-700',
      outline: 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10',
      ghost: 'text-gray-300 hover:bg-gray-800/50'
    },
  },
  LIGHT: {
    BASE: 'light',
    BACKGROUND: 'bg-white text-gray-900',
    BACKGROUND_GRADIENT: 'from-gray-50 to-gray-100',
    TEXT: 'text-gray-800',
    TEXT_SECONDARY: 'text-gray-600',
    GRADIENT: 'from-orange-500 via-pink-500 to-purple-500',
    ACCENT: 'from-orange-400 via-pink-500 to-purple-500',
    CARD: 'bg-white/50 hover:bg-orange-50',
    BORDER: 'border-orange-100/50',
    DIVIDER: 'via-orange-500',
    HOVER: 'hover:text-orange-500',
    INPUT: 'bg-gray-50 border-gray-200 focus:ring-orange-500',
    MODAL: 'bg-white/95 border-gray-200',
    BUTTON: {
      primary: 'bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white hover:opacity-90',
      secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
      outline: 'border-2 border-orange-500 text-orange-500 hover:bg-orange-50',
      ghost: 'text-gray-600 hover:bg-gray-100'
    },
  },
} as const; 
