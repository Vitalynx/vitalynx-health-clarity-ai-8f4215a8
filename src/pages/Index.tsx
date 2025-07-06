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
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube
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
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/60">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <img 
                  src="/lovable-uploads/85d96c69-e8d1-4e3f-8ae9-bc744d66a744.png" 
                  alt="Vitalynx Logo" 
                  className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 rounded-lg blur-lg transition-opacity duration-300 group-hover:opacity-20"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">Vitalynx</span>
                <span className="text-xs text-muted-foreground tracking-wider uppercase font-medium -mt-1">Health AI</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors font-medium">Features</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-medium">About</a>
              <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors font-medium">FAQ</a>
              <Button variant="outline" size="sm" className="border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Get Early Access
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-section pt-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-3"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit animate-pulse border-primary/20 bg-primary/5">
                  <Activity className="w-4 h-4 mr-2 text-primary" />
                  <span className="text-primary">AI-Powered Health Insights</span>
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                  Decode Your{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Health
                  </span>
                  , Instantly
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                  Upload lab reports and get AI-powered explanations you can trust. 
                  Clear, actionable health insights—no medical degree required.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-12 py-8 bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300 border-0">
                  Get Early Access
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-12 py-8 border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                  Learn More
                </Button>
              </div>
              
              <div className="flex items-center gap-8 text-sm text-muted-foreground pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>100% Private & Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>No Medical Degree Required</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-primary opacity-15 blur-3xl rounded-full animate-pulse"></div>
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-glow transition-all duration-500 hover:scale-[1.02]">
                <img 
                  src={heroImage} 
                  alt="Vitalynx mobile app interface showing personalized health insights and lab report analysis on smartphone" 
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                  <h3 className="text-lg font-semibold mb-2">Smart Health Analysis</h3>
                  <p className="text-sm opacity-90">
                    Instantly transform complex lab results into clear, personalized health insights with our AI-powered mobile interface.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "10K+", label: "Users Waiting", icon: Users },
              { number: "99.9%", label: "Accuracy Rate", icon: TrendingUp },
              { number: "<5s", label: "Analysis Time", icon: Zap }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-soft">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="features" className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Simple Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get health insights in four simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Upload,
                title: "Upload Report",
                description: "Upload lab reports as PDF/image or enter results manually",
                delay: "0ms"
              },
              {
                icon: MessageSquare,
                title: "Add Context",
                description: "Share symptoms or health concerns for better insights",
                delay: "100ms"
              },
              {
                icon: Brain,
                title: "AI Analysis",
                description: "Our AI analyzes your data and provides instant insights",
                delay: "200ms"
              },
              {
                icon: FileText,
                title: "Get Summary",
                description: "Receive personalized health summary with recommendations",
                delay: "300ms"
              }
            ].map((step, index) => (
              <Card 
                key={index} 
                className="relative text-center border-0 shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group"
                style={{ animationDelay: step.delay }}
              >
                <CardHeader className="pb-4">
                  <div className="mx-auto w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute top-6 right-6 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                    {index + 1}
                  </div>
                  <CardTitle className="text-xl mb-3">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary/60" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to understand your health data
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI-Powered Insights",
                description: "Advanced AI interprets lab results with medical accuracy"
              },
              {
                icon: Smartphone,
                title: "Multiple Input Methods",
                description: "Upload PDFs, images, or manually enter test results"
              },
              {
                icon: MessageSquare,
                title: "Symptom Integration",
                description: "Add symptoms for more personalized interpretations"
              },
              {
                icon: FileText,
                title: "Detailed Summaries",
                description: "Comprehensive health reports in plain language"
              },
              {
                icon: Shield,
                title: "Privacy First",
                description: "Your health data is encrypted and never shared"
              },
              {
                icon: Zap,
                title: "Instant Results",
                description: "Get health insights in seconds, not days"
              }
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-glow transition-all duration-300 bg-card/80 backdrop-blur-sm hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 shadow-soft">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About & Team Combined */}
      <section id="about" className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                About Vitalynx
              </h2>
              <p className="text-lg text-muted-foreground">
                We're democratizing health understanding. Too many people receive lab 
                results they can't interpret, leaving them confused about their health.
              </p>
              <p className="text-lg text-muted-foreground">
                Vitalynx bridges this gap with AI-powered explanations that make 
                complex medical data accessible to everyone.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="px-4 py-2">
                  <Heart className="w-4 h-4 mr-2" />
                  Clarity
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Users className="w-4 h-4 mr-2" />
                  Empathy
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Brain className="w-4 h-4 mr-2" />
                  Innovation
                </Badge>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-10 blur-3xl rounded-3xl"></div>
              <Card className="relative border-0 shadow-glow">
                <CardContent className="p-8">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">Our Mission</h3>
                    <p className="text-muted-foreground">
                      Making health data understandable for everyone, so you can make informed 
                      decisions about your wellbeing.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Our Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet Our Founders
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                name: "Vansh Verma",
                role: "Co-Founder & CEO",
                description: "Healthcare technology visionary passionate about making medical data accessible."
              },
              {
                name: "Abaan Azhar",
                role: "Co-Founder & CTO",
                description: "AI expert focused on building reliable healthcare applications."
              }
            ].map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader className="pb-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy & Security */}
      <section className="py-20 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Privacy & Security
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your health data is protected with enterprise-grade security.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "End-to-End Encryption",
                description: "All data encrypted in transit and at rest"
              },
              {
                icon: Lock,
                title: "No Data Sharing",
                description: "We never sell or share your health information"
              },
              {
                icon: CheckCircle,
                title: "HIPAA Compliant",
                description: "Built to meet healthcare privacy standards"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-soft">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              FAQ
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
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
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-card shadow-soft">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Early Access Signup */}
      <section className="py-20 md:py-24 bg-gradient-section relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              <Star className="w-4 h-4 mr-2" />
              Early Access
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get Early Access
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Be first to experience AI-powered health insights. Join our waitlist for launch notification.
            </p>
            
            {!isSubmitted ? (
              <form onSubmit={handleSignup} className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 h-14 text-lg"
                  />
                  <Button type="submit" variant="cta" size="lg" className="h-14 px-8 hover:scale-105 transition-all duration-300">
                    Join Waitlist
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  No spam. Launch notifications only!
                </p>
              </form>
            ) : (
              <Card className="max-w-md mx-auto border-0 shadow-glow animate-scale-in">
                <CardContent className="p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">You're on the list!</h3>
                  <p className="text-muted-foreground text-lg">
                    We'll notify you when Vitalynx is ready.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Questions? We're Here to Help
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have questions about Vitalynx? We'd love to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="outline" size="lg" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                hello@vitalynx.com
              </Button>
              <Button variant="ghost" size="lg">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img 
                  src="/lovable-uploads/85d96c69-e8d1-4e3f-8ae9-bc744d66a744.png" 
                  alt="Vitalynx Logo" 
                  className="w-8 h-8 brightness-0 invert"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-bold">Vitalynx</span>
                  <span className="text-xs text-gray-400 tracking-wider uppercase font-medium -mt-1">Health AI</span>
                </div>
              </div>
              <p className="text-gray-300">
                Clarity for your health—AI-powered insights from your lab reports.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors group">
                  <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors group">
                  <Twitter className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors group">
                  <Facebook className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors group">
                  <Instagram className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors group">
                  <Youtube className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Vitalynx. All rights reserved.</p>
            <div className="flex justify-center gap-6 mt-4 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
