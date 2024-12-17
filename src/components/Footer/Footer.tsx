import { useContext } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { DarkModeContext, themeColors } from '../../context/DarkModeContext';

export const Footer = () => {
  const { darkMode } = useContext(DarkModeContext);
  const theme = darkMode ? themeColors.dark : themeColors.light;

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
      {/* Gradient divider */}
      <div
        className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent ${
          darkMode ? 'via-cyan-500' : 'via-orange-500'
        } to-transparent`}
      />

      {/* Main footer content */}
      <div
        className={`backdrop-blur-sm ${
          darkMode
            ? 'bg-gray-900/60 border-gray-800/50'
            : 'bg-white/60 border-orange-100/50'
        } border-t transition-colors duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            {/* Copyright */}
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              © {new Date().getFullYear()}{' '}
              <span
                className={`bg-clip-text text-transparent bg-gradient-to-r ${theme.accent}`}
              >
                Centralized Workspace
              </span>
            </p>

            {/* Additional links */}
            <div className="flex space-x-6">
              {[{ label: 'Contact', href: '/contact' }].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`${
                    darkMode
                      ? 'text-gray-400 hover:text-cyan-400'
                      : 'text-gray-600 hover:text-orange-500'
                  } transition-colors duration-300`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl ${
                    darkMode
                      ? 'text-gray-400 hover:text-cyan-400'
                      : 'text-gray-600 hover:text-orange-500'
                  } transition-colors duration-300`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div
        className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent ${
          darkMode ? 'via-blue-500' : 'via-orange-500'
        } to-transparent`}
      />
    </footer>
  );
};
