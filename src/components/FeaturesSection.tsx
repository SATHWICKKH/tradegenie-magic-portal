import { Button } from '@/components/ui/button';
import { 
  Brain, 
  Globe, 
  FileText, 
  Shield, 
  BarChart3, 
  MessageSquare,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Trade Matchmaker",
      description: "Smart algorithms connect SMEs with verified global buyers and suppliers, analyzing compatibility, trade history, and market potential.",
      gradient: "gradient-magic"
    },
    {
      icon: Globe,
      title: "Multilingual Genie Assistant",
      description: "Chat with our AI in 100+ languages for real-time trade guidance, market insights, and cultural business etiquette.",
      gradient: "gradient-secondary"
    },
    {
      icon: FileText,
      title: "Automated Document Generator",
      description: "Generate invoices, contracts, certificates of origin, and customs forms instantly with AI-powered accuracy.",
      gradient: "gradient-magic"
    },
    {
      icon: Shield,
      title: "Trade Risk Analyzer",
      description: "Real-time analysis of political, economic, and payment risks across 190+ countries with actionable recommendations.",
      gradient: "gradient-secondary"
    },
    {
      icon: BarChart3,
      title: "Blockchain Document Vault",
      description: "Secure, immutable storage for all trade documents with smart contract integration and tamper-proof verification.",
      gradient: "gradient-magic"
    },
    {
      icon: MessageSquare,
      title: "Global Trade Insights",
      description: "AI-powered market intelligence, pricing trends, and demand forecasting to optimize your export strategy.",
      gradient: "gradient-secondary"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center glass-card px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-foreground">Core Features</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            <span className="text-gradient">Magical AI Tools</span>
            <br />
            <span className="text-foreground">for Global Trade</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the power of AI, blockchain, and IoT technologies working together 
            to transform your international trade operations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={feature.title}
                className="glass-card p-8 hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:animate-glow`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-playfair font-bold text-xl mb-4 text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="group text-primary hover:text-primary-glow p-0"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center glass-card p-12 hover-glow">
          <h3 className="text-3xl font-playfair font-bold mb-4 text-gradient">
            Ready to Transform Your Trade?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of SMEs already using TradeGenie to expand their global reach 
            and increase export revenue by up to 300%.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="magic" size="lg">
              Start 30-Day Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="genie" size="lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;