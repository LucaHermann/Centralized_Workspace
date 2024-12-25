import { useThemeStyles } from '../../hooks/useThemeStyles';
import type { ButtonProps } from '../../types/button';

export const Button = ({
  label,
  type = 'button',
  disabled,
  variant = 'primary',
  className,
  icon,
  onClick,
}: ButtonProps) => {
  const { getButtonStyles } = useThemeStyles();

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        ${getButtonStyles(variant)}
        ${className || ''}
        ${disabled ? 'cursor-not-allowed opacity-50' : 'transform hover:-translate-y-0.5'}
        transition-all duration-300
      `}
      aria-label={label}
    >
      <span className="flex items-center justify-center gap-2">
        {label}
        {icon && <span className="ml-2">{icon}</span>}
      </span>
    </button>
  );
};
