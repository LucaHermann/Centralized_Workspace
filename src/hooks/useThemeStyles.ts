import { useContext, useMemo } from 'react';
import { THEME_VARIANTS } from '../constants/theme';
import { DarkModeContext } from '../context/DarkModeContext';

type ButtonVariantType = 'primary' | 'secondary' | 'outline' | 'ghost';

export const useThemeStyles = () => {
  const { darkMode } = useContext(DarkModeContext);

  return useMemo(() => {
    const theme = THEME_VARIANTS[darkMode ? 'DARK' : 'LIGHT'];

    return {
      theme,
      getGradientText: (animate = false) => `
        bg-clip-text text-transparent bg-gradient-to-r
        ${theme.GRADIENT}
        ${animate ? 'animate-text bg-300% bg-gradient-text' : ''}
      `,
      getHeroTitle: () => `
        text-5xl md:text-7xl lg:text-9xl mb-8 font-bold 
        text-transparent bg-clip-text animate-text 
        bg-gradient-text bg-300% bg-gradient-to-r 
        ${theme.GRADIENT}
      `,
      getSectionTitle: () => `
        text-3xl font-bold bg-clip-text 
        text-transparent bg-gradient-to-r 
        ${theme.GRADIENT} animate-text
      `,
      getCardTitle: (className?: string) => `
        ${className || 'text-xl'} 
        font-bold animate-text 
        bg-clip-text text-transparent 
        bg-gradient-to-r ${theme.GRADIENT}
      `,
      getHeaderTitle: () => `
        text-3xl font-bold bg-clip-text 
        animate-pulse-slow text-transparent 
        bg-gradient-to-r ${theme.GRADIENT}
      `,
      getBackgroundGradient: () => `
        min-h-screen bg-gradient-to-br 
        ${theme.BACKGROUND_GRADIENT} 
        ${theme.TEXT}
      `,
      getCardStyles: () => `
        ${theme.CARD}
        ${theme.BORDER}
        backdrop-blur-sm
        transition-all duration-300
        hover:transform hover:scale-102 
        hover:shadow-2xl
        ${theme.BASE === 'dark' ? 'hover:shadow-blue-500/30' : 'hover:shadow-blue-200/40'}
      `,
      getButtonStyles: (variant: ButtonVariantType = 'primary') => `
        px-4 py-2 rounded-lg font-medium
        transition-all duration-300
        focus:outline-none focus:ring-2
        focus:ring-offset-2 focus:ring-offset-${theme.BASE === 'dark' ? 'gray-900' : 'white'}
        focus:ring-${theme.BASE === 'dark' ? 'cyan' : 'orange'}-500
        disabled:opacity-50 disabled:cursor-not-allowed
        ${theme.BUTTON[variant]}
      `,
    };
  }, [darkMode]);
}; 
