 import { useState, useEffect } from "react";
 import { useParams, Link } from "react-router-dom";
 import { Button } from "@/components/ui/button";
 import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
 import { Progress } from "@/components/ui/progress";
 import { Badge } from "@/components/ui/badge";
 import { Checkbox } from "@/components/ui/checkbox";
 import { toast } from "sonner";
 import { 
   ArrowLeft, 
   Droplets, 
   Sun, 
   Thermometer, 
   Scissors, 
   CheckCircle,
   Clock,
   Plus,
   Lightbulb
 } from "lucide-react";
 import { plantData, Step } from "@/data/plantData";

const PlantDetails = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState<any>(null);
  const [steps, setSteps] = useState<Step[]>([]);
  const [isBeginnerMode, setIsBeginnerMode] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (id && plantData[id]) {
      const plantInfo = plantData[id];
      setPlant(plantInfo);
      setSteps(plantInfo.steps);
    }
  }, [id]);

  useEffect(() => {
    const completedSteps = steps.filter(step => step.completed).length;
    const progressPercentage = steps.length > 0 ? (completedSteps / steps.length) * 100 : 0;
    setProgress(progressPercentage);
  }, [steps]);

  const toggleStep = (stepId: number) => {
    setSteps(prevSteps => {
      const updatedSteps = prevSteps.map(step => {
        if (step.id === stepId) {
          // Check if previous required steps are completed
          const previousRequiredSteps = prevSteps.filter(s => 
            s.id < stepId && s.required && !s.completed
          );
          
          if (previousRequiredSteps.length > 0 && !step.completed) {
            toast.error("Please complete previous required steps first!");
            return step;
          }
          
          const newCompleted = !step.completed;
          if (newCompleted) {
            toast.success(`✅ ${step.title} completed!`);
          }
          return { ...step, completed: newCompleted };
        }
        return step;
      });
      return updatedSteps;
    });
  };

  const addToGarden = () => {
    toast.success(`${plant.name} added to your garden! 🌱`);
  };

  if (!plant) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-muted-foreground">Plant not found</h2>
          <Link to="/">
            <Button className="mt-4">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const filteredSteps = isBeginnerMode ? steps.filter(step => step.required) : steps;
  const nextIncompleteStep = filteredSteps.find(step => !step.completed);

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
              <h1 className="text-2xl font-bold text-nature-primary">{plant.name}</h1>
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
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                onClick={() => setIsBeginnerMode(!isBeginnerMode)}
                className={`${isBeginnerMode ? 'bg-nature-accent text-nature-primary' : ''}`}
              >
                <Lightbulb className="h-4 w-4 mr-2" />
                {isBeginnerMode ? 'Show All Steps' : 'Beginner Mode'}
              </Button>
              <Button onClick={addToGarden} className="bg-gradient-nature">
                <Plus className="h-4 w-4 mr-2" />
                Add to Garden
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Progress Overview */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-nature-primary">Growing Progress</span>
                  <span className="text-2xl font-bold text-nature-primary">
                    {Math.round(progress)}%
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={progress} className="mb-4" />
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{steps.filter(s => s.completed).length} of {steps.length} steps completed</span>
                  {nextIncompleteStep && (
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      Next: {nextIncompleteStep.title}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Plant Description */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-nature-primary">About {plant.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{plant.description}</p>
              </CardContent>
            </Card>

            {/* Step-by-Step Instructions */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-nature-primary">
                  Step-by-Step Care Guide
                  {isBeginnerMode && (
                    <Badge variant="secondary" className="ml-2 bg-nature-accent text-nature-primary">
                      Essential Steps Only
                    </Badge>
                  )}
                </CardTitle>
                <CardDescription>
                  Follow these steps in order. Required steps must be completed before moving to the next.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {filteredSteps.map((step, index) => {
                  const isLocked = step.required && !step.completed && 
                    filteredSteps.slice(0, index).some(s => s.required && !s.completed);
                  
                  return (
                    <div 
                      key={step.id}
                      className={`flex items-start space-x-4 p-4 rounded-lg border transition-all duration-300 ${
                        step.completed 
                          ? 'bg-nature-accent/20 border-nature-primary' 
                          : isLocked
                          ? 'bg-muted/50 border-muted opacity-50'
                          : 'bg-card border-border hover:shadow-soft'
                      }`}
                    >
                      <div className="flex items-center pt-1">
                        {step.completed ? (
                          <CheckCircle className="h-5 w-5 text-nature-primary" />
                        ) : (
                          <Checkbox 
                            checked={false}
                            onCheckedChange={() => !isLocked && toggleStep(step.id)}
                            disabled={isLocked}
                          />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <step.icon className="h-5 w-5 text-nature-secondary" />
                          <h4 className={`font-semibold ${step.completed ? 'text-nature-primary' : 'text-foreground'}`}>
                            {step.title}
                          </h4>
                          {step.required && (
                            <Badge variant="outline" className="text-xs">Required</Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Care Tips */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-nature-primary">Care Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Droplets className="h-5 w-5 text-nature-water mt-1" />
                  <div>
                    <h4 className="font-semibold text-nature-primary">Watering</h4>
                    <p className="text-sm text-muted-foreground">{plant.careTips.water}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Sun className="h-5 w-5 text-nature-sun mt-1" />
                  <div>
                    <h4 className="font-semibold text-nature-primary">Sunlight</h4>
                    <p className="text-sm text-muted-foreground">{plant.careTips.sunlight}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Thermometer className="h-5 w-5 text-nature-earth mt-1" />
                  <div>
                    <h4 className="font-semibold text-nature-primary">Soil pH</h4>
                    <p className="text-sm text-muted-foreground">{plant.careTips.soilPH}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Scissors className="h-5 w-5 text-nature-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold text-nature-primary">Fertilizer</h4>
                    <p className="text-sm text-muted-foreground">{plant.careTips.fertilizer}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-nature-primary">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  className="w-full bg-gradient-nature"
                  onClick={() => toast.success("Watering reminder set! 💧")}
                >
                  <Droplets className="h-4 w-4 mr-2" />
                  Set Watering Reminder
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => toast.success("Pruning reminder set! ✂️")}
                >
                  <Scissors className="h-4 w-4 mr-2" />
                  Set Pruning Reminder
                </Button>
                <Link to="/my-garden" className="block">
                  <Button variant="outline" className="w-full">
                    View My Garden
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;