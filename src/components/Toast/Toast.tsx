export const Toast = ({
  message,
  className,
}: {
  message: string;
  className?: string;
}) => {
  return (
    <div
      className={`fixed top-4 right-4 p-4 bg-gray-900/80 backdrop-blur-sm 
      border border-gray-700 rounded-lg shadow-xl transform transition-all 
      duration-300 animate-fade-in text-white font-medium z-50 ${className}`}
    >
      <p>{message}</p>
    </div>
  );
};
