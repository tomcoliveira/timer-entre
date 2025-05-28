
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
  
  // Dimensões fixas da barra
  const barWidth = 710; // Travado em 710px
  const barHeight = 15; // Travado em 15px
  
  // Largura da barra amarela baseada no tempo restante
  const yellowBarWidth = (barWidth * remainingPercentage) / 100;

  return (
    <div 
      className="flex flex-col items-center justify-center bg-black font-inter"
      style={{ 
        minHeight: '100vh',
        width: '100vw'
      }}
    >
      <div 
        style={{ 
          width: '750px', // Travado em 750px
          height: '225px', // Travado em 225px
          backgroundColor: '#000000',
          position: 'relative'
        }}
      >
        {/* Título */}
        <div 
          style={{ 
            position: 'absolute',
            top: '45px', // Travado em 45px
            left: '20px', // Travado em 20px
            color: '#333330',
            fontFamily: 'Inter, sans-serif',
            fontSize: '30px', // Travado em 30px
            fontWeight: 'normal'
          }}
        >
          {title}
        </div>
        
        {/* Timer numérico */}
        <div 
          style={{ 
            position: 'absolute',
            top: '45px', // Travado em 45px
            right: '20px', // Travado em 20px
            color: '#333330',
            fontFamily: 'Inter, sans-serif',
            fontSize: '30px', // Travado em 30px
            fontWeight: 'normal'
          }}
        >
          {timeDisplay}
        </div>
        
        {/* Barra de fundo (cinza) */}
        <div 
          style={{
            position: 'absolute',
            width: '710px', // Travado em 710px
            height: '15px', // Travado em 15px
            backgroundColor: '#333330',
            top: '50%',
            left: '20px', // Travado em 20px
            transform: 'translateY(-50%)'
          }}
        />
        
        {/* Barra de progresso (amarela) */}
        <div 
          className="transition-all duration-1000 ease-linear"
          style={{
            position: 'absolute',
            width: `${yellowBarWidth}px`,
            height: '15px', // Travado em 15px
            backgroundColor: '#ffb91a',
            top: '50%',
            left: '20px', // Travado em 20px
            transform: 'translateY(-50%)'
          }}
        />
        
        {/* Botões de controle */}
        <div 
          style={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            gap: '12px', // Travado em 12px
            bottom: '45px', // Travado em 45px
            right: '20px' // Travado em 20px
          }}
        >
          <Pause 
            size={30} // Travado em 30px
            style={{ color: '#ffb91a', cursor: 'pointer' }} 
            onClick={onStop}
            className="hover:opacity-80 transition-opacity"
          />
          <Square 
            size={30} // Travado em 30px
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
