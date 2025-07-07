
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
              <Button variant="outline" size="sm" className="border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-light">
                Early Access
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-16 bg-enhanced-dots">
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background"></div>
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
                <Button size="lg" className="text-base px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300 font-light shadow-lg">
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
            
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] group">
                <img 
                  src={heroImage} 
                  alt="Vitalynx mobile app interface" 
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-light mb-2">Smart Health Analysis Dashboard</h3>
                    <p className="text-sm opacity-90 font-light leading-relaxed">
                      Transform complex lab results into clear, personalized health insights instantly. Get comprehensive analysis of your biomarkers, trends, and actionable recommendations.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-xs opacity-80">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Real-time Analysis</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>HIPAA Compliant</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>AI-Powered</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-primary/10 relative bg-enhanced-dots">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background"></div>
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
      </section>

      {/* How It Works */}
      <section id="how" className="py-16 relative bg-enhanced-dots">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/5 text-sm text-primary font-light mb-6 border border-primary/10">
              Simple Process
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Four simple steps to understanding your health
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Upload,
                title: "Upload Report", 
                description: "Upload lab reports as PDF/image or enter results manually",
                gradient: "from-primary/20 to-primary/30",
                iconColor: "text-primary"
              },
              {
                icon: MessageSquare,
                title: "Add Context",
                description: "Share symptoms or health concerns for better insights",
                gradient: "from-secondary/20 to-secondary/30", 
                iconColor: "text-secondary"
              },
              {
                icon: Brain,
                title: "AI Analysis",
                description: "Our AI analyzes your data and provides instant insights",
                gradient: "from-accent/20 to-accent/30",
                iconColor: "text-accent"
              },
              {
                icon: FileText,
                title: "Get Summary",
                description: "Receive personalized health summary with recommendations",
                gradient: "from-primary/20 to-primary/30",
                iconColor: "text-primary"
              }
            ].map((step, index) => (
              <div key={index} className="group text-center relative">
                <div className={`mx-auto w-14 h-14 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-primary/10`}>
                  <step.icon className={`w-6 h-6 ${step.iconColor}`} />
                </div>
                <h3 className="text-lg font-light mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 relative">
        <div className="absolute inset-0 bg-enhanced-dots opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background"></div>
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
        </div>
      </section>

      {/* Early Access */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-enhanced-dots opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background"></div>
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
            <form onSubmit={handleSignup} className="space-y-8">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-12 bg-background/50 border-primary/20 font-light text-base backdrop-blur-sm focus:border-primary transition-colors duration-300"
                />
                <Button type="submit" size="lg" className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-light shadow-lg">
                  Join Waitlist
                </Button>
              </div>
              <p className="text-sm text-muted-foreground font-light">
                No spam. Launch notifications only.
              </p>
            </form>
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
      <footer className="py-12 border-t border-primary/10 relative">
        <div className="absolute inset-0 bg-enhanced-dots opacity-5"></div>
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
                  { Icon: Linkedin, color: "hover:text-blue-500 hover:border-blue-500/30" },
                  { Icon: Twitter, color: "hover:text-blue-400 hover:border-blue-400/30" },
                  { Icon: Instagram, color: "hover:text-pink-500 hover:border-pink-500/30" }
                ].map(({ Icon, color }, index) => (
                  <a key={index} href="#" className={`w-10 h-10 border border-primary/20 rounded-xl flex items-center justify-center ${color} hover:bg-primary/5 transition-all duration-300 group`}>
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
