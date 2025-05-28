
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-black font-inter">
      <div 
        className="relative bg-black"
        style={{ width: '750px', height: '225px' }}
      >
        {/* Título */}
        <div 
          className="absolute top-6 left-6 text-lg font-light"
          style={{ 
            color: '#333330',
            fontFamily: 'Inter, sans-serif',
            fontSize: '25px',
            letterSpacing: '-0.43px'
          }}
        >
          {title}
        </div>
        
        {/* Barra cinza */}
        <div 
          className="absolute"
          style={{
            width: '540px',
            height: '40px',
            backgroundColor: '#333330',
            top: '65px',
            left: '6px'
          }}
        />
        
        {/* Barra laranja */}
        <div 
          className="absolute"
          style={{
            width: '525px',
            height: '30px',
            backgroundColor: '#ffb91a',
            top: '70px',
            left: '12px'
          }}
        />
        
        {/* Timer */}
        <div 
          className="absolute bottom-6 right-6 font-bold italic"
          style={{ 
            color: '#ffb91a',
            fontFamily: 'Inter, sans-serif',
            fontSize: '48px',
            letterSpacing: '-1.43px',
            fontWeight: 'bold',
            fontStyle: 'italic'
          }}
        >
          {timeDisplay}
        </div>
      </div>
      
      {/* Botões de controle - posicionados abaixo do timer */}
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
  );
};

export default TimerDisplay;
