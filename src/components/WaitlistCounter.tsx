import { useState, useEffect } from "react";
import { Users } from "lucide-react";

export const WaitlistCounter = () => {
  const [count, setCount] = useState(1278);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Simulate live counter updates
    const interval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance to increment
        setIsAnimating(true);
        setCount(prev => prev + Math.floor(Math.random() * 3) + 1);
        setTimeout(() => setIsAnimating(false), 500);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-6 bg-blue-500/5 rounded-full px-4 py-2 border border-blue-500/10">
      <Users className="w-4 h-4 text-primary" />
      <span className="font-light">
        🎉{" "}
        <span 
          className={`font-medium text-primary blur-sm ${isAnimating ? 'animate-pulse' : ''}`}
        >
          {count.toLocaleString()}
        </span>{" "}
        people already signed up!
      </span>
    </div>
  );
};