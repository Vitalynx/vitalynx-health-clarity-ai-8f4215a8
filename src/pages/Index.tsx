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
  Smartphone
} from "lucide-react";
import heroImage from "@/assets/hero-health-ai.jpg";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically send the email to your backend
      console.log("Signup email:", email);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-section">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  <Heart className="w-4 h-4 mr-2" />
                  Clarity for your health
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  Decode Your Health,{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Instantly
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Upload your lab reports and get AI-powered, personalized explanations you can trust. 
                  No more confusion—just clear, actionable health insights.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                  Get Early Access
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Learn More
                </Button>
              </div>
              
              <div className="flex items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>100% Private & Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>No Medical Degree Required</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full"></div>
              <img 
                src={heroImage} 
                alt="AI-powered health insights" 
                className="relative z-10 w-full h-auto rounded-2xl shadow-glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get personalized health insights in four simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Upload,
                title: "Upload Your Report",
                description: "Upload your lab report as PDF, image, or enter results manually"
              },
              {
                icon: MessageSquare,
                title: "Add Context",
                description: "Tell us about any symptoms or concerns you have"
              },
              {
                icon: Brain,
                title: "AI Analysis",
                description: "Our AI analyzes your results and provides instant insights"
              },
              {
                icon: FileText,
                title: "Get Your Summary",
                description: "Receive a personalized health summary with actionable recommendations"
              }
            ].map((step, index) => (
              <Card key={index} className="relative text-center border-0 shadow-soft hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {step.description}
                  </CardDescription>
                </CardContent>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 md:py-24 bg-muted/30">
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
                description: "Advanced AI interprets your lab results with medical accuracy"
              },
              {
                icon: Smartphone,
                title: "Multiple Input Methods",
                description: "Upload PDFs, images, or manually enter your test results"
              },
              {
                icon: MessageSquare,
                title: "Symptom Integration",
                description: "Add your symptoms for more personalized interpretations"
              },
              {
                icon: FileText,
                title: "Detailed Summaries",
                description: "Get comprehensive health reports in plain language"
              },
              {
                icon: Shield,
                title: "Privacy First",
                description: "Your health data is encrypted and never shared"
              },
              {
                icon: Zap,
                title: "Instant Results",
                description: "Get your health insights in seconds, not days"
              }
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
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

      {/* About Vitalynx */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                About Vitalynx
              </h2>
              <p className="text-lg text-muted-foreground">
                We're on a mission to democratize health understanding. Too many people receive lab 
                results they can't interpret, leaving them confused and anxious about their health.
              </p>
              <p className="text-lg text-muted-foreground">
                Vitalynx bridges this gap by providing instant, AI-powered explanations that make 
                complex medical data accessible to everyone. Our goal is to empower you to take 
                control of your health journey with confidence and clarity.
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
                <Badge variant="secondary" className="px-4 py-2">
                  <Lock className="w-4 h-4 mr-2" />
                  Privacy
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
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate healthcare innovators dedicated to your wellbeing
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Vansh Patel",
                role: "Co-Founder & CEO",
                description: "Healthcare technology visionary with a passion for making medical data accessible."
              },
              {
                name: "Co-Founder",
                role: "CTO",
                description: "AI and machine learning expert focused on healthcare applications."
              },
              {
                name: "Team Member",
                role: "Head of Product",
                description: "User experience designer ensuring our platform is intuitive and helpful."
              }
            ].map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-soft hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy & Security */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Privacy & Security
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your health data is precious. We protect it with enterprise-grade security.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "End-to-End Encryption",
                description: "All your data is encrypted both in transit and at rest"
              },
              {
                icon: Lock,
                title: "No Data Sharing",
                description: "We never sell, share, or monetize your personal health information"
              },
              {
                icon: CheckCircle,
                title: "HIPAA Compliant",
                description: "Built to meet the highest healthcare privacy standards"
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
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "How does Vitalynx work?",
                  answer: "Simply upload your lab report or enter your test results manually. Add any symptoms or concerns you have, and our AI will analyze your data to provide personalized, easy-to-understand health insights in seconds."
                },
                {
                  question: "Is my health data safe and private?",
                  answer: "Absolutely. We use enterprise-grade encryption to protect your data both in transit and at rest. We never sell, share, or monetize your personal health information, and we're built to meet HIPAA compliance standards."
                },
                {
                  question: "What types of lab reports can I upload?",
                  answer: "You can upload most common lab reports as PDFs or images, including blood work, metabolic panels, lipid profiles, and more. You can also manually enter your test results if you prefer."
                },
                {
                  question: "Is this a replacement for consulting with my doctor?",
                  answer: "No, Vitalynx is designed to help you understand your lab results, not replace professional medical advice. Always consult with your healthcare provider for medical decisions and treatment plans."
                },
                {
                  question: "How accurate are the AI interpretations?",
                  answer: "Our AI is trained on extensive medical literature and lab result databases to provide accurate interpretations. However, our insights are educational and should complement, not replace, professional medical consultation."
                },
                {
                  question: "When will Vitalynx be available?",
                  answer: "We're currently in development and will be launching soon! Sign up for early access to be among the first to try Vitalynx when we launch."
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
      <section className="py-16 md:py-24 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get Early Access
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Be the first to experience AI-powered health insights. Join our waitlist and we'll 
              notify you when Vitalynx launches.
            </p>
            
            {!isSubmitted ? (
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Button type="submit" variant="cta" size="lg">
                    Join Waitlist
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  No spam. We'll only notify you when we launch!
                </p>
              </form>
            ) : (
              <Card className="max-w-md mx-auto border-0 shadow-glow">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">You're on the list!</h3>
                  <p className="text-muted-foreground">
                    We'll notify you as soon as Vitalynx is ready.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Questions? We're Here to Help
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have questions about Vitalynx or want to learn more? We'd love to hear from you.
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
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Vitalynx</h3>
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
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
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