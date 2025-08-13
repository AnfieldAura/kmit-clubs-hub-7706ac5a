import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, Star } from "lucide-react";

interface ClubCardProps {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  memberCount: number;
  upcomingEvents: number;
  rating: number;
  featured?: boolean;
}

const ClubCard = ({ 
  name, 
  category, 
  description, 
  image, 
  memberCount, 
  upcomingEvents, 
  rating, 
  featured = false 
}: ClubCardProps) => {
  return (
    <Card className={`group hover:shadow-glow transition-spring overflow-hidden ${featured ? 'ring-2 ring-primary' : ''}`}>
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {featured && (
          <Badge className="absolute top-4 left-4 bg-gradient-accent">
            Featured
          </Badge>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm opacity-90">{category}</p>
        </div>
      </div>

      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="secondary">{category}</Badge>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <CardDescription className="text-sm leading-relaxed">
          {description}
        </CardDescription>
        
        <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{memberCount} members</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{upcomingEvents} events</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex space-x-2">
        <Button variant="default" className="flex-1">
          View Details
        </Button>
        <Button variant="success" className="flex-1">
          Join Club
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ClubCard;