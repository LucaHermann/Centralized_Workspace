import { useContext } from 'react';
import { DarkModeContext, themeColors } from '../../context/DarkModeContext';

export const ImageCard = ({
  title,
  imageUrl,
}: {
  title: string;
  imageUrl: string;
}) => {
  const { darkMode } = useContext(DarkModeContext);
  const theme = darkMode ? themeColors.dark : themeColors.light;

  return (
    <div
      className={`
        w-full max-w-sm aspect-[3/4] // Fixed aspect ratio
        ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}
        rounded-xl overflow-hidden
        transition-all duration-300 ease-in-out
        hover:transform hover:scale-102 hover:shadow-2xl
        ${darkMode ? 'hover:shadow-blue-500/30' : 'hover:shadow-blue-200/40'}
        border border-opacity-30
        ${darkMode ? 'border-gray-700' : 'border-gray-200'}
      `}
    >
      <div className="relative h-[70%] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500
            hover:scale-105"
        />
        <div
          className={`
            absolute inset-0
            bg-gradient-to-t
            ${darkMode ? 'from-gray-900/70' : 'from-gray-100/70'} to-transparent
          `}
        />
      </div>

      <div className="p-4 h-[30%] flex items-center justify-center">
        <h3
          className={`text-xl line-clamp-2 font-bold bg-clip-text text-transparent bg-gradient-to-r ${theme.accent}`}
        >
          {title}
        </h3>
      </div>
    </div>
  );
};
