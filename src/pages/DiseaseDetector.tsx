import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { 
  ArrowLeft, 
  Camera, 
  Upload, 
  Scan,
  AlertTriangle,
  CheckCircle,
  Lightbulb,
  Droplets,
  Scissors,
  Bug
} from "lucide-react";

const mockDiseases = [
  {
    name: "Tomato Blight",
    confidence: 87,
    severity: "moderate",
    symptoms: ["Dark spots on leaves", "Yellow halos around spots", "Leaf curling"],
    treatment: [
      "Remove affected leaves immediately",
      "Apply copper-based fungicide",
      "Improve air circulation",
      "Water at soil level, not leaves"
    ],
    prevention: [
      "Plant resistant varieties",
      "Ensure proper spacing",
      "Avoid overhead watering",
      "Apply mulch around plants"
    ]
  }
];

const recentScans = [
  { id: 1, plant: "Tomato Plant", result: "Healthy", date: "2024-03-15", confidence: 95 },
  { id: 2, plant: "Rose Bush", result: "Powdery Mildew", date: "2024-03-12", confidence: 78 },
  { id: 3, plant: "Basil", result: "Healthy", date: "2024-03-10", confidence: 92 }
];

const DiseaseDetector = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [results, setResults] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setResults(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const simulateScanning = () => {
    setIsScanning(true);
    setScanProgress(0);
    
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          setResults(mockDiseases[0]);
          toast.success("Disease analysis complete!");
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const startScanning = () => {
    if (!selectedImage) {
      toast.error("Please upload an image first!");
      return;
    }
    simulateScanning();
  };

  const handleCameraCapture = () => {
    // In a real app, this would open camera
    toast.info("Camera feature coming soon! For now, please upload an image.");
  };

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
              <h1 className="text-2xl font-bold text-nature-primary">Disease Detector</h1>
            </div>
            <Badge variant="secondary" className="bg-nature-accent text-nature-primary">
              AI-Powered Analysis
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upload Section */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-nature-primary">Upload Plant Image</CardTitle>
                <CardDescription>
                  Take a clear photo of your plant's leaves or affected areas for accurate disease detection.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {!selectedImage ? (
                    <div className="border-2 border-dashed border-muted rounded-lg p-12 text-center bg-muted/20">
                      <Camera className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                      <h3 className="text-lg font-semibold mb-2">Upload or Capture Image</h3>
                      <p className="text-muted-foreground mb-6">
                        Choose an image from your device or take a photo with your camera
                      </p>
                      <div className="flex justify-center space-x-4">
                        <Button 
                          onClick={() => fileInputRef.current?.click()}
                          className="bg-gradient-nature"
                        >
                          <Upload className="h-4 w-4 mr-2" />
                          Upload Image
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={handleCameraCapture}
                        >
                          <Camera className="h-4 w-4 mr-2" />
                          Use Camera
                        </Button>
                      </div>
                      <input
                        ref={fileInputRef}
                        type="file"
                        hidden
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="relative">
                        <img 
                          src={selectedImage} 
                          alt="Uploaded plant" 
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="absolute top-2 right-2 bg-white/90"
                          onClick={() => {
                            setSelectedImage(null);
                            setResults(null);
                            setScanProgress(0);
                          }}
                        >
                          Change Image
                        </Button>
                      </div>
                      
                      {isScanning && (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Analyzing image...</span>
                            <span className="text-sm text-muted-foreground">{scanProgress}%</span>
                          </div>
                          <Progress value={scanProgress} className="h-2" />
                        </div>
                      )}
                      
                      {!isScanning && !results && (
                        <Button 
                          onClick={startScanning}
                          className="w-full bg-gradient-nature"
                          size="lg"
                        >
                          <Scan className="h-5 w-5 mr-2" />
                          Analyze for Diseases
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Results Section */}
            {results && (
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center text-nature-primary">
                    <AlertTriangle className="h-5 w-5 mr-2 text-orange-500" />
                    Disease Detected: {results.name}
                  </CardTitle>
                  <CardDescription>
                    <div className="flex items-center space-x-4">
                      <Badge 
                        variant="secondary"
                        className={`${
                          results.severity === 'severe' ? 'bg-red-100 text-red-700' :
                          results.severity === 'moderate' ? 'bg-orange-100 text-orange-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {results.severity} severity
                      </Badge>
                      <span className="text-sm">Confidence: {results.confidence}%</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Symptoms */}
                  <div>
                    <h4 className="font-semibold text-nature-primary mb-3 flex items-center">
                      <Bug className="h-4 w-4 mr-2" />
                      Identified Symptoms
                    </h4>
                    <ul className="space-y-2">
                      {results.symptoms.map((symptom: string, index: number) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-nature-primary rounded-full" />
                          <span className="text-sm">{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Treatment */}
                  <div>
                    <h4 className="font-semibold text-nature-primary mb-3 flex items-center">
                      <Scissors className="h-4 w-4 mr-2" />
                      Recommended Treatment
                    </h4>
                    <ul className="space-y-2">
                      {results.treatment.map((step: string, index: number) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-6 h-6 bg-nature-accent text-nature-primary rounded-full flex items-center justify-center text-xs font-semibold mt-0.5">
                            {index + 1}
                          </div>
                          <span className="text-sm">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Prevention */}
                  <div>
                    <h4 className="font-semibold text-nature-primary mb-3 flex items-center">
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Prevention Tips
                    </h4>
                    <ul className="space-y-2">
                      {results.prevention.map((tip: string, index: number) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-nature-secondary flex-shrink-0" />
                          <span className="text-sm">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <Button 
                      onClick={() => {
                        setSelectedImage(null);
                        setResults(null);
                        setScanProgress(0);
                      }}
                      className="bg-gradient-nature"
                    >
                      Scan Another Plant
                    </Button>
                    <Button variant="outline">
                      Save to My Garden
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tips */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-nature-primary">Photo Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-nature-secondary mt-0.5" />
                    <span>Take photos in good natural light</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-nature-secondary mt-0.5" />
                    <span>Focus on affected leaves or areas</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-nature-secondary mt-0.5" />
                    <span>Include both healthy and diseased parts</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-nature-secondary mt-0.5" />
                    <span>Avoid blurry or distant shots</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Scans */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-nature-primary">Recent Scans</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentScans.map((scan) => (
                  <div key={scan.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                    <div>
                      <div className="font-medium text-sm">{scan.plant}</div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(scan.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-xs font-medium ${
                        scan.result === 'Healthy' ? 'text-nature-primary' : 'text-orange-600'
                      }`}>
                        {scan.result}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {scan.confidence}% confidence
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* AR Soil Tester */}
            <Card className="shadow-soft bg-gradient-to-br from-nature-accent/10 to-nature-water/10">
              <CardHeader>
                <CardTitle className="text-nature-primary text-sm">Related Tool</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">AR Soil Quality Tester</h4>
                  <p className="text-xs text-muted-foreground">
                    Point your camera at soil to analyze pH, moisture, and soil type using AI.
                  </p>
                  <Link to="/soil-tester">
                    <Button variant="outline" size="sm" className="w-full">
                      Open Soil Tester
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseaseDetector;