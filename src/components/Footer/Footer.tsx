import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useThemeStyles } from '../../hooks/useThemeStyles';

export const Footer = () => {
  const { theme, getGradientText } = useThemeStyles();

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/LucaHermann',
      label: 'GitHub Profile',
    },
    {
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/lucahermann',
      label: 'LinkedIn Profile',
    },
  ];

  return (
    <footer className="relative mt-20">
      <div
        className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent ${theme.DIVIDER} to-transparent`}
      />

      <div
        className={`backdrop-blur-sm ${theme.MODAL} border-t transition-colors duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <p className={theme.TEXT_SECONDARY}>
              © {new Date().getFullYear()}{' '}
              <span className={getGradientText(true)}>
                Centralized Workspace
              </span>
            </p>

            <div className="flex space-x-6">
              {[{ label: 'Contact', href: '/contact' }].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`${theme.TEXT_SECONDARY} ${theme.HOVER} transition-colors duration-300`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl ${theme.TEXT_SECONDARY} ${theme.HOVER} transition-colors duration-300`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent ${theme.DIVIDER} to-transparent`}
      />
    </footer>
  );
};
