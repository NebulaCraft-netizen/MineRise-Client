import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download as DownloadIcon, Monitor, Smartphone, CheckCircle, AlertCircle, Info } from "lucide-react";

const downloadOptions = [
  {
    platform: "Windows",
    icon: Monitor,
    version: "v2.4.1",
    size: "45.2 MB",
    requirements: "Windows 10/11, Java 8+",
    features: ["Full feature set", "Auto-updater", "Mod support", "Native performance"],
    recommended: true
  },
  {
    platform: "macOS",
    icon: Monitor,
    version: "v2.4.1",
    size: "47.8 MB", 
    requirements: "macOS 10.15+, Java 8+",
    features: ["Native performance", "Metal rendering", "Universal binary", "M1/M2 optimized"]
  },
  {
    platform: "Linux",
    icon: Monitor,
    version: "v2.4.1",
    size: "43.1 MB",
    requirements: "Ubuntu 20.04+, Java 8+",
    features: ["AppImage format", "Wayland support", "Open source", "Distribution packages"]
  }
];

const systemRequirements = {
  minimum: {
    title: "Minimum Requirements",
    specs: [
      "OS: Windows 10/macOS 10.15/Ubuntu 18.04",
      "CPU: Intel i3 / AMD FX-6300",
      "RAM: 4GB",
      "Java: Version 8 or higher",
      "Storage: 2GB free space"
    ]
  },
  recommended: {
    title: "Recommended Requirements",
    specs: [
      "OS: Windows 11/macOS 12+/Ubuntu 22.04",
      "CPU: Intel i5 / AMD Ryzen 5",
      "RAM: 8GB or more",
      "Java: Version 17 LTS",
      "Storage: 4GB free space (SSD)"
    ]
  }
};

const Downloads = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6">
              Download Minerise
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your platform and start your enhanced Minecraft experience today. 
              Free forever, no subscriptions required.
            </p>
          </div>

          {/* Download Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {downloadOptions.map((option, index) => (
              <Card 
                key={index} 
                className={`bg-gradient-card border-border hover:border-gaming-primary/50 transition-all duration-300 hover:shadow-card group hover:scale-105 relative ${option.recommended ? 'ring-2 ring-gaming-primary/50' : ''}`}
              >
                {option.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-gaming px-4 py-1 rounded-full text-sm font-semibold text-background">
                      Recommended
                    </div>
                  </div>
                )}
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
                    Download for {option.platform}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* System Requirements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {Object.entries(systemRequirements).map(([key, req]) => (
              <Card key={key} className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                    {key === 'recommended' ? <CheckCircle className="text-gaming-secondary" size={20} /> : <Info className="text-gaming-primary" size={20} />}
                    {req.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {req.specs.map((spec, idx) => (
                      <li key={idx} className="text-muted-foreground text-sm">
                        • {spec}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Installation Instructions */}
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                <AlertCircle className="text-gaming-primary" size={24} />
                Installation Instructions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Step 1: Download</h4>
                <p className="text-muted-foreground text-sm">Download the Minerise installer for your operating system from above.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Step 2: Install Java</h4>
                <p className="text-muted-foreground text-sm">Make sure you have Java 8 or higher installed. We recommend Java 17 LTS for best performance.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Step 3: Run Installer</h4>
                <p className="text-muted-foreground text-sm">Run the downloaded installer and follow the on-screen instructions.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Step 4: Launch & Play</h4>
                <p className="text-muted-foreground text-sm">Launch Minerise, log in with your Minecraft account, and enjoy enhanced gameplay!</p>
              </div>
            </CardContent>
          </Card>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
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
    </div>
  );
};

export default Downloads;