
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
  // Calcula a porcentagem do progresso restante
  const progressPercentage = totalSeconds > 0 ? (remainingSeconds / totalSeconds) * 100 : 0;
  const progressWidth = (675 * progressPercentage) / 100; // Barra amarela (95% da cinza)

  // Formata o tempo com separador amarelo sem negrito
  const formatTimeWithColoredSeparator = (timeString: string) => {
    const [minutes, seconds] = timeString.split(':');
    return (
      <>
        {minutes}<span style={{ color: '#ffb91a', fontWeight: 'normal' }}>:</span>{seconds}
      </>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black font-inter">
      <div 
        className="relative bg-black"
        style={{ width: '750px', height: '225px' }}
      >
        {/* Título - cor igual ao número */}
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
          {title}
        </div>
        
        {/* Ícones de controle - alinhados com o título */}
        <div 
          className="absolute flex items-center cursor-pointer"
          style={{
            top: '22px', // Mesmo nível do título
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
        
        {/* Barra de fundo (cinza) - 5% maior que a amarela */}
        <div 
          className="absolute"
          style={{
            width: '710px',
            height: '15px',
            backgroundColor: '#333330',
            top: '75px',
            left: '20px'
          }}
        />
        
        {/* Barra de progresso (amarela) - 95% do tamanho da cinza, centralizada */}
        <div 
          className="absolute transition-all duration-1000 ease-linear"
          style={{
            width: `${progressWidth}px`,
            height: '14.25px', // 95% da altura da cinza
            backgroundColor: '#ffb91a',
            top: '75.375px', // Centralizada verticalmente
            left: '37.5px' // Centralizada horizontalmente
          }}
        />
        
        {/* Tempo numérico - cor igual ao título, sem negrito no separador */}
        <div 
          className="absolute"
          style={{ 
            top: '140px',
            right: '20px',
            color: '#333330',
            fontFamily: 'Artega Sans, sans-serif',
            fontSize: '25pt',
            fontWeight: 'bold',
            fontStyle: 'italic'
          }}
        >
          {formatTimeWithColoredSeparator(timeDisplay)}
        </div>
      </div>
    </div>
  );
};

export default TimerDisplay;
