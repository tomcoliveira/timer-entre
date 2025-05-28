
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

  // Formata o tempo com separador amarelo
  const formatTimeWithColoredSeparator = (timeString: string) => {
    const [minutes, seconds] = timeString.split(':');
    return (
      <>
        {minutes}<span style={{ color: '#ffb91a' }}>:</span>{seconds}
      </>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black font-inter">
      <div 
        className="relative bg-black"
        style={{ width: '750px', height: '225px' }}
      >
        {/* Título - Sansation, 25pt, cor #333330, sem kerning, esquerda, 20-25px do topo */}
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
        
        {/* Barra de fundo (cinza) - 5% maior que a amarela nos dois sentidos */}
        <div 
          className="absolute"
          style={{
            width: '710px',
            height: '15px', // 50% menor que antes (30px -> 15px)
            backgroundColor: '#333330',
            top: '75px',
            left: '20px'
          }}
        />
        
        {/* Barra de progresso (amarela) - centralizada na cinza, 95% do tamanho da cinza */}
        <div 
          className="absolute transition-all duration-1000 ease-linear"
          style={{
            width: `${progressWidth}px`,
            height: '13.5px', // 90% da altura da cinza para centralizar
            backgroundColor: '#ffb91a',
            top: '75.75px', // Centralizada verticalmente na barra cinza
            left: '37.5px' // Centralizada horizontalmente na barra cinza
          }}
        />
        
        {/* Ícones de controle - alinhados com o final da barra cinza */}
        <div 
          className="absolute flex items-center cursor-pointer"
          style={{
            top: '115px',
            right: '20px', // Alinhado com o final da barra cinza
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
        
        {/* Tempo numérico - Artega Sans, bold+itálico, 25pt, cor #333330, sem kerning, alinhado com o final da barra */}
        <div 
          className="absolute"
          style={{ 
            top: '140px',
            right: '20px', // Alinhado com o final da barra cinza
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
