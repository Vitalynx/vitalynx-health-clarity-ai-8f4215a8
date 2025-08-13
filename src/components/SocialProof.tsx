import { Building, GraduationCap, Heart, Stethoscope, Users2, Shield } from "lucide-react";

export const SocialProof = () => {
  const trustedLogos = [
    { name: "Leading Health Institute", icon: Building },
    { name: "Top Medical University", icon: GraduationCap },
    { name: "Global Wellness Platform", icon: Heart },
    { name: "Premier Clinical Lab", icon: Stethoscope },
    { name: "Medical Research Center", icon: Users2 },
    { name: "Healthcare Security Firm", icon: Shield }
  ];

  return (
    <section className="py-8 border-y border-primary/10 bg-muted/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-6">
          <p className="text-xs text-muted-foreground font-light tracking-wider uppercase">Trusted by Healthcare Leaders</p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center opacity-30">
          {trustedLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
            >
              <logo.icon className="w-5 h-5 group-hover:scale-105 transition-transform duration-300" />
              <span className="text-xs font-light hidden lg:block blur-sm">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};