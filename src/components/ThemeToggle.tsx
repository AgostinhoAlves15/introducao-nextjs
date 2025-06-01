'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const now = new Date();
  const date = now.getDate();
  const hours = now.getHours();
  const min = now.getMinutes();

  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const currentClass = document.body.className;
    const otherClasses = currentClass
      .split(' ')
      .filter(c => c !== 'light' && c !== 'dark')
      .join(' ');

    document.body.className = `${isDarkMode ? 'dark' : 'light'} ${otherClasses}`;
  }, [isDarkMode]);

  return (
    <div>
      <p>
        Hoje é: {date}, e o horário exato é: {hours}:{min}
      </p>
      <button onClick={() => setIsDarkMode(prev => !prev)}>
        Alternar Tema
      </button>
    </div>
  );
}
