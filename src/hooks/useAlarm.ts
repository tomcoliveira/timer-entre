
import { useEffect, useRef } from 'react';

export const useAlarm = (isFinished: boolean, onAlarmComplete: () => void) => {
  const alarmTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  const createPipSound = async (frequency: number = 800, duration: number = 200) => {
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext();
    }
    
    const audioContext = audioContextRef.current;
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration / 1000);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration / 1000);
  };

  const playPipSequence = async (count: number, interval: number = 500) => {
    for (let i = 0; i < count; i++) {
      await createPipSound();
      if (i < count - 1) {
        await new Promise(resolve => setTimeout(resolve, interval));
      }
    }
  };

  const playAlarmSequence = async () => {
    console.log('Iniciando sequência de alarme');
    
    // Primeiros 5 segundos: 3 pips
    await playPipSequence(3, 400);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Próximos 2 segundos: 4 pips
    await playPipSequence(4, 300);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Últimos 3 segundos: 12 pips
    await playPipSequence(12, 200);
    
    onAlarmComplete();
  };

  useEffect(() => {
    if (isFinished) {
      console.log('Timer finalizado, iniciando alarme');
      alarmTimeoutRef.current = setTimeout(() => {
        playAlarmSequence();
      }, 500);
    }

    return () => {
      if (alarmTimeoutRef.current) {
        clearTimeout(alarmTimeoutRef.current);
      }
    };
  }, [isFinished]);

  useEffect(() => {
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);
};
