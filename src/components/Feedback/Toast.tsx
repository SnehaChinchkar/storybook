import React from 'react';

type ToastProps = {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  autoDismiss?: boolean;
  duration?: number; 
};

export const Toast = ({ message, type = 'info', autoDismiss = false, duration = 3000 }: ToastProps) => {
  const [visible, setVisible] = React.useState(true);

  const bg = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    warning: 'bg-yellow-500',
  };

  React.useEffect(() => {
    if (autoDismiss) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, duration);

      return () => clearTimeout(timer); 
    }
  }, [autoDismiss, duration]);

  if (!visible) return null;

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={`text-white px-4 py-2 rounded shadow ${bg[type]} max-w-sm mx-auto mt-4`}
    >
      {message}
    </div>
  );
};
