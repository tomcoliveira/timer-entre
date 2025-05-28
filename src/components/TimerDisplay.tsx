
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
  // Calcula a porcentagem do tempo RESTANTE (de 100% para 0%)
  const remainingPercentage = totalSeconds > 0 ? (remainingSeconds / totalSeconds) * 100 : 0;
  
  // Ambas as barras com exatamente o mesmo tamanho
  const barWidth = 708.75;
  const barHeight = 10.5;
  
  // Largura da barra amarela baseada no tempo restante
  const yellowBarWidth = (barWidth * remainingPercentage) / 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black font-inter">
      <div 
        className="relative bg-black"
        style={{ width: '750px', height: '225px' }}
      >
        {/* Título com underscore amarelo - 1d da base */}
        <div 
          className="absolute"
          style={{ 
            bottom: `${10.5 + 25}px`, // 1d (altura da letra d ≈ 25px no font-size 25pt) da barra
            left: '20px',
            color: '#333330',
            fontFamily: 'Sansation, sans-serif',
            fontSize: '25pt',
            fontWeight: 'normal'
          }}
        >
          <span style={{ color: '#ffb91a' }}>_</span>{title}
        </div>
        
        {/* Tempo numérico com underscore amarelo após os números - 1d da base */}
        <div 
          className="absolute"
          style={{ 
            bottom: `${10.5 + 25}px`, // 1d (altura da letra d ≈ 25px no font-size 25pt) da barra
            right: '20px',
            color: '#333330',
            fontFamily: 'Artegra Sans, sans-serif',
            fontSize: '25pt',
            fontStyle: 'italic',
            fontWeight: 'normal'
          }}
        >
          {timeDisplay}<span style={{ color: '#ffb91a' }}>_</span>
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
        
        {/* Barra de progresso (amarela) - diminui da esquerda para direita */}
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
        
        {/* Ícones de controle - 1d abaixo da barra, alinhados ao final dos números */}
        <div 
          className="absolute flex items-center cursor-pointer"
          style={{
            top: `${50 + barHeight/2 + 25}px`, // 1d (25px) abaixo da barra
            right: '58px', // Alinhado com o final dos números
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
