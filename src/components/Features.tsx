import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Settings, Gamepad2, Target, Cpu } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Performance Boost",
    description: "Get up to 300% better FPS with advanced optimization algorithms",
    color: "text-gaming-primary"
  },
  {
    icon: Shield,
    title: "Anti-Cheat Safe",
    description: "Fully compliant with all major server anti-cheat systems",
    color: "text-gaming-secondary"
  },
  {
    icon: Settings,
    title: "Custom Mods",
    description: "100+ built-in mods with easy toggle and configuration",
    color: "text-gaming-primary"
  },
  {
    icon: Gamepad2,
    title: "PvP Enhanced",
    description: "Advanced PvP features for competitive gameplay",
    color: "text-gaming-secondary"
  },
  {
    icon: Target,
    title: "Precision Aim",
    description: "Improved crosshair and aiming assistance features",
    color: "text-gaming-primary"
  },
  {
    icon: Cpu,
    title: "Memory Optimized",
    description: "Smart memory management reduces lag and stuttering",
    color: "text-gaming-secondary"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to dominate in Minecraft, packed into one powerful client
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};

export default Features;