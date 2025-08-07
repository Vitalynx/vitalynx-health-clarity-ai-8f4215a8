import { Building, GraduationCap, Heart, Stethoscope, Users2, Shield } from "lucide-react";

export const SocialProof = () => {
  const trustedLogos = [
    { name: "HealthLab", icon: Building },
    { name: "MedUniversity", icon: GraduationCap },
    { name: "WellnessCorp", icon: Heart },
    { name: "ClinicalInc", icon: Stethoscope },
    { name: "LifeScience", icon: Users2 },
    { name: "SafeHealth", icon: Shield }
  ];

  return (
    <section className="py-12 border-y border-primary/10 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground font-light tracking-wide">TRUSTED BY</p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center opacity-40">
          {trustedLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
            >
              <logo.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-light hidden sm:block">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};