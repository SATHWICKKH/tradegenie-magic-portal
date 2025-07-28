import { Button } from '@/components/ui/button';
import { 
  Users, 
  TrendingUp, 
  Award, 
  Heart,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { value: "50,000+", label: "SMEs Empowered", icon: Users },
    { value: "190+", label: "Countries Connected", icon: TrendingUp },
    { value: "$2.3B+", label: "Trade Volume Facilitated", icon: Award },
    { value: "65%", label: "Women-Led Businesses", icon: Heart }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center glass-card px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-foreground">About TradeGenie</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            <span className="text-foreground">Empowering</span>
            <br />
            <span className="text-gradient">Global Trade Magic</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div>
            <h3 className="text-3xl font-playfair font-bold mb-6 text-foreground">
              Revolutionizing SME Exports with AI-Powered Intelligence
            </h3>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                TradeGenie was born from a simple yet powerful vision: to democratize global trade 
                and empower small and medium enterprises, especially women-led businesses, to 
                compete on the world stage.
              </p>
              
              <p>
                Our magical AI assistant combines cutting-edge artificial intelligence, blockchain 
                security, and IoT connectivity to eliminate traditional barriers in international 
                trade. From language differences to complex documentation, from finding trusted 
                partners to navigating regulations – TradeGenie makes it all effortless.
              </p>
              
              <p>
                We believe that every entrepreneur, regardless of size or location, deserves access 
                to global markets. That's why we've created a platform that feels like having a 
                personal trade expert, available 24/7, speaking your language, and understanding 
                your unique challenges.
              </p>
            </div>

            <div className="mt-8">
              <Button variant="magic" size="lg">
                Our Story
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="glass-card p-8 hover-glow">
              <div className="space-y-6">
                <div className="text-center">
                  <h4 className="text-2xl font-playfair font-bold text-gradient mb-4">
                    Our Mission
                  </h4>
                  <p className="text-muted-foreground">
                    To create a world where geographic boundaries don't limit business potential, 
                    and where AI serves as the great equalizer in global commerce.
                  </p>
                </div>
                
                <div className="border-t border-border pt-6">
                  <h4 className="text-2xl font-playfair font-bold text-gradient mb-4 text-center">
                    Our Values
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-magic rounded-xl flex items-center justify-center mx-auto mb-2">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <p className="font-semibold text-sm">Empowerment</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-2">
                        <Users className="w-6 h-6 text-foreground" />
                      </div>
                      <p className="font-semibold text-sm">Inclusivity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.label}
                className="text-center glass-card p-6 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-magic rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-playfair font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Women Empowerment Highlight */}
        <div className="glass-card p-12 text-center hover-glow">
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-gradient-secondary rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-foreground" />
            </div>
            
            <h3 className="text-3xl font-playfair font-bold mb-6 text-gradient">
              Empowering Women Entrepreneurs Globally
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              65% of TradeGenie users are women-led businesses. We're proud to support female 
              entrepreneurs in breaking into global markets, with specialized programs, mentorship, 
              and reduced pricing for women-owned SMEs.
            </p>
            
            <Button variant="gold" size="lg">
              Women in Trade Program
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;