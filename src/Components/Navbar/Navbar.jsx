import React, { useState, useEffect } from 'react';
import Question from '../../Images/question.png';
import Profil from '../../Images/profil.png';

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`w-full bg-blue-950 sticky top-0 z-50 ${scrolling ? 'shadow-lg' : ''}`}>
      <div className="flex items-center justify-between p-4">
        {/* Logo bo'limi */}
        <div className={`transition-opacity duration-300 ${scrolling ? 'opacity-0' : 'opacity-100'}`}>
          <img 
            src="https://soff.uz/static/img/soff/soff_green_white.png" 
            alt="Logo" 
            className="h-12" 
          />
        </div>

        {/* Ikonlar va matn bo'limi */}
        <div className="flex items-center space-x-4">
          <img 
            src={Question} 
            alt="Question" 
            className="w-6 h-6" 
          />
          <img 
            src={Profil} 
            alt="Profile" 
            className="w-6 h-6" 
          />
          <p className="text-white text-sm font-medium">
            Kirish <br /> Ro`yxatdan O`tish
          </p>
        </div>
      </div>
    </div>
  );
}
