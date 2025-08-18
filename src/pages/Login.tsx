import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, LogIn } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    rollNumber: "",
    password: "",
    userType: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock authentication - in real app, this would call an API
    if (formData.rollNumber && formData.password && formData.userType) {
      // Simulate successful login
      const mockUser = {
        name: getMockName(formData.rollNumber),
        rollNumber: formData.rollNumber,
        email: `${formData.rollNumber}@kmit.edu.in`,
        userType: formData.userType as 'student' | 'faculty' | 'admin'
      };
      
      login(mockUser);
      toast({
        title: "Login Successful",
        description: `Welcome back, ${mockUser.name}!`,
      });
      navigate('/');
    } else {
      toast({
        title: "Login Failed",
        description: "Please fill in all fields",
        variant: "destructive"
      });
    }
  };

  // Mock function to generate names based on roll number
  const getMockName = (rollNumber: string) => {
    const names = ['Arjun Patel', 'Priya Sharma', 'Rahul Kumar', 'Sneha Reddy', 'Vikash Singh'];
    const index = rollNumber.charCodeAt(rollNumber.length - 1) % names.length;
    return names[index];
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-smooth"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <Card className="shadow-card">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-foreground mb-2">
              Login to KMIT Hub
            </CardTitle>
            <CardDescription className="text-lg">
              Access your account to join clubs and manage activities
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="rollNumber">Roll Number / Employee ID</Label>
                <Input
                  id="rollNumber"
                  type="text"
                  placeholder="e.g., 21K61A0501"
                  value={formData.rollNumber}
                  onChange={(e) => handleInputChange("rollNumber", e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>User Type</Label>
                <Select onValueChange={(value) => handleInputChange("userType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select user type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="faculty">Faculty</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                <LogIn className="h-5 w-5 mr-2" />
                Login
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            New student?{" "}
            <Link to="/join" className="text-primary hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;