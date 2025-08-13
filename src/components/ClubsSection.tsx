import ClubCard from "./ClubCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import mudraImage from "@/assets/mudra-dance.jpg";
import photographyImage from "@/assets/photography-club.jpg";
import singingImage from "@/assets/aalap-singing.jpg";
import artImage from "@/assets/abhinaya-art.jpg";

const clubsData = [
  {
    id: "1",
    name: "Mudra",
    category: "Dance",
    description: "Experience the grace and beauty of classical and contemporary dance forms. Mudra brings together passionate dancers to explore various dance styles and perform at cultural events.",
    image: mudraImage,
    memberCount: 85,
    upcomingEvents: 3,
    rating: 4.8,
    featured: true,
  },
  {
    id: "2",
    name: "Traces of Lenses",
    category: "Photography",
    description: "Capture moments and tell stories through the lens. Our photography club provides hands-on experience with professional equipment and techniques for aspiring photographers.",
    image: photographyImage,
    memberCount: 92,
    upcomingEvents: 5,
    rating: 4.7,
    featured: true,
  },
  {
    id: "3",
    name: "Aalap",
    category: "Singing",
    description: "Find your voice and harmony with fellow music enthusiasts. Aalap offers vocal training, group performances, and opportunities to showcase your singing talent.",
    image: singingImage,
    memberCount: 67,
    upcomingEvents: 4,
    rating: 4.9,
  },
  {
    id: "4",
    name: "Abhinaya",
    category: "Art",
    description: "Express creativity through various art forms including painting, sketching, and digital art. Abhinaya nurtures artistic talents and provides a platform for creative expression.",
    image: artImage,
    memberCount: 54,
    upcomingEvents: 2,
    rating: 4.6,
  },
];

const ClubsSection = () => {
  return (
    <section id="clubs" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured <span className="bg-gradient-hero bg-clip-text text-transparent">Clubs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our diverse range of student clubs and find your passion. 
            Each club offers unique opportunities for growth, learning, and friendship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {clubsData.map((club) => (
            <ClubCard key={club.id} {...club} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="accent" size="lg" className="group">
            View All Clubs
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClubsSection;