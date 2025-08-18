import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, UserPlus, Star, Users, Calendar } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import mudraImage from "@/assets/mudra-dance.jpg";
import photographyImage from "@/assets/photography-club.jpg";
import singingImage from "@/assets/aalap-singing.jpg";
import artImage from "@/assets/abhinaya-art.jpg";

const clubsData = {
  "mudra": {
    id: "1",
    name: "Mudra",
    category: "Dance",
    description: "Experience the grace and beauty of classical and contemporary dance forms. Mudra brings together passionate dancers to explore various dance styles and perform at cultural events.",
    image: mudraImage,
    memberCount: 85,
    upcomingEvents: 3,
    rating: 4.8,
    leader: "Priya Sharma",
    requirements: "Basic dance experience preferred but not required. Enthusiasm and dedication are essential.",
    benefits: ["Professional dance training", "Performance opportunities", "Cultural event participation", "Costume and makeup workshops"]
  },
  "traces-of-lenses": {
    id: "2",
    name: "Traces of Lenses",
    category: "Photography",
    description: "Capture moments and tell stories through the lens. Our photography club provides hands-on experience with professional equipment and techniques for aspiring photographers.",
    image: photographyImage,
    memberCount: 92,
    upcomingEvents: 5,
    rating: 4.7,
    leader: "Arjun Patel",
    requirements: "Own camera preferred but not mandatory. Basic understanding of photography concepts helpful.",
    benefits: ["Access to professional equipment", "Photo walks and expeditions", "Portfolio development", "Exhibition opportunities"]
  },
  "aalap": {
    id: "3",
    name: "Aalap",
    category: "Singing",
    description: "Find your voice and harmony with fellow music enthusiasts. Aalap offers vocal training, group performances, and opportunities to showcase your singing talent.",
    image: singingImage,
    memberCount: 67,
    upcomingEvents: 4,
    rating: 4.9,
    leader: "Raghav Kumar",
    requirements: "Passion for music and willingness to learn. No prior professional training required.",
    benefits: ["Vocal training sessions", "Live performance opportunities", "Music theory workshops", "Recording studio access"]
  },
  "abhinaya": {
    id: "4",
    name: "Abhinaya",
    category: "Art",
    description: "Express creativity through various art forms including painting, sketching, and digital art. Abhinaya nurtures artistic talents and provides a platform for creative expression.",
    image: artImage,
    memberCount: 54,
    upcomingEvents: 2,
    rating: 4.6,
    leader: "Sneha Reddy",
    requirements: "Creative mindset and passion for art. All skill levels welcome from beginners to advanced.",
    benefits: ["Art supplies and materials", "Gallery exhibitions", "Digital art workshops", "Artist mentorship program"]
  }
};

const JoinClub = () => {
  const { clubId } = useParams();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    email: "",
    phone: "",
    experience: "",
    motivation: ""
  });

  // Check if user is authenticated, if not redirect to login
  useEffect(() => {
    if (!isAuthenticated) {
      toast({
        title: "Login Required",
        description: "Please login to join a club",
        variant: "destructive"
      });
      navigate('/login');
      return;
    }

    // Pre-fill form with user data if logged in
    if (user) {
      setFormData(prev => ({
        ...prev,
        name: user.name,
        rollNumber: user.rollNumber,
        email: user.email
      }));
    }
  }, [isAuthenticated, user, navigate, toast]);

  const club = clubId ? clubsData[clubId as keyof typeof clubsData] : null;

  if (!club) {
    return (
      <div className="min-h-screen bg-background pt-20 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Club Not Found</h1>
          <p className="text-muted-foreground mb-8">The club you're looking for doesn't exist.</p>
          <Link to="/">
            <Button variant="hero">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Join ${club.name} form submitted:`, formData);
    toast({
      title: "Application Submitted",
      description: `Your application to join ${club.name} has been submitted successfully!`,
    });
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-smooth"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Club Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="shadow-card">
            <div className="relative overflow-hidden">
              <img 
                src={club.image} 
                alt={club.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h1 className="text-3xl font-bold">{club.name}</h1>
                <p className="text-lg opacity-90">{club.category}</p>
              </div>
            </div>
            
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="secondary">{club.category}</Badge>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{club.rating}</span>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4">{club.description}</p>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{club.memberCount} members</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{club.upcomingEvents} events</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground">Club Leader</h4>
                  <p className="text-muted-foreground">{club.leader}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground">Requirements</h4>
                  <p className="text-muted-foreground text-sm">{club.requirements}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground">Benefits</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    {club.benefits.map((benefit, index) => (
                      <li key={index}>• {benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Join Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Join {club.name}
              </CardTitle>
              <CardDescription>
                Fill out this form to become a member of {club.name}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    disabled
                    className="bg-muted"
                  />
                  <p className="text-xs text-muted-foreground">Name is taken from your login data</p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="rollNumber">Roll Number</Label>
                  <Input
                    id="rollNumber"
                    type="text"
                    value={formData.rollNumber}
                    onChange={(e) => handleInputChange("rollNumber", e.target.value)}
                    disabled
                    className="bg-muted"
                  />
                  <p className="text-xs text-muted-foreground">Roll number is taken from your login data</p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@kmit.edu.in"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="experience">Previous Experience</Label>
                  <Textarea
                    id="experience"
                    placeholder={`Tell us about your experience in ${club.category.toLowerCase()}...`}
                    value={formData.experience}
                    onChange={(e) => handleInputChange("experience", e.target.value)}
                    className="min-h-[80px]"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="motivation">Why do you want to join?</Label>
                  <Textarea
                    id="motivation"
                    placeholder={`What motivates you to join ${club.name}?`}
                    value={formData.motivation}
                    onChange={(e) => handleInputChange("motivation", e.target.value)}
                    className="min-h-[80px]"
                    required
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <UserPlus className="h-5 w-5 mr-2" />
                  Join {club.name}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JoinClub;