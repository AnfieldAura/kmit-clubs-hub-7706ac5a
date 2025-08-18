import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import kmitLogo from "@/assets/kmit-logo.png";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Clubs", href: "#clubs" },
    { label: "Events", href: "#events" },
    { label: "About", href: "#about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={kmitLogo} alt="KMIT Logo" className="h-10 w-10" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">KMIT Clubs Hub</h1>
              <p className="text-xs text-muted-foreground">Keshav Memorial Institute of Technology</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                {item.label}
              </a>
            ))}
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-foreground">Welcome, {user?.name}</span>
                <Button variant="secondary" onClick={logout}>Logout</Button>
              </div>
            ) : (
              <Link to="/login">
                <Button variant="hero">Login</Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-smooth font-medium px-2 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                {isAuthenticated ? (
                  <div className="space-y-2">
                    <p className="text-foreground text-sm">Welcome, {user?.name}</p>
                    <Button variant="secondary" onClick={logout} className="w-full">Logout</Button>
                  </div>
                ) : (
                  <Link to="/login">
                    <Button variant="hero" className="w-full">Login</Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;