import React, { useState, useEffect } from 'react';

const DarkMode: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
<label className="inline-flex items-center   cursor-pointer" > 
<input type="checkbox" value="" className="sr-only peer" />
<div
  className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4
dark:peer-focus:ring-gray-500 rounded-full peer dark:bg-gray-500 
peer-checked:after:translate-x-full 
rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] 
after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border 
after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600
peer-checked:bg-gray-500"onClick={toggleDarkMode}
></div>
<span className="ms-3 text-sm font-medium text-white dark:text-white">
  Toggle dark mode
</span>
</label>
  );
};

export default DarkMode;

