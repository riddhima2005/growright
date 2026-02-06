import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Sprout, 
  Target, 
  Heart, 
  Users, 
  ArrowLeft,
  Leaf,
  Award
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      {/* Navigation */}
      <nav className="bg-card/80 backdrop-blur-sm shadow-soft border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Sprout className="h-8 w-8 text-nature-primary" />
              <h1 className="text-2xl font-bold text-nature-primary">Grow Right</h1>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost">Home</Button>
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
        <div className="container mx-auto max-w-4xl">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-nature-primary mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to home
          </Link>
          
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-nature rounded-full">
                <Leaf className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-nature-primary mb-6">
              About Grow Right
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're on a mission to make gardening accessible, enjoyable, and successful for everyone—from curious beginners to seasoned green thumbs.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-nature transition-all duration-300 animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="inline-flex p-3 bg-nature-accent rounded-full mb-4">
                  <Target className="h-8 w-8 text-nature-primary" />
                </div>
                <h3 className="text-xl font-bold text-nature-primary mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower people to grow thriving gardens through intelligent technology and expert guidance, making plant care simple and rewarding.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-nature transition-all duration-300 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <CardContent className="p-8 text-center">
                <div className="inline-flex p-3 bg-nature-water/20 rounded-full mb-4">
                  <Heart className="h-8 w-8 text-nature-primary" />
                </div>
                <h3 className="text-xl font-bold text-nature-primary mb-3">Our Passion</h3>
                <p className="text-muted-foreground">
                  We believe in the power of plants to improve lives, environments, and communities. Every garden tells a story of growth and care.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-nature transition-all duration-300 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <CardContent className="p-8 text-center">
                <div className="inline-flex p-3 bg-nature-sun/20 rounded-full mb-4">
                  <Users className="h-8 w-8 text-nature-primary" />
                </div>
                <h3 className="text-xl font-bold text-nature-primary mb-3">Our Community</h3>
                <p className="text-muted-foreground">
                  Thousands of gardeners worldwide trust Grow Right to help them nurture healthy, beautiful plants through every season.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-nature-primary mb-12">
            What Makes Us Different
          </h2>
          <div className="space-y-8">
            <Card className="hover:shadow-nature transition-all duration-300">
              <CardContent className="p-8 flex items-start space-x-6">
                <div className="p-3 bg-gradient-nature rounded-lg flex-shrink-0">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-nature-primary mb-3">
                    AI-Powered Plant Disease Detection
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Our advanced image recognition technology can identify plant diseases instantly, giving you expert-level diagnosis and treatment recommendations in seconds.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-nature transition-all duration-300">
              <CardContent className="p-8 flex items-start space-x-6">
                <div className="p-3 bg-gradient-nature rounded-lg flex-shrink-0">
                  <Sprout className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-nature-primary mb-3">
                    Progressive Learning System
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Our step-by-step care guides ensure you complete each task correctly before moving forward, building your confidence and skills with every plant you grow.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-nature transition-all duration-300">
              <CardContent className="p-8 flex items-start space-x-6">
                <div className="p-3 bg-gradient-nature rounded-lg flex-shrink-0">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-nature-primary mb-3">
                    Personalized Care Reminders
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Never miss a watering or pruning day with our intelligent reminder system that adapts to each plant's unique needs and your local climate.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-nature text-white text-center">
            <CardContent className="p-12">
              <h2 className="text-4xl font-bold mb-6">
                Start Your Garden Journey Today
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join our growing community and discover how easy it can be to maintain a thriving garden.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/auth">
                  <Button size="lg" variant="secondary" className="text-lg h-14 px-8">
                    Get Started Free
                  </Button>
                </Link>
                {/* <Link to="/explore">
                  <Button size="lg" variant="outline" className="text-lg h-14 px-8 text-white border-white hover:bg-white/10">
                    Explore Plants
                  </Button>
                </Link> */}
              </div>
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

export default About;
