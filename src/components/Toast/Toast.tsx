import { useThemeStyles } from '../../hooks/useThemeStyles';

export const Toast = ({ message }: { message: string }) => {
  const { theme } = useThemeStyles();

  return (
    <div
      className={`
      fixed bottom-4 right-4 z-50
      ${theme.MODAL} ${theme.BORDER}
      px-6 py-3 rounded-lg shadow-xl
      animate-fade-in backdrop-blur-sm
    `}
    >
      <p className={theme.TEXT}>{message}</p>
    </div>
  );
};
