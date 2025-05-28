
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, Square } from 'lucide-react';

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
  const progressWidth = (710 * progressPercentage) / 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black font-inter">
      <div 
        className="relative bg-black"
        style={{ width: '750px', height: '225px' }}
      >
        {/* Título - Sansation, 25pt, cor #333330, kerning -43, esquerda, 20-25px do topo */}
        <div 
          className="absolute"
          style={{ 
            top: '22px',
            left: '20px',
            color: '#333330',
            fontFamily: 'Sansation, sans-serif',
            fontSize: '25pt',
            fontWeight: 'normal',
            letterSpacing: '-1.5px' // Ajustado o kerning para ser mais suave
          }}
        >
          {title}
        </div>
        
        {/* Ícones de controle - direita superior, acima da barra, amarelo #ffb91a, 15-20px, espaçamento 10px */}
        <div 
          className="absolute flex items-center"
          style={{
            top: '20px',
            right: '20px',
            gap: '10px'
          }}
        >
          <Play size={18} style={{ color: '#ffb91a' }} />
          <Pause size={18} style={{ color: '#ffb91a' }} />
          <Square size={18} style={{ color: '#ffb91a' }} />
        </div>
        
        {/* Barra de fundo (cinza) - largura total com margem ~20px, altura ~30px, centralizada, abaixo do título */}
        <div 
          className="absolute"
          style={{
            width: '710px',
            height: '30px',
            backgroundColor: '#333330',
            top: '75px',
            left: '20px'
          }}
        />
        
        {/* Barra de progresso (amarela) - diminui conforme o tempo restante */}
        <div 
          className="absolute transition-all duration-1000 ease-linear"
          style={{
            width: `${progressWidth}px`,
            height: '30px',
            backgroundColor: '#ffb91a',
            top: '75px',
            left: '20px'
          }}
        />
        
        {/* Tempo numérico - Artega Sans, bold+itálico, 25pt, cor #333330, kerning -143, direita da barra, leve sobreposição */}
        <div 
          className="absolute"
          style={{ 
            top: '115px',
            right: '15px',
            color: '#333330',
            fontFamily: 'Artega Sans, sans-serif',
            fontSize: '25pt',
            fontWeight: 'bold',
            fontStyle: 'italic',
            letterSpacing: '-2px' // Ajustado o kerning para ser mais legível
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
