
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <img 
                  src="/lovable-uploads/85d96c69-e8d1-4e3f-8ae9-bc744d66a744.png" 
                  alt="Vitalynx Logo" 
                  className="w-8 h-8 transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-light tracking-tight text-foreground">Vitalynx</span>
                <span className="text-xs text-muted-foreground tracking-widest uppercase font-medium -mt-1 opacity-60">Health AI</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-12">
              <a href="#how" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-light">How it works</a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-light">About</a>
              <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-light">FAQ</a>
              <Button variant="outline" size="sm" className="border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-light">
                Early Access
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-8 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
                  <Activity className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-light">AI-Powered Health Insights</span>
                </div>
                <h1 className="text-6xl md:text-7xl font-extralight text-foreground leading-[0.9] tracking-tight">
                  Decode Your{" "}
                  <span className="font-light bg-gradient-primary bg-clip-text text-transparent">
                    Health
                  </span>
                  <br />Instantly
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed font-light">
                  Upload lab reports and receive AI-powered explanations you can trust. 
                  Clear, actionable health insights—no medical degree required.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base px-8 py-6 bg-foreground text-background hover:bg-foreground/90 hover:scale-[1.02] transition-all duration-300 font-light">
                  Get Early Access
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="ghost" size="lg" className="text-base px-8 py-6 hover:bg-muted transition-all duration-300 font-light">
                  Learn More
                </Button>
              </div>
              
              <div className="flex items-center gap-8 text-sm text-muted-foreground pt-8">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="font-light">100% Private & Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="font-light">No Medical Degree Required</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.01]">
                <img 
                  src={heroImage} 
                  alt="Vitalynx mobile app interface" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-lg font-light mb-2">Smart Health Analysis</h3>
                  <p className="text-sm opacity-90 font-light leading-relaxed">
                    Transform complex lab results into clear, personalized health insights instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-border/40">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-16 text-center">
            {[
              { number: "10K+", label: "Users Waiting", icon: Users },
              { number: "99.9%", label: "Accuracy Rate", icon: TrendingUp },
              { number: "<5s", label: "Analysis Time", icon: Zap }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <stat.icon className="w-6 h-6 text-background" />
                  </div>
                </div>
                <div className="text-4xl font-extralight text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-light tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 rounded-full bg-muted/50 text-sm text-muted-foreground font-light mb-8">
              Simple Process
            </div>
            <h2 className="text-5xl font-extralight text-foreground mb-6 tracking-tight">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Four simple steps to understanding your health
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
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
              <div key={index} className="group text-center">
                <div className="mx-auto w-16 h-16 bg-foreground rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <step.icon className="w-8 h-8 text-background" />
                </div>
                <div className="absolute top-4 right-4 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary font-light text-xs">
                  {index + 1}
                </div>
                <h3 className="text-lg font-light mb-4 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 bg-muted/20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-extralight text-foreground tracking-tight">
                About Vitalynx
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  We're democratizing health understanding. Too many people receive lab 
                  results they can't interpret, leaving them confused about their health.
                </p>
                <p>
                  Vitalynx bridges this gap with AI-powered explanations that make 
                  complex medical data accessible to everyone.
                </p>
              </div>
              <div className="flex gap-6 pt-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground font-light">Clarity</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground font-light">Empathy</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground font-light">Innovation</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardContent className="p-12">
                  <div className="text-center space-y-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Heart className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-light">Our Mission</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      Making health data understandable for everyone, so you can make informed 
                      decisions about your wellbeing.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extralight text-foreground mb-6 tracking-tight">
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
              },
              {
                question: "When will it be available?",
                answer: "Soon! Sign up for early access to be first to try Vitalynx."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-0 border-b border-border/40">
                <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-light">
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
      <section className="py-32 bg-muted/20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-light">Early Access</span>
          </div>
          <h2 className="text-5xl font-extralight text-foreground mb-6 tracking-tight">
            Get Early Access
          </h2>
          <p className="text-xl text-muted-foreground mb-12 font-light leading-relaxed">
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
                  className="flex-1 h-12 bg-background border-border/40 font-light"
                />
                <Button type="submit" size="lg" className="h-12 px-8 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 font-light">
                  Join Waitlist
                </Button>
              </div>
              <p className="text-sm text-muted-foreground font-light">
                No spam. Launch notifications only.
              </p>
            </form>
          ) : (
            <Card className="max-w-md mx-auto border-0 shadow-lg bg-card/50 backdrop-blur-sm">
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
      <footer className="py-20 border-t border-border/40">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <img 
                  src="/lovable-uploads/85d96c69-e8d1-4e3f-8ae9-bc744d66a744.png" 
                  alt="Vitalynx Logo" 
                  className="w-6 h-6"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-light">Vitalynx</span>
                  <span className="text-xs text-muted-foreground tracking-widest uppercase font-light -mt-1">Health AI</span>
                </div>
              </div>
              <p className="text-muted-foreground font-light leading-relaxed">
                Clarity for your health—AI-powered insights from your lab reports.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-light text-foreground">Product</h4>
              <ul className="space-y-3 text-muted-foreground font-light">
                <li><a href="#how" className="hover:text-foreground transition-colors duration-300">How it Works</a></li>
                <li><a href="#about" className="hover:text-foreground transition-colors duration-300">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Privacy</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-light text-foreground">Company</h4>
              <ul className="space-y-3 text-muted-foreground font-light">
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Team</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-light text-foreground">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border border-border/40 rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all duration-300 group">
                  <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                </a>
                <a href="#" className="w-10 h-10 border border-border/40 rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all duration-300 group">
                  <Twitter className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                </a>
                <a href="#" className="w-10 h-10 border border-border/40 rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all duration-300 group">
                  <Instagram className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border/40 text-center">
            <p className="text-muted-foreground font-light">&copy; 2024 Vitalynx. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
