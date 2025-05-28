
import React from 'react';
import { Button } from '@/components/ui/button';

interface TimerDisplayProps {
  title: string;
  timeDisplay: string;
  isRunning: boolean;
  isFinished: boolean;
  onStop: () => void;
  onReset: () => void;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({
  title,
  timeDisplay,
  isRunning,
  isFinished,
  onStop,
  onReset
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-gray-400 font-inter">
      <div 
        className="flex flex-col items-center justify-center bg-black border border-gray-800 rounded-lg shadow-2xl"
        style={{ width: '750px', height: '300px' }}
      >
        <div className="text-center space-y-6">
          <h1 className="text-lg font-light text-gray-500 tracking-wide">
            {title}
          </h1>
          
          <div 
            className={`text-6xl font-extralight tracking-wider transition-all duration-300 ${
              isFinished ? 'text-gray-600 animate-pulse-gentle' : 'text-gray-300'
            }`}
            style={{ fontFamily: 'Inter, monospace' }}
          >
            {timeDisplay}
          </div>
          
          <div className="flex space-x-4 mt-8">
            {isRunning && (
              <Button
                onClick={onStop}
                className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-600 transition-colors duration-200 text-sm font-light"
              >
                Parar
              </Button>
            )}
            
            <Button
              onClick={onReset}
              className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-600 transition-colors duration-200 text-sm font-light"
            >
              {isFinished ? 'Novo Timer' : 'Reiniciar'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerDisplay;
