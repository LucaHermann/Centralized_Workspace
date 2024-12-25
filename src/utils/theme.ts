import { themeColors } from '../context/DarkModeContext';

type ThemeVariant = 'primary' | 'secondary' | 'outline';

export const getButtonStyles = (darkMode: boolean, variant: ThemeVariant) => {
  const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg';

  const styles = {
    primary: darkMode
      ? 'bg-cyan-500 hover:bg-cyan-600 text-white disabled:bg-gray-600'
      : 'bg-orange-500 hover:bg-orange-600 text-white disabled:bg-gray-300',
    secondary: darkMode
      ? 'bg-gray-700 hover:bg-gray-600 text-gray-100 disabled:bg-gray-800'
      : 'bg-gray-100 hover:bg-gray-200 text-gray-900 disabled:bg-gray-100',
    outline: darkMode
      ? 'border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500/10'
      : 'border-2 border-orange-500 text-orange-500 hover:bg-orange-500/10'
  };

  return `${baseStyles} ${styles[variant]}`;
};

export const useTheme = (darkMode: boolean) => {
  const theme = darkMode ? themeColors.dark : themeColors.light;
  return {
    theme,
    isDark: darkMode,
    getStyles: (variant: ThemeVariant) => getButtonStyles(darkMode, variant)
  };
}; 
