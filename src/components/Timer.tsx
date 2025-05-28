
import React, { useState } from 'react';
import { useTimer } from '@/hooks/useTimer';
import { useAlarm } from '@/hooks/useAlarm';
import TimerSetup from './TimerSetup';
import TimerDisplay from './TimerDisplay';

const Timer: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [isSetup, setIsSetup] = useState<boolean>(true);
  const {
    remainingSeconds,
    isRunning,
    isFinished,
    startTimer,
    stopTimer,
    resetTimer,
    formatTime
  } = useTimer();

  const handleAlarmComplete = () => {
    console.log('Alarme concluído');
  };

  useAlarm(isFinished, handleAlarmComplete);

  const handleStart = (timerTitle: string, minutes: number) => {
    setTitle(timerTitle);
    startTimer(minutes, 0); // sempre 0 segundos
    setIsSetup(false);
  };

  const handleReset = () => {
    resetTimer();
    setIsSetup(true);
    setTitle('');
  };

  if (isSetup) {
    return <TimerSetup onStart={handleStart} />;
  }

  return (
    <TimerDisplay
      title={title}
      timeDisplay={formatTime(remainingSeconds)}
      isRunning={isRunning}
      isFinished={isFinished}
      onStop={stopTimer}
      onReset={handleReset}
    />
  );
};

export default Timer;
