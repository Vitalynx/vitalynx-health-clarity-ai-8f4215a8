
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  MessageSquare, 
  Brain, 
  FileText, 
  Shield, 
  Zap, 
  Users, 
  Mail,
  CheckCircle,
  ArrowRight,
  Heart,
  Lock,
  Smartphone,
  Star,
  TrendingUp,
  Activity,
  Linkedin,
  Twitter,
  Instagram
} from "lucide-react";
import heroImage from "@/assets/hero-health-ai.jpg";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      console.log("Signup email:", email);
    }
  };

  return (
    <div className="antialiased bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/20">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="relative">
                <img 
                  src="/lovable-uploads/85d96c69-e8d1-4e3f-8ae9-bc744d66a744.png" 
                  alt="Vitalynx Logo" 
                  className="w-9 h-9 transition-all duration-700 group-hover:scale-110 group-hover:rotate-[5deg]"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-light tracking-tight text-foreground">Vitalynx</span>
                <span className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase font-medium -mt-1 opacity-50">Health AI</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-16">
              <a href="#how" className="text-sm text-muted-foreground hover:text-foreground transition-all duration-500 font-light tracking-wide">How it works</a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-all duration-500 font-light tracking-wide">About</a>
              <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-all duration-500 font-light tracking-wide">FAQ</a>
              <Button variant="outline" size="sm" className="border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 font-light tracking-wide">
                Early Access
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Dots Background */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 bg-grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
        <div className="max-w-7xl mx-auto px-8 py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-16">
              <div className="space-y-12">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/5 border border-primary/10 backdrop-blur-sm">
                  <Activity className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-light tracking-wide">AI-Powered Health Insights</span>
                </div>
                <h1 className="text-7xl md:text-8xl font-extralight text-foreground leading-[0.85] tracking-tighter">
                  Decode Your{" "}
                  <span className="font-light bg-gradient-primary bg-clip-text text-transparent">
                    Health
                  </span>
                  <br />Instantly
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed font-light tracking-wide">
                  Upload lab reports and receive AI-powered explanations you can trust. Clear, actionable health insights—no medical degree required.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="text-base px-10 py-7 bg-foreground text-background hover:bg-foreground/90 hover:scale-[1.02] transition-all duration-500 font-light tracking-wide">
                  Get Early Access
                  <ArrowRight className="w-4 h-4 ml-3" />
                </Button>
                <Button variant="ghost" size="lg" className="text-base px-10 py-7 hover:bg-muted/50 transition-all duration-500 font-light tracking-wide">
                  Learn More
                </Button>
              </div>
              
              <div className="flex items-center gap-12 text-sm text-muted-foreground pt-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="font-light tracking-wide">100% Private & Secure</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="font-light tracking-wide">No Medical Degree Required</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] group">
                <img 
                  src={heroImage} 
                  alt="Vitalynx mobile app interface" 
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10 text-white">
                  <h3 className="text-xl font-light mb-3 tracking-wide">Smart Health Analysis</h3>
                  <p className="text-sm opacity-90 font-light leading-relaxed tracking-wide">
                    Transform complex lab results into clear, personalized health insights instantly.
                  </p>
                </div>
              </div>
              {/* Subtle background accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with subtle dots */}
      <section className="py-32 border-y border-border/20 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-20 text-center">
            {[
              { number: "10K+", label: "Users Waiting", icon: Users },
              { number: "99.9%", label: "Accuracy Rate", icon: TrendingUp },
              { number: "<5s", label: "Analysis Time", icon: Zap }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-16 bg-foreground rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
                    <stat.icon className="w-7 h-7 text-background" />
                  </div>
                </div>
                <div className="text-5xl font-extralight text-foreground mb-4 tracking-tighter">{stat.number}</div>
                <div className="text-muted-foreground font-light tracking-widest uppercase text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-40 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-32">
            <div className="inline-block px-6 py-3 rounded-full bg-muted/30 text-sm text-muted-foreground font-light mb-12 tracking-widest uppercase">
              Simple Process
            </div>
            <h2 className="text-6xl font-extralight text-foreground mb-8 tracking-tighter">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light tracking-wide">
              Four simple steps to understanding your health
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
            {[
              {
                icon: Upload,
                title: "Upload Report",
                description: "Upload lab reports as PDF/image or enter results manually"
              },
              {
                icon: MessageSquare,
                title: "Add Context",
                description: "Share symptoms or health concerns for better insights"
              },
              {
                icon: Brain,
                title: "AI Analysis",
                description: "Our AI analyzes your data and provides instant insights"
              },
              {
                icon: FileText,
                title: "Get Summary",
                description: "Receive personalized health summary with recommendations"
              }
            ].map((step, index) => (
              <div key={index} className="group text-center relative">
                <div className="mx-auto w-20 h-20 bg-foreground rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                  <step.icon className="w-9 h-9 text-background" />
                </div>
                <div className="absolute top-6 right-6 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-light text-sm tracking-wider">
                  {index + 1}
                </div>
                <h3 className="text-xl font-light mb-6 text-foreground tracking-wide">{step.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed tracking-wide">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-40 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
        <div className="max-w-4xl mx-auto px-8 relative z-10">
          <div className="text-center mb-32">
            <h2 className="text-6xl font-extralight text-foreground mb-8 tracking-tighter">
              FAQ
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-6">
            {[
              {
                question: "How does Vitalynx work?",
                answer: "Upload your lab report, add symptoms/concerns, and get AI-powered health insights in seconds."
              },
              {
                question: "Is my data safe?",
                answer: "Yes. Enterprise-grade encryption, HIPAA compliant, and we never sell your health data."
              },
              {
                question: "What reports can I upload?",
                answer: "Most lab reports as PDFs/images: blood work, metabolic panels, lipid profiles, and more."
              },
              {
                question: "Does this replace my doctor?",
                answer: "No. Vitalynx helps you understand results but always consult your healthcare provider for medical decisions."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-0 border-b border-border/20">
                <AccordionTrigger className="text-left hover:no-underline py-8 text-xl font-light tracking-wide">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-8 font-light leading-relaxed tracking-wide text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Early Access */}
      <section className="py-40 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/5 border border-primary/10 mb-12 backdrop-blur-sm">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-light tracking-widest uppercase">Early Access</span>
          </div>
          <h2 className="text-6xl font-extralight text-foreground mb-8 tracking-tighter">
            Get Early Access
          </h2>
          <p className="text-xl text-muted-foreground mb-16 font-light leading-relaxed tracking-wide">
            Be first to experience AI-powered health insights.
          </p>
          
          {!isSubmitted ? (
            <form onSubmit={handleSignup} className="space-y-12">
              <div className="flex flex-col sm:flex-row gap-6 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-14 bg-background/50 border-border/30 font-light text-base tracking-wide backdrop-blur-sm"
                />
                <Button type="submit" size="lg" className="h-14 px-10 bg-foreground text-background hover:bg-foreground/90 transition-all duration-500 font-light tracking-wide">
                  Join Waitlist
                </Button>
              </div>
              <p className="text-sm text-muted-foreground font-light tracking-wide">
                No spam. Launch notifications only.
              </p>
            </form>
          ) : (
            <Card className="max-w-md mx-auto border-0 shadow-xl bg-card/50 backdrop-blur-sm">
              <CardContent className="p-12 text-center">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-8" />
                <h3 className="text-2xl font-light mb-6 tracking-wide">You're on the list!</h3>
                <p className="text-muted-foreground font-light tracking-wide">
                  We'll notify you when Vitalynx is ready.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-border/20 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img 
                  src="/lovable-uploads/85d96c69-e8d1-4e3f-8ae9-bc744d66a744.png" 
                  alt="Vitalynx Logo" 
                  className="w-8 h-8"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-light tracking-tight">Vitalynx</span>
                  <span className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase font-light -mt-1 opacity-50">Health AI</span>
                </div>
              </div>
              <p className="text-muted-foreground font-light leading-relaxed tracking-wide">
                Clarity for your health—AI-powered insights from your lab reports.
              </p>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-light text-foreground tracking-wide">Product</h4>
              <ul className="space-y-4 text-muted-foreground font-light">
                <li><a href="#how" className="hover:text-foreground transition-colors duration-500 tracking-wide">How it Works</a></li>
                <li><a href="#about" className="hover:text-foreground transition-colors duration-500 tracking-wide">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-500 tracking-wide">Privacy</a></li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-light text-foreground tracking-wide">Company</h4>
              <ul className="space-y-4 text-muted-foreground font-light">
                <li><a href="#" className="hover:text-foreground transition-colors duration-500 tracking-wide">Team</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-500 tracking-wide">Contact</a></li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-light text-foreground tracking-wide">Connect</h4>
              <div className="flex gap-4">
                {[Linkedin, Twitter, Instagram].map((Icon, index) => (
                  <a key={index} href="#" className="w-12 h-12 border border-border/30 rounded-2xl flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all duration-500 group">
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-500" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-border/20 text-center">
            <p className="text-muted-foreground font-light tracking-wide">&copy; 2024 Vitalynx. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
