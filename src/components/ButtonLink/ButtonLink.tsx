import { Link } from 'react-router-dom';
import { useThemeStyles } from '../../hooks/useThemeStyles';
import type { ButtonLinkProps } from '../../types/button';

export const ButtonLink = ({
  label,
  to,
  variant = 'primary',
  disabled,
  className,
  icon,
}: ButtonLinkProps) => {
  const { getButtonStyles } = useThemeStyles();

  return (
    <Link
      to={to}
      className={`
        ${getButtonStyles(variant)}
        ${className || ''}
        ${disabled ? 'cursor-not-allowed opacity-50' : 'transform hover:-translate-y-0.5'}
        transition-all duration-300
      `}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
    >
      <span className="flex items-center justify-center gap-2">
        {label}
        {icon && <span className="ml-2">{icon}</span>}
      </span>
    </Link>
  );
};
