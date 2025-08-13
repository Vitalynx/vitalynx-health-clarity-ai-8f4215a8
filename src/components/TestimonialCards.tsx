import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const TestimonialCards = () => {
  const testimonials = [
    {
      text: "Vitalynx helped me understand my thyroid report in minutes. Game changer.",
      author: "Sarah M.",
      role: "Beta User",
      rating: 5
    },
    {
      text: "Finally, lab results that make sense! The AI explanations are incredibly clear.",
      author: "Dr. James K.",
      role: "Early Adopter",
      rating: 5
    }
  ];

  return (
    <section className="py-16 relative bg-dots-subtle-animated">
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/30"></div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/5 text-sm text-primary font-light mb-6 border border-primary/10">
            What Our Users Say
          </div>
          <h2 className="text-3xl md:text-4xl font-styrene text-foreground mb-4">
            Trusted by Healthcare Enthusiasts
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-soft bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Quote className="w-8 h-8 text-primary/30 group-hover:text-primary/50 transition-colors duration-300" />
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-foreground font-light leading-relaxed mb-6 text-lg">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground font-medium text-sm">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground blur-sm">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};