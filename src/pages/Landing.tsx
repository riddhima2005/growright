import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Sprout, 
  Camera, 
  CheckCircle, 
  Bell, 
  BookOpen, 
  Leaf,
  ArrowRight
} from "lucide-react";
import heroImage from "@/assets/hero-plants.jpg";

const Landing = () => {
  const features = [
    {
      icon: Camera,
      title: "AI Disease Detection",
      description: "Instantly identify plant diseases with our advanced image recognition technology"
    },
    {
      icon: CheckCircle,
      title: "Step-by-Step Guides",
      description: "Follow detailed care instructions with progress tracking and mandatory completion"
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Never miss watering or pruning with intelligent notification system"
    },
    {
      icon: Leaf,
      title: "Personalized Care Tips",
      description: "Get tailored advice for water, sunlight, soil pH, and fertilizer needs"
    },
    {
      icon: BookOpen,
      title: "Beginner Friendly",
      description: "Simplified mode for first-time gardeners to learn with confidence"
    },
    {
      icon: Sprout,
      title: "Garden Dashboard",
      description: "Track all your plants in one place with comprehensive progress monitoring"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      {/* Navigation */}
      <nav className="bg-card/80 backdrop-blur-sm shadow-soft border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sprout className="h-8 w-8 text-nature-primary" />
              <h1 className="text-2xl font-bold text-nature-primary">Grow Right</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/about">
                <Button variant="ghost">About</Button>
              </Link>
              <Link to="/explore">
                <Button variant="outline">Explore Plants</Button>
              </Link>
              <Link to="/auth">
                <Button className="bg-gradient-nature">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold text-nature-primary mb-6">
                Grow Your Perfect Garden
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                From seed to harvest, we guide you through every step of your gardening journey with AI-powered tools and expert care tips.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/auth">
                  <Button size="lg" className="bg-gradient-nature text-lg h-14 px-8">
                    Start Growing <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/explore">
                  <Button size="lg" variant="outline" className="text-lg h-14 px-8">
                    Browse Plants
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-grow">
              <img 
                src={heroImage} 
                alt="Beautiful garden with diverse healthy plants showcasing various flowers and vegetables" 
                className="rounded-2xl shadow-nature w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-nature-primary mb-4">
              Everything You Need for Plant Success
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to help both beginners and experienced gardeners grow thriving plants
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="hover:shadow-nature transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <feature.icon className="h-12 w-12 text-nature-primary mb-4" />
                  <h4 className="text-xl font-bold text-nature-primary mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-nature text-white overflow-hidden">
            <CardContent className="p-12 text-center">
              <h3 className="text-4xl font-bold mb-6">
                Ready to Transform Your Garden?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands of gardeners who are growing healthier, happier plants with PlantCare Pro
              </p>
              <Link to="/auth">
                <Button size="lg" variant="secondary" className="text-lg h-14 px-8">
                  Create Free Account
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2026 Grow Right. Growing together, one plant at a time.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
