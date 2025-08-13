import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye, EyeOff, ArrowLeft, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import kmitLogo from "@/assets/kmit-logo.png";

const Login = () => {
  const [rollNo, setRollNo] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<"student" | "faculty" | "admin">("student");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Validation
    if (!rollNo.trim() || !password.trim()) {
      setError("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    // Simulate login process
    try {
      // This is where you'd integrate with Supabase authentication
      console.log("Login attempt:", { rollNo, userType });
      
      // For demo purposes
      setTimeout(() => {
        setIsLoading(false);
        setError("Please connect Supabase to enable authentication");
      }, 1000);
    } catch (err) {
      setError("Login failed. Please try again.");
      setIsLoading(false);
    }
  };

  const userTypes = [
    { value: "student", label: "Student", icon: Users, description: "Student login with roll number" },
    { value: "faculty", label: "Faculty", icon: BookOpen, description: "Faculty and staff login" },
    { value: "admin", label: "Admin", icon: Users, description: "System administrator login" },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary-glow transition-colors mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src={kmitLogo} alt="KMIT Logo" className="h-12 w-12" />
            <div>
              <h1 className="text-2xl font-bold text-foreground">KMIT Clubs Hub</h1>
              <p className="text-sm text-muted-foreground">Student Portal Login</p>
            </div>
          </div>
        </div>

        <Card className="shadow-elegant">
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-bold">Welcome Back!</CardTitle>
            <CardDescription>
              Sign in to access your clubs and events
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* User Type Selection */}
            <div className="space-y-3">
              <Label className="text-sm font-medium">Login as:</Label>
              <div className="grid grid-cols-3 gap-2">
                {userTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => setUserType(type.value as any)}
                      className={`p-3 rounded-lg border text-center transition-all ${
                        userType === type.value
                          ? "bg-primary text-primary-foreground border-primary shadow-card"
                          : "bg-background hover:bg-muted border-border"
                      }`}
                    >
                      <Icon className="h-4 w-4 mx-auto mb-1" />
                      <span className="text-xs font-medium">{type.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Roll Number / Employee ID */}
              <div className="space-y-2">
                <Label htmlFor="rollNo">
                  {userType === "student" ? "Roll Number" : "Employee ID"}
                </Label>
                <Input
                  id="rollNo"
                  type="text"
                  placeholder={
                    userType === "student" 
                      ? "Enter your roll number (e.g., 20A91A0000)" 
                      : "Enter your employee ID"
                  }
                  value={rollNo}
                  onChange={(e) => setRollNo(e.target.value)}
                  className="h-12"
                  required
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {/* Submit Button */}
              <Button 
                type="submit" 
                variant="hero" 
                className="w-full h-12" 
                disabled={isLoading}
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>
            </form>

            {/* Additional Links */}
            <div className="text-center space-y-2">
              <button className="text-sm text-primary hover:text-primary-glow transition-colors">
                Forgot Password?
              </button>
              <div className="text-xs text-muted-foreground">
                New student? Contact your class coordinator for account setup.
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 pt-6 border-t">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Don't have an account?</p>
              <Button variant="secondary" className="w-full">
                Register as New Student
              </Button>
            </div>
            
            <div className="text-xs text-center text-muted-foreground">
              For technical support, contact IT Help Desk
            </div>
          </CardFooter>
        </Card>

        {/* Quick Access */}
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground mb-3">Quick Access:</p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link to="/#clubs">Browse Clubs</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link to="/#events">View Events</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;