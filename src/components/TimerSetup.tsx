
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface TimerSetupProps {
  onStart: (title: string, minutes: number) => void;
}

const TimerSetup: React.FC<TimerSetupProps> = ({ onStart }) => {
  const [title, setTitle] = useState('');
  const [minutes, setMinutes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mins = parseInt(minutes) || 0;
    
    if (mins === 0) {
      alert('Por favor, defina um tempo válido');
      return;
    }
    
    if (!title.trim()) {
      alert('Por favor, digite um título');
      return;
    }
    
    onStart(title.trim(), mins);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-gray-400 font-inter">
      <div className="w-full max-w-md space-y-8 p-8">
        <div className="text-center">
          <h1 className="text-2xl font-light tracking-wide text-gray-300 mb-2">Timer</h1>
          <p className="text-sm text-gray-500">Configure seu timer personalizado</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-400 mb-2">
              Título
            </label>
            <Input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Digite o título do timer"
              className="w-full bg-gray-900 border-gray-700 text-gray-300 placeholder-gray-500 focus:ring-gray-500 focus:border-gray-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="minutes" className="block text-sm font-medium text-gray-400 mb-2">
              Minutos
            </label>
            <Input
              id="minutes"
              type="number"
              min="1"
              max="999"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              placeholder="0"
              className="w-full bg-gray-900 border-gray-700 text-gray-300 placeholder-gray-500 focus:ring-gray-500 focus:border-gray-500"
              required
            />
          </div>
          
          <Button
            type="submit"
            className="w-full bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-600 transition-colors duration-200"
          >
            Iniciar Timer
          </Button>
        </form>
      </div>
    </div>
  );
};

export default TimerSetup;
