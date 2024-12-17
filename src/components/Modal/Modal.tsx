import { useContext } from 'react';
import { DarkModeContext, themeColors } from '../../context/DarkModeContext';
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
  const { darkMode } = useContext(DarkModeContext);
  const theme = darkMode ? themeColors.dark : themeColors.light;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <dialog
        open={isOpen}
        className={`relative bg-gradient-to-r ${theme.accent} border border-gray-800 p-6 rounded-xl shadow-xl w-full max-w-md transform transition-all`}
      >
        <div className="absolute top-4 right-4">
          <Button
            label="×"
            variant="secondary"
            onClick={() => {
              setIsModalOpen(false);
              setShowToast(true);
            }}
            className="!p-2 !text-xl hover:rotate-90"
          />
        </div>
        <h2
          className={`text-2xl font-bold bg-clip-text text-white bg-gradient-to-r ${theme.accent} mb-4`}
        >
          User Information
        </h2>
        <p className="text-white">
          Your name is {name} and your email is {email}
        </p>
        {message && <p className="text-white">Your message is {message}</p>}
      </dialog>
    </div>
  );
};
