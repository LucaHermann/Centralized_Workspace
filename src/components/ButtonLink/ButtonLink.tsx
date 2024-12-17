import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/DarkModeContext';

export const ButtonLink = ({
  label,
  to,
  disabled,
  variant,
  className,
  icon,
  onClick,
}: {
  label: string;
  to: string;
  disabled?: boolean;
  variant: 'primary' | 'secondary' | 'outline';
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}) => {
  const { darkMode } = useContext(DarkModeContext);

  const baseStyles =
    'px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg';

  const styles = {
    primary: darkMode
      ? 'bg-cyan-500 hover:bg-cyan-600 text-white disabled:bg-gray-600'
      : 'bg-orange-500 hover:bg-orange-600 text-white disabled:bg-gray-300',
    secondary: darkMode
      ? 'bg-gray-700 hover:bg-gray-600 text-gray-100 disabled:bg-gray-800'
      : 'bg-gray-100 hover:bg-gray-200 text-gray-900 disabled:bg-gray-100',
    outline: darkMode
      ? 'border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 disabled:border-gray-600 disabled:text-gray-600'
      : 'border-2 border-orange-500 text-orange-500 hover:bg-orange-500/10 disabled:border-gray-300 disabled:text-gray-300',
  };

  return (
    <Link
      to={to}
      className={`${baseStyles} ${styles[variant]} ${className || ''} ${
        disabled
          ? 'cursor-not-allowed opacity-50'
          : 'transform hover:-translate-y-0.5'
      }`}
      onClick={(e) => {
        if (disabled) e.preventDefault();
        onClick?.();
      }}
      aria-disabled={disabled}
    >
      <span className="flex items-center justify-center gap-2">
        {label}
        {icon && <span className="ml-2">{icon}</span>}
      </span>
    </Link>
  );
};
