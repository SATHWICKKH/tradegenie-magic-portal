import { Button } from '@/components/ui/button';
import { Sparkles, Play, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-genie.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Hero Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="TradeGenie AI Assistant"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="animate-float absolute top-1/4 left-1/4 w-2 h-2 bg-gold rounded-full opacity-60"></div>
        <div className="animate-float absolute top-1/3 right-1/4 w-1 h-1 bg-primary-glow rounded-full opacity-80" style={{animationDelay: '1s'}}></div>
        <div className="animate-float absolute bottom-1/3 left-1/3 w-3 h-3 bg-secondary rounded-full opacity-50" style={{animationDelay: '2s'}}></div>
        <div className="animate-float absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-gold rounded-full opacity-70" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center glass-card px-4 py-2 rounded-full mb-8 hover-glow">
            <Sparkles className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-foreground">
              AI-Powered Global Trade Assistant
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 leading-tight">
            <span className="text-gradient animate-shimmer">
              Unlock Global Trade
            </span>
            <br />
            <span className="text-foreground">
              Magic with{' '}
              <span className="text-gradient">TradeGenie</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering SMEs and women entrepreneurs worldwide with AI-driven trade intelligence, 
            blockchain security, and magical simplicity in global commerce.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              variant="magic" 
              size="xl"
              className="group"
            >
              Start Your Export Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="genie" 
              size="xl"
              className="group"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-6 hover-lift">
              <div className="w-12 h-12 bg-gradient-magic rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-playfair font-semibold text-lg mb-2">AI Matchmaking</h3>
              <p className="text-muted-foreground text-sm">Smart buyer-seller connections across 190+ countries</p>
            </div>

            <div className="glass-card p-6 hover-lift" style={{animationDelay: '0.1s'}}>
              <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-playfair font-semibold text-lg mb-2">Instant Documentation</h3>
              <p className="text-muted-foreground text-sm">Generate trade docs in seconds with AI precision</p>
            </div>

            <div className="glass-card p-6 hover-lift" style={{animationDelay: '0.2s'}}>
              <div className="w-12 h-12 bg-gradient-magic rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-playfair font-semibold text-lg mb-2">Blockchain Security</h3>
              <p className="text-muted-foreground text-sm">Secure, transparent transactions you can trust</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;