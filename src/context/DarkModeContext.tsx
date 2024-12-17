import { createContext, ReactNode, useEffect, useReducer } from 'react';
import darkModeReducer, {
  DarkModeAction,
  DarkModeState,
} from './DarkModeReducer.tsx';

const INITIAL_STATE: DarkModeState = {
  darkMode: localStorage.getItem('theme') === 'dark',
};

// Theme colors object to use across components
export const themeColors = {
  dark: {
    background: 'from-gray-900 to-gray-800',
    text: 'text-gray-100',
    gradientText: 'from-cyan-400 via-blue-500 to-fuchsia-500',
    accent: 'from-blue-500 via-cyan-300 to-fuchsia-500',
    card: 'bg-gray-800/50 hover:bg-gray-700/50',
    border: 'border-gray-700/50',
    divider: 'via-cyan-500',
    hover: 'hover:text-cyan-400',
  },
  light: {
    background: 'from-gray-50 to-gray-100',
    text: 'text-gray-800',
    gradientText: 'from-orange-500 via-pink-500 to-purple-500',
    accent: 'from-orange-400 via-pink-500 to-purple-500',
    card: 'bg-white/50 hover:bg-orange-50',
    border: 'border-orange-100/50',
    divider: 'via-orange-500',
    hover: 'hover:text-orange-500',
  },
};

type DarkModeContextType = {
  darkMode: boolean;
  dispatch: React.Dispatch<DarkModeAction>;
};

export const DarkModeContext = createContext<DarkModeContextType>({
  darkMode: INITIAL_STATE.darkMode,
  dispatch: () => null,
});

type Props = {
  children: ReactNode;
};

export const DarkModeContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(darkModeReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem('theme', state.darkMode ? 'dark' : 'light');
  }, [state.darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
