import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import kmitLogo from "@/assets/kmit-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={kmitLogo} alt="KMIT Logo" className="h-10 w-10 brightness-0 invert" />
              <h3 className="text-xl font-bold">KMIT Clubs Hub</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Empowering students through diverse club activities and fostering 
              a vibrant campus community at Keshav Memorial Institute of Technology.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</a></li>
              <li><a href="#clubs" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">All Clubs</a></li>
              <li><a href="#events" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Events</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">Narayanguda, Hyderabad, Telangana</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">+91 40 2766 4999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">info@kmit.in</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-sm text-primary-foreground/80">
              Subscribe to get latest updates about club activities and events.
            </p>
            <div className="space-y-2">
              <Input 
                placeholder="Enter your email" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 KMIT Clubs Hub. All rights reserved. | 
            <span className="ml-1">Built with ❤️ for KMIT students</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;