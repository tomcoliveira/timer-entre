
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
  const maxProgressWidth = 675; // 95% da barra cinza (710px * 0.95)
  const progressWidth = (maxProgressWidth * progressPercentage) / 100;

  // Formata o tempo com separador amarelo
  const formatTimeWithColoredSeparator = (timeString: string) => {
    const [minutes, seconds] = timeString.split(':');
    return (
      <>
        {minutes}
        <span style={{ 
          color: '#ffb91a', 
          fontWeight: 'normal',
          fontFamily: 'Artega Sans, sans-serif' // Mesma fonte do restante
        }}>:</span>
        {seconds}
      </>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black font-inter">
      <div 
        className="relative bg-black"
        style={{ width: '750px', height: '225px' }}
      >
        {/* Título */}
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
        
        {/* Ícones de controle - mesma distância da barra que o título */}
        <div 
          className="absolute flex items-center cursor-pointer"
          style={{
            top: '50px', // 25px de distância da barra (75px - 25px)
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
        
        {/* Barra de fundo (cinza) - 30% menor na altura */}
        <div 
          className="absolute"
          style={{
            width: '710px',
            height: '10.5px', // 30% menor que 15px
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
            height: '9.975px', // 95% da altura da cinza (10.5 * 0.95)
            backgroundColor: '#ffb91a',
            top: '75.2625px', // Centralizada verticalmente ((10.5 - 9.975) / 2 + 75)
            left: '37.5px' // Centralizada horizontalmente ((710 - 675) / 2 + 20)
          }}
        />
        
        {/* Tempo numérico - mesma distância da barra que o título */}
        <div 
          className="absolute"
          style={{ 
            top: '100px', // 25px de distância da barra (75px + 10.5px + 14.5px)
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
