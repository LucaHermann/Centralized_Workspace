import { useState, useEffect, useRef } from 'react';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';

export const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number>();

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = window.setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stop = () => {
    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  const buttons = [
    {
      label: 'Start',
      variant: 'primary' as const,
      onClick: start,
      disabled: isRunning,
    },
    {
      label: 'Stop',
      variant: 'secondary' as const,
      onClick: stop,
      disabled: !isRunning,
    },
    { label: 'Reset', variant: 'outline' as const, onClick: reset },
  ];

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div>
      <ButtonGroup buttons={buttons} />
      <h1>Time: {time}</h1>
    </div>
  );
};
