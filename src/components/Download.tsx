import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download as DownloadIcon, Monitor, Smartphone, CheckCircle } from "lucide-react";

const downloadOptions = [
  {
    platform: "Windows",
    icon: Monitor,
    version: "v2.4.1",
    size: "45.2 MB",
    requirements: "Windows 10/11, Java 8+",
    features: ["Full feature set", "Auto-updater", "Mod support"]
  },
  {
    platform: "macOS",
    icon: Monitor,
    version: "v2.4.1",
    size: "47.8 MB", 
    requirements: "macOS 10.15+, Java 8+",
    features: ["Native performance", "Metal rendering", "Universal binary"]
  },
  {
    platform: "Linux",
    icon: Monitor,
    version: "v2.4.1",
    size: "43.1 MB",
    requirements: "Ubuntu 20.04+, Java 8+",
    features: ["AppImage format", "Wayland support", "Open source"]
  }
];

const Download = () => {
  return (
    <section id="downloads" className="py-20 px-6 bg-gaming-dark/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">
            Download Minerise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your platform and start your enhanced Minecraft experience today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {downloadOptions.map((option, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border hover:border-gaming-primary/50 transition-all duration-300 hover:shadow-card group hover:scale-105"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-gaming flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <option.icon className="text-background" size={32} />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {option.platform}
                </CardTitle>
                <CardDescription className="text-gaming-primary font-semibold">
                  {option.version} • {option.size}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground text-center">
                  {option.requirements}
                </p>
                
                <ul className="space-y-2">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="text-gaming-secondary" size={16} />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full bg-gradient-gaming hover:shadow-glow transition-all duration-300"
                  size="lg"
                >
                  <DownloadIcon size={20} className="mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-4 bg-gradient-card rounded-lg p-6 border border-border">
            <CheckCircle className="text-gaming-secondary" size={24} />
            <div className="text-left">
              <h3 className="font-semibold text-foreground">Free Forever</h3>
              <p className="text-sm text-muted-foreground">No subscriptions, no hidden fees, just pure gaming performance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;