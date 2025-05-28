
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, Square } from 'lucide-react';

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
        className="relative bg-black border-2 border-white"
        style={{ width: '750px', height: '225px' }}
      >
        {/* Título - posicionado no topo esquerdo */}
        <div 
          className="absolute top-4 left-6"
          style={{ 
            color: '#ffffff',
            fontFamily: 'Arial, sans-serif',
            fontSize: '20px',
            fontWeight: 'normal'
          }}
        >
          {title}
        </div>
        
        {/* Controles do timer no canto superior direito */}
        <div className="absolute top-4 right-6 flex items-center space-x-4">
          <Play size={20} style={{ color: '#ffb91a' }} />
          <Pause size={20} style={{ color: '#ffb91a' }} />
          <Square size={20} style={{ color: '#ffb91a' }} />
        </div>
        
        {/* Barra cinza - fundo */}
        <div 
          className="absolute"
          style={{
            width: '690px',
            height: '35px',
            backgroundColor: '#333330',
            top: '55px',
            left: '30px'
          }}
        />
        
        {/* Barra laranja - progresso */}
        <div 
          className="absolute"
          style={{
            width: '675px',
            height: '25px',
            backgroundColor: '#ffb91a',
            top: '60px',
            left: '37px'
          }}
        />
        
        {/* Timer - números grandes centralizados na parte inferior */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          style={{ 
            color: '#ffffff',
            fontFamily: 'Arial, sans-serif',
            fontSize: '72px',
            fontWeight: 'bold',
            letterSpacing: '2px'
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
