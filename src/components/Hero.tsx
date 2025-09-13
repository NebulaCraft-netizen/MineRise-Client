import { Button } from "@/components/ui/button";
import { Download, Play, Star } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-8 h-8 bg-gaming-primary/20 rounded-sm animate-float"></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-gaming-secondary/30 rounded-sm animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-10 h-10 bg-gaming-primary/15 rounded-sm animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-60 right-10 w-7 h-7 bg-gaming-secondary/25 rounded-sm animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-gradient-gaming rounded-2xl flex items-center justify-center shadow-glow animate-glow">
            <span className="text-background font-bold text-4xl">M</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-8xl font-black text-foreground mb-6 leading-tight">
          MINERISE
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          The ultimate Minecraft client for competitive gaming and performance optimization
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-gaming hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 h-auto animate-glow"
          >
            <Download size={20} className="mr-3" />
            Download for Free
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-gaming-primary text-gaming-primary hover:bg-gaming-primary hover:text-background transition-all duration-300 text-lg px-8 py-6 h-auto"
          >
            <Play size={20} className="mr-3" />
            Watch Trailer
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-center">
          <div className="flex items-center space-x-2">
            <Star className="text-gaming-primary" size={20} />
            <span className="text-sm text-muted-foreground">
              <span className="text-foreground font-semibold">250K+</span> Downloads
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-gaming-secondary rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">
              <span className="text-foreground font-semibold">12,847</span> Players Online
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="text-gaming-secondary" size={20} />
            <span className="text-sm text-muted-foreground">
              <span className="text-foreground font-semibold">4.9/5</span> Rating
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gaming-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gaming-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;