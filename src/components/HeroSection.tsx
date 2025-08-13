import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, Trophy } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Welcome to{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              KMIT Clubs Hub
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover, join, and thrive in our vibrant community of student clubs at 
            Keshav Memorial Institute of Technology. Connect with like-minded peers, 
            explore your passions, and create lasting memories.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="group">
              Explore Clubs
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" size="lg">
              Join as Student
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-card">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-3xl font-bold text-foreground mb-2">500+</h3>
              <p className="text-muted-foreground">Active Members</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-card">
              <Calendar className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-3xl font-bold text-foreground mb-2">50+</h3>
              <p className="text-muted-foreground">Events This Year</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-card">
              <Trophy className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-3xl font-bold text-foreground mb-2">25+</h3>
              <p className="text-muted-foreground">Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;