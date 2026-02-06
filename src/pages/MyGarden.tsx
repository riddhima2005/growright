import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Plus, 
  Calendar, 
  Droplets, 
  Sun, 
  TrendingUp,
  Bell,
  Sprout,
  Trophy,
  Target
} from "lucide-react";

const myPlants = [
  {
    id: 1,
    name: "Cherry Tomatoes",
    category: "vegetables",
    dateAdded: "2024-01-15",
    progress: 75,
    status: "growing",
    nextAction: "Pruning needed",
    daysToHarvest: 25,
    completedSteps: 6,
    totalSteps: 8
  },
  {
    id: 2,
    name: "Garden Rose",
    category: "flowers", 
    dateAdded: "2024-02-01",
    progress: 45,
    status: "budding",
    nextAction: "Water in 2 days",
    daysToHarvest: 45,
    completedSteps: 3,
    totalSteps: 7
  },
  {
    id: 3,
    name: "Fresh Basil",
    category: "herbs",
    dateAdded: "2024-02-10",
    progress: 90,
    status: "ready",
    nextAction: "Ready to harvest!",
    daysToHarvest: 0,
    completedSteps: 5,
    totalSteps: 5
  }
];

const upcomingTasks = [
  { plant: "Cherry Tomatoes", task: "Pruning", due: "Today", priority: "high" },
  { plant: "Garden Rose", task: "Watering", due: "Tomorrow", priority: "medium" },
  { plant: "Fresh Basil", task: "Harvest", due: "Now", priority: "high" },
  { plant: "Cherry Tomatoes", task: "Fertilizing", due: "In 3 days", priority: "low" },
];

const achievements = [
  { name: "First Sprout", description: "Germinated your first plant", earned: true },
  { name: "Green Thumb", description: "Successfully grew 3 plants", earned: true },
  { name: "Master Gardener", description: "Complete 50 care steps", earned: false },
  { name: "Harvest Hero", description: "Harvest your first crop", earned: false },
];

