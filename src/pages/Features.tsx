import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Settings, Gamepad2, Target, Cpu, Eye, Crosshair, Timer, Palette, BarChart, Globe } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Performance Boost",
    description: "Get up to 300% better FPS with advanced optimization algorithms and memory management",
    color: "text-gaming-primary"
  },
  {
    icon: Shield,
    title: "Anti-Cheat Safe",
    description: "Fully compliant with all major server anti-cheat systems including Hypixel, Mineplex",
    color: "text-gaming-secondary"
  },
  {
    icon: Settings,
    title: "Custom Mods",
    description: "100+ built-in mods with easy toggle and configuration. No external mod loading needed",
    color: "text-gaming-primary"
  },
  {
    icon: Gamepad2,
    title: "PvP Enhanced",
    description: "Advanced PvP features including reach display, CPS counter, and combo tracking",
    color: "text-gaming-secondary"
  },
  {
    icon: Target,
    title: "Precision Aim",
    description: "Improved crosshair customization and aiming assistance features for better accuracy",
    color: "text-gaming-primary"
  },
  {
    icon: Cpu,
    title: "Memory Optimized",
    description: "Smart memory management reduces lag and stuttering for smooth gameplay",
    color: "text-gaming-secondary"
  },
  {
    icon: Eye,
    title: "Visual Enhancements",
    description: "Custom animations, particle effects, and visual improvements for immersive gaming",
    color: "text-gaming-primary"
  },
  {
    icon: Crosshair,
    title: "Custom Crosshairs",
    description: "Multiple crosshair styles and customization options for competitive advantage",
    color: "text-gaming-secondary"
  },
  {
    icon: Timer,
    title: "Real-time Stats",
    description: "Live FPS, ping, coordinates, and performance metrics displayed on-screen",
    color: "text-gaming-primary"
  },
  {
    icon: Palette,
    title: "Theme System",
    description: "Multiple built-in themes and full customization of client appearance",
    color: "text-gaming-secondary"
  },
  {
    icon: BarChart,
    title: "Performance Analytics",
    description: "Detailed performance tracking and optimization suggestions for your setup",
    color: "text-gaming-primary"
  },
  {
    icon: Globe,
    title: "Server Integration",
    description: "Enhanced server support with custom features for popular Minecraft servers",
    color: "text-gaming-secondary"
  }
];

const Features = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6">
              Powerful Features
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to dominate in Minecraft, packed into one powerful client. 
              From performance optimization to competitive PvP features, Minerise has it all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-border hover:border-gaming-primary/50 transition-all duration-300 hover:shadow-card group hover:scale-105"
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-background/50 flex items-center justify-center mb-4 group-hover:bg-gradient-gaming transition-all duration-300`}>
                    <feature.icon className={`${feature.color} group-hover:text-background transition-colors duration-300`} size={24} />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Feature Highlights */}
          <div className="bg-gradient-card rounded-2xl p-8 border border-border">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              Why Choose Minerise?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-black text-gaming-primary mb-2">300%</div>
                <div className="text-sm text-muted-foreground">Average FPS Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-gaming-secondary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Built-in Mods</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-gaming-primary mb-2">250K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;