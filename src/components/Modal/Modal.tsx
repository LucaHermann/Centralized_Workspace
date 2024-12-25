import { useThemeStyles } from '../../hooks/useThemeStyles';
import { Button } from '../Button/Button';

export const Modal = ({
  isOpen,
  name,
  email,
  message,
  setIsModalOpen,
  setShowToast,
}: {
  isOpen: boolean;
  name?: string;
  email?: string;
  message?: string;
  setIsModalOpen: (isOpen: boolean) => void;
  setShowToast: (showToast: boolean) => void;
}) => {
  const { theme, getGradientText } = useThemeStyles();

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <dialog
        open={isOpen}
        aria-modal="true"
        className={`
          relative ${theme.MODAL} p-6 rounded-xl 
          shadow-xl w-full max-w-md transform 
          transition-all duration-300 animate-fade-in
        `}
      >
        <div className="absolute top-4 right-4">
          <Button
            label="×"
            variant="secondary"
            onClick={() => {
              setIsModalOpen(false);
              setShowToast(true);
            }}
            className="!p-2 !text-xl hover:rotate-90 transition-transform duration-300"
          />
        </div>
        <h2 className={`text-2xl font-bold ${getGradientText(true)} mb-4`}>
          User Information
        </h2>
        <div className="space-y-3">
          <p className={theme.TEXT}>
            Your name is <span className={getGradientText()}>{name}</span>
          </p>
          <p className={theme.TEXT}>
            Your email is <span className={getGradientText()}>{email}</span>
          </p>
          {message && (
            <p className={theme.TEXT}>
              Your message is <span className={getGradientText()}>{message}</span>
            </p>
          )}
        </div>
      </dialog>
    </div>
  );
};
