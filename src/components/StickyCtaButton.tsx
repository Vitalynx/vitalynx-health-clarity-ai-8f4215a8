import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, ChevronUp } from "lucide-react";

interface StickyCtaButtonProps {
  onClick: () => void;
  text?: string;
}

export const StickyCtaButton = ({ onClick, text = "Get Early Access" }: StickyCtaButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section');
      const signupSection = document.getElementById('signup-section');
      
      if (heroSection && signupSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const signupTop = signupSection.offsetTop;
        const scrollY = window.scrollY;
        
        // Show sticky button when past hero and before signup section
        setIsVisible(scrollY > heroBottom && scrollY < signupTop - 200);
        setIsAtTop(scrollY < 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button
        onClick={onClick}
        size="lg"
        className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-glow rounded-full px-6 py-3 font-light border border-primary/20"
      >
        {text}
        <ArrowDown className="w-4 h-4 ml-2 animate-bounce" />
      </Button>
    </div>
  );
};