import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu, Users, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-gaming rounded-lg flex items-center justify-center shadow-gaming">
              <span className="text-background font-bold text-xl">M</span>
            </div>
            <span className="text-2xl font-bold text-foreground">MINERISE</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="/features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="/downloads" className="text-muted-foreground hover:text-foreground transition-colors">
              Downloads
            </a>
            <a href="/discord" className="text-muted-foreground hover:text-foreground transition-colors">
              Discord
            </a>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Users size={16} />
              <span>12,847 online</span>
            </div>
            <Button variant="default" size="lg" className="bg-gradient-gaming hover:shadow-glow transition-all duration-300">
              <Download size={18} className="mr-2" />
              Download
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </a>
              <a href="/features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="/downloads" className="text-muted-foreground hover:text-foreground transition-colors">
                Downloads
              </a>
              <a href="/discord" className="text-muted-foreground hover:text-foreground transition-colors">
                Discord
              </a>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Users size={16} />
                <span>12,847 online</span>
              </div>
              <Button variant="default" size="lg" className="bg-gradient-gaming hover:shadow-glow transition-all duration-300 w-fit">
                <Download size={18} className="mr-2" />
                Download
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;