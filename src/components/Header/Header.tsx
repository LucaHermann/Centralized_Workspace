import { useLocation } from 'react-router-dom';
import { useThemeStyles } from '../../hooks/useThemeStyles';
import { ButtonLink } from '../ButtonLink/ButtonLink';

export const Header = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  const location = useLocation();
  const { theme, getHeaderTitle } = useThemeStyles();

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/contact' },
    { label: 'Posts', href: '/posts' },
    { label: 'Exercices', href: '/exercices' },
  ];

  return (
    <div
      className={`
      sticky top-0 z-50 backdrop-blur-sm
      ${theme.MODAL} border-b 
      transition-colors duration-300
    `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col items-center space-y-4">
          <h1 className={getHeaderTitle()}>{title}</h1>
          {subtitle && <h2 className={theme.TEXT_SECONDARY}>{subtitle}</h2>}
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
