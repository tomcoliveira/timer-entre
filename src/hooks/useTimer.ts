
import { useState, useEffect, useRef } from 'react';

export const useTimer = () => {
  const [totalSeconds, setTotalSeconds] = useState<number>(0);
  const [remainingSeconds, setRemainingSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = (minutes: number, seconds: number = 0) => {
    const total = minutes * 60 + seconds;
    setTotalSeconds(total);
    setRemainingSeconds(total);
    setIsRunning(true);
    setIsFinished(false);
  };

  const stopTimer = () => {
    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetTimer = () => {
    stopTimer();
    setRemainingSeconds(0);
    setTotalSeconds(0);
    setIsFinished(false);
  };

  useEffect(() => {
    if (isRunning && remainingSeconds > 0) {
      intervalRef.current = setInterval(() => {
        setRemainingSeconds((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            setIsFinished(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, remainingSeconds]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(3, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return {
    remainingSeconds,
    totalSeconds,
    isRunning,
    isFinished,
    startTimer,
    stopTimer,
    resetTimer,
    formatTime
  };
};
