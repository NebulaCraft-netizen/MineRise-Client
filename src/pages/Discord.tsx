import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Users, Headphones, Shield, Star, Trophy, Hash, Bell } from "lucide-react";

const discordFeatures = [
  {
    icon: Users,
    title: "Active Community",
    description: "Join 50,000+ active Minerise users sharing tips, tricks, and gameplay",
    color: "text-gaming-primary"
  },
  {
    icon: Headphones,
    title: "Voice Channels",
    description: "High-quality voice chat for team games and community events",
    color: "text-gaming-secondary"
  },
  {
    icon: Shield,
    title: "24/7 Support",
    description: "Get help from our dedicated support team and community moderators",
    color: "text-gaming-primary"
  },
  {
    icon: Star,
    title: "Exclusive Updates",
    description: "Be the first to know about new features, updates, and beta releases",
    color: "text-gaming-secondary"
  },
  {
    icon: Trophy,
    title: "Tournaments",
    description: "Participate in regular tournaments and competitions with prizes",
    color: "text-gaming-primary"
  },
  {
    icon: Hash,
    title: "Specialized Channels",
    description: "Dedicated channels for PvP, building, modding, and server discussions",
    color: "text-gaming-secondary"
  }
];

const serverStats = [
  { label: "Total Members", value: "52,847", icon: Users },
  { label: "Online Now", value: "8,234", icon: Bell },
  { label: "Voice Channels", value: "15", icon: Headphones },
  { label: "Text Channels", value: "42", icon: Hash }
];

const Discord = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      <section className="py-20 px-6">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="w-24 h-24 mx-auto mb-8 bg-gradient-gaming rounded-2xl flex items-center justify-center shadow-glow animate-glow">
              <MessageCircle className="text-background" size={48} />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6">
              Join Our Discord
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Connect with the Minerise community, get support, participate in tournaments, 
              and stay updated with the latest features and releases.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-gaming hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 h-auto animate-glow"
            >
              <MessageCircle size={20} className="mr-3" />
              Join Discord Server
            </Button>
          </div>

          {/* Server Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {serverStats.map((stat, index) => (
              <Card key={index} className="bg-gradient-card border-border text-center hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <stat.icon className="mx-auto mb-2 text-gaming-primary" size={24} />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Discord Features */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-12 text-center">
              What You'll Find
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {discordFeatures.map((feature, index) => (
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

          {/* Discord Rules Preview */}
          <Card className="bg-gradient-card border-border mb-16">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Shield className="text-gaming-secondary" size={24} />
                Community Guidelines
              </CardTitle>
              <CardDescription>
                Our Discord server is a friendly place for all Minerise users. Please follow these simple rules:
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Be respectful to all community members</li>
                  <li>• No spam, excessive caps, or off-topic content</li>
                  <li>• Use appropriate channels for discussions</li>
                  <li>• No advertising or self-promotion</li>
                </ul>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Keep conversations family-friendly</li>
                  <li>• No sharing of cheats or exploits</li>
                  <li>• Report issues to moderators</li>
                  <li>• Have fun and help others!</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Events & Tournaments */}
          <div className="bg-gradient-card rounded-2xl p-8 border border-border text-center">
            <Trophy className="mx-auto mb-4 text-gaming-primary" size={48} />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Weekly Events & Tournaments
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our weekly PvP tournaments, building competitions, and community events. 
              Win exclusive roles, Discord Nitro, and even gaming peripherals!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-2xl font-bold text-gaming-primary mb-1">Weekly</div>
                <div className="text-sm text-muted-foreground">PvP Tournaments</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gaming-secondary mb-1">Monthly</div>
                <div className="text-sm text-muted-foreground">Building Contests</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gaming-primary mb-1">$500+</div>
                <div className="text-sm text-muted-foreground">Monthly Prizes</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Discord;