import { useThemeStyles } from '../../hooks/useThemeStyles';

interface LoadingStateProps {
  message?: string;
}

export const LoadingState = ({
  message = 'Loading content...',
}: LoadingStateProps) => {
  const { theme, getGradientText } = useThemeStyles();

  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="text-center">
        <div
          className={`
          animate-spin rounded-full h-12 w-12 
          border-b-2 mx-auto mb-4
          ${theme.BASE === 'dark' ? 'border-cyan-500' : 'border-orange-500'}
        `}
        />
        <p className={`${getGradientText(true)} animate-pulse`}>{message}</p>
      </div>
    </div>
  );
};
