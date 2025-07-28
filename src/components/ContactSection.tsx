import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Sparkles,
  MessageCircle
} from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center glass-card px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-foreground">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            <span className="text-foreground">Ready to Start Your</span>
            <br />
            <span className="text-gradient">Trade Journey?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with our team of trade experts and discover how TradeGenie can 
            transform your global business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="glass-card p-8 hover-glow">
            <h3 className="text-2xl font-playfair font-bold mb-6 text-gradient">
              Send us a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input 
                    placeholder="Your first name"
                    className="glass-card border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Your last name"
                    className="glass-card border-border"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input 
                  type="email"
                  placeholder="your@email.com"
                  className="glass-card border-border"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Company
                </label>
                <Input 
                  placeholder="Your company name"
                  className="glass-card border-border"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your trade goals and how we can help..."
                  rows={5}
                  className="glass-card border-border resize-none"
                />
              </div>
              
              <Button variant="magic" size="lg" className="w-full">
                Send Message
                <Send className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="glass-card p-8 hover-lift">
              <h3 className="text-2xl font-playfair font-bold mb-6 text-gradient">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-magic rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                    <p className="text-muted-foreground">hello@tradegenie.ai</p>
                    <p className="text-muted-foreground">support@tradegenie.ai</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                    <p className="text-muted-foreground">+1 (555) 123-TRADE</p>
                    <p className="text-muted-foreground">24/7 Support Available</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-magic rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Visit Us</h4>
                    <p className="text-muted-foreground">123 Innovation Drive</p>
                    <p className="text-muted-foreground">Tech City, TC 12345</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Chat */}
            <div className="glass-card p-8 hover-lift">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-xl font-playfair font-bold mb-3 text-gradient">
                  Chat with Our AI Genie
                </h3>
                <p className="text-muted-foreground mb-6">
                  Get instant answers to your trade questions. Our AI assistant is available 24/7 
                  to help you explore TradeGenie's capabilities.
                </p>
                <Button variant="genie" size="lg" className="w-full">
                  Start Live Chat
                  <MessageCircle className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass-card p-6 text-center hover-lift">
                <h4 className="font-playfair font-bold text-lg mb-2 text-foreground">
                  Schedule Demo
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  See TradeGenie in action
                </p>
                <Button variant="gold" size="sm" className="w-full">
                  Book Demo
                </Button>
              </div>
              
              <div className="glass-card p-6 text-center hover-lift">
                <h4 className="font-playfair font-bold text-lg mb-2 text-foreground">
                  Free Trial
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  30 days, no commitment
                </p>
                <Button variant="magic" size="sm" className="w-full">
                  Start Trial
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;