const MyGarden = () => {
  const [filter, setFilter] = useState<'all' | 'growing' | 'ready'>('all');

  const filteredPlants = myPlants.filter(plant => 
    filter === 'all' || plant.status === filter
  );

  const totalPlants = myPlants.length;
  const averageProgress = Math.round(
    myPlants.reduce((sum, plant) => sum + plant.progress, 0) / totalPlants
  );
  const completedTasks = myPlants.reduce((sum, plant) => sum + plant.completedSteps, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      {/* Header */}
      <header className="bg-card shadow-soft border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-nature-primary">My Garden</h1>
            </div>
            <Link to="/">
              <Button className="bg-gradient-nature">
                <Plus className="h-4 w-4 mr-2" />
                Add New Plant
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Garden Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <Sprout className="h-8 w-8 mx-auto mb-2 text-nature-primary" />
                  <div className="text-2xl font-bold text-nature-primary">{totalPlants}</div>
                  <div className="text-sm text-muted-foreground">Total Plants</div>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2 text-nature-secondary" />
                  <div className="text-2xl font-bold text-nature-secondary">{averageProgress}%</div>
                  <div className="text-sm text-muted-foreground">Avg Progress</div>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <Target className="h-8 w-8 mx-auto mb-2 text-nature-accent" />
                  <div className="text-2xl font-bold text-nature-accent">{completedTasks}</div>
                  <div className="text-sm text-muted-foreground">Tasks Done</div>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <Trophy className="h-8 w-8 mx-auto mb-2 text-nature-sun" />
                  <div className="text-2xl font-bold text-nature-sun">
                    {achievements.filter(a => a.earned).length}
                  </div>
                  <div className="text-sm text-muted-foreground">Achievements</div>
                </CardContent>
              </Card>
            </div>

            {/* Filter Buttons */}
            <div className="flex space-x-2">
              <Button 
                variant={filter === 'all' ? 'default' : 'outline'}
                onClick={() => setFilter('all')}
                className={filter === 'all' ? 'bg-gradient-nature' : ''}
              >
                All Plants ({myPlants.length})
              </Button>
              <Button 
                variant={filter === 'growing' ? 'default' : 'outline'}
                onClick={() => setFilter('growing')}
                className={filter === 'growing' ? 'bg-gradient-nature' : ''}
              >
                Growing ({myPlants.filter(p => p.status === 'growing').length})
              </Button>
              <Button 
                variant={filter === 'ready' ? 'default' : 'outline'}
                onClick={() => setFilter('ready')}
                className={filter === 'ready' ? 'bg-gradient-nature' : ''}
              >
                Ready ({myPlants.filter(p => p.status === 'ready').length})
              </Button>
            </div>

            {/* My Plants */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-nature-primary">Your Plants</h3>
              <div className="grid gap-4">
                {filteredPlants.map((plant) => (
                  <Card key={plant.id} className="shadow-soft hover:shadow-nature transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-nature-primary">{plant.name}</h4>
                          <p className="text-sm text-muted-foreground capitalize">
                            Added {new Date(plant.dateAdded).toLocaleDateString()} • {plant.category}
                          </p>
                        </div>
                        <Badge 
                          variant="secondary"
                          className={`${
                            plant.status === 'ready' ? 'bg-nature-accent text-nature-primary' :
                            plant.status === 'growing' ? 'bg-nature-earth text-white' :
                            'bg-muted text-muted-foreground'
                          }`}
                        >
                          {plant.status === 'ready' ? '🌱 Ready' : 
                           plant.status === 'growing' ? '🌿 Growing' : '🌱 Starting'}
                        </Badge>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium">Progress</span>
                            <span className="text-sm text-muted-foreground">
                              {plant.completedSteps}/{plant.totalSteps} steps
                            </span>
                          </div>
                          <Progress value={plant.progress} className="h-2" />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>
                                {plant.daysToHarvest === 0 ? 'Ready now!' : 
                                 `${plant.daysToHarvest} days to harvest`}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Bell className="h-4 w-4" />
                              <span>{plant.nextAction}</span>
                            </div>
                          </div>
                          <Link to={`/plant/${plant.id}`}>
                            <Button size="sm" variant="outline">
                              View Details
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Tasks */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-nature-primary flex items-center">
                  <Bell className="h-5 w-5 mr-2" />
                  Upcoming Tasks
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingTasks.map((task, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                    <div>
                      <div className="font-medium text-sm">{task.task}</div>
                      <div className="text-xs text-muted-foreground">{task.plant}</div>
                    </div>
                    <div className="text-right">
                      <div className={`text-xs font-medium ${
                        task.priority === 'high' ? 'text-destructive' :
                        task.priority === 'medium' ? 'text-nature-sun' :
                        'text-muted-foreground'
                      }`}>
                        {task.due}
                      </div>
                      <div className="text-xs text-muted-foreground capitalize">
                        {task.priority} priority
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-nature-primary">Today's Tip</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Droplets className="h-5 w-5 text-nature-water mt-1" />
                    <div>
                      <h4 className="font-semibold text-sm">Morning Watering</h4>
                      <p className="text-xs text-muted-foreground">
                        Water your plants in the morning to reduce evaporation and prevent fungal diseases.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-nature-primary flex items-center">
                  <Trophy className="h-5 w-5 mr-2" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`flex items-center space-x-3 p-2 rounded ${
                    achievement.earned ? 'bg-nature-accent/20' : 'bg-muted/50'
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${
                      achievement.earned ? 'bg-nature-primary' : 'bg-muted-foreground'
                    }`} />
                    <div className="flex-1">
                      <div className={`font-medium text-sm ${
                        achievement.earned ? 'text-nature-primary' : 'text-muted-foreground'
                      }`}>
                        {achievement.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {achievement.description}
                      </div>
                    </div>
                    {achievement.earned && (
                      <Trophy className="h-4 w-4 text-nature-sun" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyGarden;