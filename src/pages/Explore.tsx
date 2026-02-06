import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Flower, 
  Carrot, 
  Leaf, 
  Home, 
  Trees, 
  Search, 
  Camera, 
  Sprout,
  BookOpen,
  User
} from "lucide-react";
import heroImage from "@/assets/hero-plants.jpg";
import { plantData } from "@/data/plantData";

const plantCategories = [
  { id: "flowers", name: "Flowers", icon: Flower, color: "bg-pink-100 hover:bg-pink-200" },
  { id: "vegetables", name: "Vegetables", icon: Carrot, color: "bg-orange-100 hover:bg-orange-200" },
  { id: "herbs", name: "Herbs", icon: Leaf, color: "bg-green-100 hover:bg-green-200" },
  { id: "indoor", name: "Indoor Plants", icon: Home, color: "bg-blue-100 hover:bg-blue-200" },
  { id: "outdoor", name: "Outdoor Plants", icon: Trees, color: "bg-emerald-100 hover:bg-emerald-200" },
];

const allPlants = Object.entries(plantData).map(([id, plant]) => ({
  id: Number(id),
  name: plant.name,
  category: plant.category,
  difficulty: plant.difficulty,
  season: plant.season,
}));

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPlants = allPlants.filter(plant => {
    const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || plant.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      {/* Header */}
      <header className="bg-card shadow-soft border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Sprout className="h-8 w-8 text-nature-primary" />
              <h1 className="text-2xl font-bold text-nature-primary">Grow Right</h1>
            </Link>
            <nav className="flex items-center space-x-4">
              <Link to="/about">
                <Button variant="ghost" size="sm">About</Button>
              </Link>
              <Link to="/disease-detector">
                <Button variant="outline" size="sm" className="flex items-center space-x-2">
                  <Camera className="h-4 w-4" />
                  <span>Disease Detector</span>
                </Button>
              </Link>
              <Link to="/my-garden">
                <Button variant="outline" size="sm" className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>My Garden</span>
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <img 
              src={heroImage} 
              alt="Beautiful garden with diverse healthy plants" 
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-nature"
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-nature-primary mb-6 animate-fade-in">
            Your Garden Journey Starts Here
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Discover, grow, and care for plants with step-by-step guidance, smart disease detection, and personalized care tips.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="px-4 mb-12">
        <div className="container mx-auto max-w-2xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search plants by name, season, or type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-lg shadow-soft border-nature-accent/20"
            />
          </div>
        </div>
      </section>

      {/* Plant Categories */}
      <section className="px-4 mb-16">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 text-nature-primary">
            Choose Your Plant Category
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {plantCategories.map((category) => (
              <Card 
                key={category.id}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-nature ${
                  selectedCategory === category.id ? 'ring-2 ring-nature-primary' : ''
                } ${category.color}`}
                onClick={() => setSelectedCategory(
                  selectedCategory === category.id ? null : category.id
                )}
              >
                <CardContent className="p-6 text-center">
                  <category.icon className="h-12 w-12 mx-auto mb-3 text-nature-primary" />
                  <h4 className="font-semibold text-nature-primary">{category.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Plants */}
      <section className="px-4 mb-16">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-nature-primary">
              {selectedCategory ? `${plantCategories.find(c => c.id === selectedCategory)?.name}` : 'Featured Plants'}
            </h3>
            {selectedCategory && (
              <Button 
                variant="outline" 
                onClick={() => setSelectedCategory(null)}
                className="text-nature-primary border-nature-primary hover:bg-nature-primary hover:text-white"
              >
                View All
              </Button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlants.map((plant) => (
              <Card key={plant.id} className="hover:shadow-nature transition-all duration-300 hover:scale-105 animate-grow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-nature-primary">{plant.name}</CardTitle>
                    <Badge 
                      variant="secondary" 
                      className={`${
                        plant.difficulty === 'beginner' ? 'bg-nature-accent text-nature-primary' : 
                        'bg-nature-earth text-white'
                      }`}
                    >
                      {plant.difficulty}
                    </Badge>
                  </div>
                  <CardDescription className="flex items-center space-x-2">
                    <span className="capitalize">{plant.category.replace('-', ' ')}</span>
                    <span>•</span>
                    <span>{plant.season === 'all' ? 'Year-round' : `Best in ${plant.season}`}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-2">
                    <Link to={`/plant/${plant.id}`} className="flex-1">
                      <Button className="w-full bg-gradient-nature hover:opacity-90">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Care Guide
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="px-4 pb-16">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 text-nature-primary">
            Smart Plant Care Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link to="/disease-detector">
              <Card className="hover:shadow-nature transition-all duration-300 hover:scale-105 cursor-pointer bg-gradient-to-r from-nature-accent/20 to-nature-water/20">
                <CardContent className="p-8 text-center">
                  <Camera className="h-16 w-16 mx-auto mb-4 text-nature-primary" />
                  <h4 className="text-xl font-bold mb-2 text-nature-primary">Disease Detector</h4>
                  <p className="text-muted-foreground">
                    Upload a photo to instantly identify plant diseases and get treatment recommendations
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/my-garden">
              <Card className="hover:shadow-nature transition-all duration-300 hover:scale-105 cursor-pointer bg-gradient-to-r from-nature-sun/20 to-nature-earth/20">
                <CardContent className="p-8 text-center">
                  <Sprout className="h-16 w-16 mx-auto mb-4 text-nature-primary" />
                  <h4 className="text-xl font-bold mb-2 text-nature-primary">My Garden Dashboard</h4>
                  <p className="text-muted-foreground">
                    Track your plants' progress, set reminders, and manage your growing journey
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
