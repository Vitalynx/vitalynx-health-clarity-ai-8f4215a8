import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { StickyCtaButton } from "@/components/StickyCtaButton";
import { SocialProof } from "@/components/SocialProof";
import { TestimonialCards } from "@/components/TestimonialCards";
import { WaitlistCounter } from "@/components/WaitlistCounter";
import { DemoGifPlaceholder } from "@/components/DemoGifPlaceholder";
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
  Youtube,
  Instagram,
  ArrowDown,
  Moon,
  Sun,
  Play,
  Sparkles
} from "lucide-react";
import heroImage from "@/assets/hero-health-ai.jpg";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      toast({
        title: "Welcome to the waitlist!",
        description: "We'll notify you when Vitalynx is ready for launch.",
      });
      console.log("Signup email:", email);
    }
  };

  const scrollToSignup = () => {
    const signupSection = document.getElementById('signup-section');
    if (signupSection) {
      signupSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="antialiased bg-background text-foreground overflow-x-hidden">
      {/* Sticky CTA Button */}
      <StickyCtaButton onClick={scrollToSignup} />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <img 
                  src="/lovable-uploads/85d96c69-e8d1-4e3f-8ae9-bc744d66a744.png" 
                  alt="Vitalynx Logo" 
                  className="w-8 h-8 transition-all duration-700 group-hover:scale-110 group-hover:rotate-[5deg]"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-light tracking-tight text-foreground">Vitalynx</span>
                <span className="text-[9px] text-primary/60 tracking-[0.3em] uppercase font-medium -mt-1">Health AI</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-12">
              <a href="#how" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 font-light">How it works</a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 font-light">About</a>
              <a href="#faq" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 font-light">FAQ</a>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={scrollToSignup}
                className="border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-light"
              >
                Early Access
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-16 bg-dots-hero">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/30 to-background/40"></div>
        <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                  <Activity className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-light">AI-Powered Health Insights</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-light text-foreground leading-tight">
                  Decode Your{" "}
                  <span className="font-medium bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                    Health
                  </span>
                  <br />Instantly
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg leading-relaxed font-light">
                  Upload lab reports and receive AI-powered explanations. Clear, actionable health insights from your medical data.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={scrollToSignup}
                  className="text-base px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300 font-light shadow-lg"
                >
                  Get Early Access
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="ghost" size="lg" className="text-base px-8 py-6 hover:bg-primary/5 hover:text-primary transition-all duration-300 font-light">
                  Learn More
                </Button>
              </div>
              
              <div className="flex items-center gap-8 text-sm text-muted-foreground pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="font-light">100% Private & Secure</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Demo GIF Placeholder */}
              <DemoGifPlaceholder />
              
              {/* Reduced size mobile mockup */}
              <div className="relative scale-75 origin-center">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group">
                  <img 
                    src={heroImage} 
                    alt="Vitalynx mobile app interface" 
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white space-y-2">
                    <div className="space-y-1">
                      <h3 className="text-lg font-light">Health Dashboard</h3>
                      <p className="text-xs opacity-90 font-light leading-relaxed">
                        Real-time biomarker analysis and personalized recommendations.
                      </p>
                    </div>
                    <div className="flex items-center gap-3 text-xs opacity-80">
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        <span>Secure</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        <span>HIPAA</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>AI-Powered</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-primary/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-secondary/10 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <SocialProof />

      {/* Stats Section */}
      <section className="py-12 border-y border-primary/10 relative bg-dots-subtle-animated">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/30"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { number: "10K+", label: "Users Waiting", icon: Users, color: "text-primary" },
              { number: "99.9%", label: "Accuracy Rate", icon: TrendingUp, color: "text-secondary" },
              { number: "<5s", label: "Analysis Time", icon: Zap, color: "text-accent" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-primary/20">
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-3xl font-light text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-light uppercase text-sm tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA after stats */}
        <div className="text-center mt-12">
          <Button 
            onClick={scrollToSignup}
            variant="outline"
            size="lg"
            className="bg-background/50 backdrop-blur-sm border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-light"
          >
            Get Early Access
            <ArrowDown className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-16 relative bg-dots-dynamic">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/30 to-background/40"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/5 text-sm text-primary font-light mb-6 border border-primary/10">
              Simple Process
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Three simple steps to unlock your health insights
            </p>
          </div>
          
          {/* Enhanced 3-step process */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 relative">
              {/* Connection lines for desktop */}
              <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30"></div>
              
              {[
                {
                  icon: Upload,
                  title: "Upload Your Lab Report", 
                  description: "Upload lab reports as PDF/image or enter test results manually. Our AI instantly recognizes and extracts your biomarker data.",
                  gradient: "from-primary/20 to-primary/30",
                  iconColor: "text-primary",
                  step: "01"
                },
                {
                  icon: Brain,
                  title: "AI Decodes Your Data",
                  description: "Our advanced AI analyzes your health data, comparing it to medical standards and identifying patterns and trends.",
                  gradient: "from-secondary/20 to-secondary/30", 
                  iconColor: "text-secondary",
                  step: "02"
                },
                {
                  icon: Sparkles,
                  title: "Get Personalized Insights",
                  description: "Receive clear explanations, health insights, and lifestyle recommendations tailored specifically to your results.",
                  gradient: "from-accent/20 to-accent/30",
                  iconColor: "text-accent",
                  step: "03"
                }
              ].map((step, index) => (
                <div key={index} className="group text-center relative z-10">
                  <div className="relative mb-8">
                    <div className={`mx-auto w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-primary/10 shadow-soft`}>
                      <step.icon className={`w-8 h-8 ${step.iconColor}`} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-medium shadow-glow">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-light mb-4 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA after How It Works */}
          <div className="text-center mt-16">
            <Button 
              onClick={scrollToSignup}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 font-light shadow-glow px-8 py-6 text-base"
            >
              Start Your Health Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <TestimonialCards />

      {/* FAQ */}
      <section id="faq" className="py-20 relative bg-dots-subtle-animated">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/30"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              FAQ
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
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
              <AccordionItem key={index} value={`item-${index}`} className="border-0 border-b border-primary/10">
                <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-light hover:text-primary transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 font-light leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          {/* CTA after FAQ */}
          <div className="text-center mt-16">
            <Button 
              onClick={scrollToSignup}
              variant="outline"
              size="lg"
              className="bg-background/50 backdrop-blur-sm border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-light"
            >
              Still have questions? Join the waitlist
              <ArrowDown className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Early Access */}
      <section id="signup-section" className="py-20 relative bg-dots-dynamic">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/30 to-background/40"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-light">Early Access</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Get Early Access
          </h2>
          <p className="text-lg text-muted-foreground mb-12 font-light leading-relaxed">
            Be first to experience AI-powered health insights.
          </p>
          
          {!isSubmitted ? (
            <div className="space-y-8">
              <form onSubmit={handleSignup} className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 h-12 bg-background/50 border-primary/20 font-light text-base backdrop-blur-sm focus:border-primary transition-colors duration-300"
                  />
                  <Button type="submit" size="lg" className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 font-light shadow-glow">
                    Join Waitlist
                    <Sparkles className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground font-light">
                  We'll only email you at launch. No spam. Ever.
                </p>
              </form>
              <WaitlistCounter />
            </div>
          ) : (
            <Card className="max-w-md mx-auto border-0 shadow-xl bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-light mb-4">You're on the list!</h3>
                <p className="text-muted-foreground font-light">
                  We'll notify you when Vitalynx is ready.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-primary/10 relative bg-dots-subtle-animated">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/30"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <img 
                  src="/lovable-uploads/85d96c69-e8d1-4e3f-8ae9-bc744d66a744.png" 
                  alt="Vitalynx Logo" 
                  className="w-7 h-7"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-light">Vitalynx</span>
                  <span className="text-[9px] text-primary/60 tracking-[0.3em] uppercase font-light -mt-1">Health AI</span>
                </div>
              </div>
              <p className="text-muted-foreground font-light leading-relaxed text-sm">
                Clarity for your health—AI-powered insights from your lab reports.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-light text-foreground">Product</h4>
              <ul className="space-y-3 text-muted-foreground font-light text-sm">
                <li><a href="#how" className="hover:text-primary transition-colors duration-300">How it Works</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors duration-300">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-300">Privacy</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-light text-foreground">Company</h4>
              <ul className="space-y-3 text-muted-foreground font-light text-sm">
                <li><a href="#" className="hover:text-primary transition-colors duration-300">Team</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            
              <div className="space-y-4">
                <h4 className="font-light text-foreground">Connect</h4>
                <div className="flex gap-3">
                  {[
                    { Icon: Linkedin, color: "hover:text-blue-500 hover:border-blue-500/30", href: "https://www.linkedin.com/in/vitalynx/" },
                    { Icon: Youtube, color: "hover:text-red-500 hover:border-red-500/30", href: "#" },
                    { Icon: Instagram, color: "hover:text-pink-500 hover:border-pink-500/30", href: "https://www.instagram.com/vitalynxlabs/" }
                  ].map(({ Icon, color, href }, index) => (
                    <a key={index} href={href} target="_blank" rel="noopener noreferrer" className={`w-10 h-10 border border-primary/20 rounded-xl flex items-center justify-center ${color} hover:bg-primary/5 transition-all duration-300 group`}>
                      <Icon className="w-4 h-4 text-muted-foreground group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  ))}
                </div>
              </div>
          </div>
          
          <div className="pt-6 border-t border-primary/10 text-center">
            <p className="text-muted-foreground font-light text-sm">&copy; 2024 Vitalynx. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
