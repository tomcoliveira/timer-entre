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
  // Calcula a porcentagem do tempo restante
  const remainingPercentage = totalSeconds > 0 ? (remainingSeconds / totalSeconds) * 100 : 0;
  
  // Dimensões da barra
  const barWidth = 710; // 750 - 40px (20px de cada lado)
  const barHeight = 15;
  
  // Largura da barra amarela baseada no tempo restante
  const yellowBarWidth = (barWidth * remainingPercentage) / 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black font-inter">
      <div 
        className="relative"
        style={{ 
          width: '750px', 
          height: '225px',
          backgroundColor: '#000000'
        }}
      >
        {/* Título */}
        <div 
          className="absolute"
          style={{ 
            top: '45px',
            left: '20px',
            color: '#333330',
            fontFamily: 'Inter, sans-serif',
            fontSize: '30px',
            fontWeight: 'normal'
          }}
        >
          {title}
        </div>
        
        {/* Timer numérico */}
        <div 
          className="absolute"
          style={{ 
            top: '45px',
            right: '20px',
            color: '#333330',
            fontFamily: 'Inter, sans-serif',
            fontSize: '30px',
            fontWeight: 'normal'
          }}
        >
          {timeDisplay}
        </div>
        
        {/* Barra de fundo (cinza) */}
        <div 
          className="absolute"
          style={{
            width: `${barWidth}px`,
            height: `${barHeight}px`,
            backgroundColor: '#333330',
            top: '50%',
            left: '20px',
            transform: 'translateY(-50%)'
          }}
        />
        
        {/* Barra de progresso (amarela) - diminui conforme o tempo pela esquerda */}
        <div 
          className="absolute transition-all duration-1000 ease-linear"
          style={{
            width: `${yellowBarWidth}px`,
            height: `${barHeight}px`,
            backgroundColor: '#ffb91a',
            top: '50%',
            left: '20px',
            transform: 'translateY(-50%)'
          }}
        />
        
        {/* Botões de controle */}
        <div 
          className="absolute flex items-center gap-3"
          style={{
            bottom: '45px',
            right: '20px'
          }}
        >
          <Pause 
            size={30} 
            style={{ color: '#ffb91a', cursor: 'pointer' }} 
            onClick={onStop}
            className="hover:opacity-80 transition-opacity"
          />
          <Square 
            size={30} 
            style={{ color: '#ffb91a', cursor: 'pointer' }} 
            onClick={onReset}
            className="hover:opacity-80 transition-opacity"
          />
        </div>
      </div>
    </div>
  );
};

export default TimerDisplay;
