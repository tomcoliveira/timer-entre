
import React from 'react';
import { Button } from '@/components/ui/button';
import { Pause, Square } from 'lucide-react';

interface TimerDisplayProps {
  title: string;
  timeDisplay: string;
  isRunning: boolean;
  isFinished: boolean;
  remainingSeconds: number;
  totalSeconds: number;
  onStop: () => void;
  onReset: () => void;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({
  title,
  timeDisplay,
  isRunning,
  isFinished,
  remainingSeconds,
  totalSeconds,
  onStop,
  onReset
}) => {
  // Calcula a porcentagem do progresso (de 100% para 0%)
  const progressPercentage = totalSeconds > 0 ? ((totalSeconds - remainingSeconds) / totalSeconds) * 100 : 0;
  
  // Barra cinza: 710px largura, 15px altura
  // Barra amarela: 95% da cinza = 674.5px largura, 14.25px altura
  const grayBarWidth = 710;
  const grayBarHeight = 15;
  const yellowBarWidth = grayBarWidth * 0.95; // 674.5px
  const yellowBarHeight = grayBarHeight * 0.95; // 14.25px
  
  const progressWidth = (yellowBarWidth * progressPercentage) / 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black font-inter">
      <div 
        className="relative bg-black"
        style={{ width: '750px', height: '225px' }}
      >
        {/* Título com underscore amarelo */}
        <div 
          className="absolute"
          style={{ 
            top: '22px',
            left: '20px',
            color: '#333330',
            fontFamily: 'Sansation, sans-serif',
            fontSize: '25pt',
            fontWeight: 'normal'
          }}
        >
          <span style={{ color: '#ffb91a' }}>_</span>{title}
        </div>
        
        {/* Tempo numérico - mesma distância da barra que o título (acima) */}
        <div 
          className="absolute"
          style={{ 
            top: '22px', // Mesma altura do título
            right: '20px',
            color: '#333330',
            fontFamily: 'Artega Sans, sans-serif',
            fontSize: '25pt',
            fontWeight: 'bold',
            fontStyle: 'italic'
          }}
        >
          {timeDisplay}
        </div>
        
        {/* Barra de fundo (cinza) */}
        <div 
          className="absolute"
          style={{
            width: `${grayBarWidth}px`,
            height: `${grayBarHeight}px`,
            backgroundColor: '#333330',
            top: '75px',
            left: '20px'
          }}
        />
        
        {/* Barra de progresso (amarela) - centralizada dentro da cinza */}
        <div 
          className="absolute transition-all duration-1000 ease-linear"
          style={{
            width: `${progressWidth}px`,
            height: `${yellowBarHeight}px`,
            backgroundColor: '#ffb91a',
            top: `${75 + (grayBarHeight - yellowBarHeight) / 2}px`, // Centralizada verticalmente
            left: `${20 + (grayBarWidth - yellowBarWidth) / 2}px` // Centralizada horizontalmente
          }}
        />
        
        {/* Ícones de controle - mesma distância da barra que o título (abaixo) */}
        <div 
          className="absolute flex items-center cursor-pointer"
          style={{
            top: `${75 + grayBarHeight + 25}px`, // 25px de distância da barra
            right: '20px',
            gap: '10px'
          }}
        >
          <Pause 
            size={18} 
            style={{ color: '#ffb91a' }} 
            onClick={onStop}
            className="hover:opacity-80 transition-opacity"
          />
          <Square 
            size={18} 
            style={{ color: '#ffb91a' }} 
            onClick={onReset}
            className="hover:opacity-80 transition-opacity"
          />
        </div>
      </div>
    </div>
  );
};

export default TimerDisplay;
