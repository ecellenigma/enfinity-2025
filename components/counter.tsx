"use client";

import React, { useState, useEffect } from 'react';

interface CounterProps {
  targetDate: Date;
}

const App = ({ targetDate }: CounterProps) => {
  
  
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCounting: false,
  });


  const calculateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance <= 0) {
      setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0, isCounting: false });
    } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setCountdown({ days, hours, minutes, seconds, isCounting: true });
    }
  };

  useEffect(() => {
    const timer = setInterval(calculateCountdown, 1000);
    calculateCountdown();
    return () => clearInterval(timer);
  }, [targetDate]); 

  return (
    <div className="flex flex-col items-center justify-center text-white my-10">
      <div className="p-4 w-1/2 text-center space-y-6 mb-30">
        {/* Countdown Display */}
        {countdown.isCounting ? (
          <div className="flex justify-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10 text-center items-center">
            <div className="flex flex-col items-center min-w-[70px] sm:min-w-[90px]">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-pink-500">{countdown.days}</span>
              <p className="text-xs sm:text-sm md:text-base text-white mt-1">Days</p>
            </div>
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white self-center">:</span>
            <div className="flex flex-col items-center min-w-[70px] sm:min-w-[90px]">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-pink-500">{countdown.hours}</span>
              <p className="text-xs sm:text-sm md:text-base text-white mt-1">Hours</p>
            </div>
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white self-center">:</span>
            <div className="flex flex-col items-center min-w-[70px] sm:min-w-[90px]">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-pink-500">{countdown.minutes}</span>
              <p className="text-xs sm:text-sm md:text-base text-white mt-1">Minutes</p>
            </div>
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white self-center">:</span>
            <div className="flex flex-col items-center min-w-[70px] sm:min-w-[90px]">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-pink-500">{countdown.seconds}</span>
              <p className="text-xs sm:text-sm md:text-base text-white mt-1">Seconds</p>
            </div>
          </div>
        ) : (
          <p className="text-2xl font-bold text-purple-400">
            
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
