import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { DarkModeContext, themeColors } from '../../context/DarkModeContext';
import { ButtonLink } from '../ButtonLink/ButtonLink';

export const Header = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  const location = useLocation();
  const { darkMode } = useContext(DarkModeContext);
  const theme = darkMode ? themeColors.dark : themeColors.light;

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/contact' },
    { label: 'Posts', href: '/posts' },
    { label: 'Exercices', href: '/exercices' },
  ];

  return (
    <div
      className={`sticky top-0 z-50 backdrop-blur-sm ${
        darkMode
          ? 'bg-gray-900/80 border-gray-800'
          : 'bg-white/80 border-orange-100'
      } border-b transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col items-center space-y-4">
          <h1
            className={`text-3xl font-bold bg-clip-text animate-pulse-slow text-transparent bg-gradient-to-r ${theme.accent}`}
          >
            {title}
          </h1>
          {subtitle && (
            <h2 className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              {subtitle}
            </h2>
          )}
          <nav className="flex gap-4 mt-4">
            {menuItems.map((item) => (
              <ButtonLink
                key={item.label}
                label={item.label}
                to={item.href}
                variant={
                  location.pathname === item.href ? 'primary' : 'secondary'
                }
              />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};
