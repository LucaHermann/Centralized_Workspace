interface LoadingStateProps {
  message?: string;
}

export const LoadingState = ({
  message = 'Loading content...',
}: LoadingStateProps) => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
      <p className="text-gray-600">{message}</p>
    </div>
  </div>
);
