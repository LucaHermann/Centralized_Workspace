import { useContext } from 'react';

import { DarkModeContext, themeColors } from '../../context/DarkModeContext';

export const Card = ({
  title,
  titleClassName,
  description,
  hrefLink,
  hrefText,
}: {
  title: string;
  titleClassName?: string;
  description: string;
  hrefLink?: string;
  hrefText?: string;
}) => {
  const { darkMode } = useContext(DarkModeContext);
  const theme = darkMode ? themeColors.dark : themeColors.light;

  return (
    <div
      className={`
        hover:transform hover:scale-102 hover:shadow-2xl
        ${darkMode ? 'hover:shadow-blue-500/30' : 'hover:shadow-blue-200/40'}
        backdrop-blur-sm ${theme.card} rounded-xl p-6 transition-all duration-300
        transform hover:-translate-y-2 border ${theme.border}
        `}
    >
      <div className="space-y-4">
        <h3
          className={`${titleClassName ? titleClassName : 'text-xl'} font-bold animate-text bg-clip-text text-transparent bg-gradient-to-r ${theme.accent}`}
        >
          {title}
        </h3>

        <p className={theme.text}>{description}</p>

        {hrefLink && (
          <a
            href={hrefLink}
            className={`inline-flex items-center ${
              darkMode
                ? 'text-cyan-400 hover:text-cyan-300'
                : 'text-orange-500 hover:text-orange-600'
            } transition-colors duration-300 animate-text`}
          >
            <span>{hrefText}</span>
            <svg
              className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};
