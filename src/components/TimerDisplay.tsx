
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
        {/* Título - sansation, corpo 25, cor #333330, espaçamento -43 */}
        <div 
          className="absolute top-6 left-6"
          style={{ 
            color: '#333330',
            fontFamily: 'sansation, sans-serif',
            fontSize: '25px',
            letterSpacing: '-43px',
            fontWeight: 'normal'
          }}
        >
          {title}
        </div>
        
        {/* Controles do timer no canto superior direito */}
        <div className="absolute top-6 right-6 flex items-center space-x-3">
          <Play size={24} style={{ color: '#ffb91a' }} />
          <Pause size={24} style={{ color: '#ffb91a' }} />
          <Square size={24} style={{ color: '#ffb91a' }} />
        </div>
        
        {/* Barra cinza - 540x40 */}
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
        
        {/* Barra laranja - 525x30 */}
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
        
        {/* Timer - artegasans, corpo 48, espaçamento -143, cor #333330 para números, #ffb91a bold+itálico */}
        <div 
          className="absolute bottom-6 right-6"
          style={{ 
            color: '#333330',
            fontFamily: 'artegasans, sans-serif',
            fontSize: '48px',
            letterSpacing: '-143px',
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
