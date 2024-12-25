import { ReactNode } from 'react';

export interface BaseButtonProps {
  label: string;
  disabled?: boolean;
  variant: 'primary' | 'secondary' | 'outline';
  className?: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export interface ButtonProps extends BaseButtonProps {
  type?: 'submit' | 'reset' | 'button';
}

export interface ButtonLinkProps extends BaseButtonProps {
  to: string;
} 
