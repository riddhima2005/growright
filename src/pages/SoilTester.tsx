import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { 
  ArrowLeft, 
  Camera, 
  Upload, 
  Scan,
  Droplets,
  Beaker,
  Mountain,
  CheckCircle,
  Lightbulb,
  AlertTriangle,
  Leaf
} from "lucide-react";

interface SoilAnalysis {
  ph: {
    value: number;
    status: string;
    description: string;
  };
  moisture: {
    percentage: number;
    status: string;
    description: string;
  };
  soilType: {
    type: string;
    description: string;
  };
  recommendations: string[];
  overallHealth: string;
  confidence: number;
}

const SoilTester = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [results, setResults] = useState<SoilAnalysis | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);

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

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }
      });
      setStream(mediaStream);
      setIsCameraActive(true);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      toast.error("Could not access camera. Please check permissions.");
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setIsCameraActive(false);
  };

  const capturePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0);
        const imageData = canvas.toDataURL('image/jpeg', 0.8);
        setSelectedImage(imageData);
        stopCamera();
        setResults(null);
      }
    }
  };

  const analyzeSoil = async () => {
    if (!selectedImage) {
      toast.error("Please capture or upload a soil image first!");
      return;
    }

    setIsAnalyzing(true);
    setAnalysisProgress(0);

    // Simulate progress while waiting for AI
    const progressInterval = setInterval(() => {
      setAnalysisProgress(prev => Math.min(prev + 5, 90));
    }, 200);

    try {
      const { data, error } = await supabase.functions.invoke('analyze-soil', {
        body: { imageBase64: selectedImage }
      });

      clearInterval(progressInterval);
      setAnalysisProgress(100);

      if (error) {
        throw error;
      }

      if (data.error) {
        throw new Error(data.error);
      }

      setResults(data.analysis);
      toast.success("Soil analysis complete!");
    } catch (error) {
      console.error('Error analyzing soil:', error);
      toast.error("Failed to analyze soil. Please try again.");
    } finally {
      setIsAnalyzing(false);
      setAnalysisProgress(0);
    }
  };

  const getHealthColor = (health: string) => {
    switch (health) {
      case 'excellent': return 'bg-green-100 text-green-700';
      case 'good': return 'bg-nature-accent text-nature-primary';
      case 'fair': return 'bg-yellow-100 text-yellow-700';
      case 'poor': return 'bg-red-100 text-red-700';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getMoistureColor = (status: string) => {
    switch (status) {
      case 'dry': return 'text-orange-500';
      case 'optimal': return 'text-nature-primary';
      case 'wet': return 'text-blue-500';
      default: return 'text-muted-foreground';
    }
  };

  const getPHColor = (status: string) => {
    switch (status) {
      case 'acidic': return 'text-orange-500';
      case 'neutral': return 'text-nature-primary';
      case 'alkaline': return 'text-purple-500';
      default: return 'text-muted-foreground';
    }
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
              <h1 className="text-2xl font-bold text-nature-primary">AR Soil Tester</h1>
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
            {/* Camera/Upload Section */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-nature-primary flex items-center">
                  <Mountain className="h-5 w-5 mr-2" />
                  Capture Soil Sample
                </CardTitle>
                <CardDescription>
                  Point your camera at the soil or upload an image for AI-powered analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {isCameraActive ? (
                    <div className="space-y-4">
                      <div className="relative rounded-lg overflow-hidden bg-black">
                        <video
                          ref={videoRef}
                          autoPlay
                          playsInline
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute inset-0 pointer-events-none">
                          <div className="absolute inset-4 border-2 border-nature-accent/50 rounded-lg" />
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="w-16 h-16 border-2 border-nature-accent rounded-full flex items-center justify-center bg-nature-accent/20">
                              <Scan className="h-8 w-8 text-nature-accent" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center space-x-4">
                        <Button onClick={capturePhoto} className="bg-gradient-nature">
                          <Camera className="h-4 w-4 mr-2" />
                          Capture Photo
                        </Button>
                        <Button variant="outline" onClick={stopCamera}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : !selectedImage ? (
                    <div className="border-2 border-dashed border-muted rounded-lg p-12 text-center bg-muted/20">
                      <Mountain className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                      <h3 className="text-lg font-semibold mb-2">Scan Your Soil</h3>
                      <p className="text-muted-foreground mb-6">
                        Use your camera to capture a soil sample or upload an existing image
                      </p>
                      <div className="flex justify-center space-x-4">
                        <Button onClick={startCamera} className="bg-gradient-nature">
                          <Camera className="h-4 w-4 mr-2" />
                          Use Camera
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => fileInputRef.current?.click()}
                        >
                          <Upload className="h-4 w-4 mr-2" />
                          Upload Image
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
                          alt="Soil sample" 
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="absolute top-2 right-2 bg-white/90"
                          onClick={() => {
                            setSelectedImage(null);
                            setResults(null);
                            setAnalysisProgress(0);
                          }}
                        >
                          Change Image
                        </Button>
                      </div>
                      
                      {isAnalyzing && (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Analyzing soil composition...</span>
                            <span className="text-sm text-muted-foreground">{analysisProgress}%</span>
                          </div>
                          <Progress value={analysisProgress} className="h-2" />
                        </div>
                      )}
                      
                      {!isAnalyzing && !results && (
                        <Button 
                          onClick={analyzeSoil}
                          className="w-full bg-gradient-nature"
                          size="lg"
                        >
                          <Scan className="h-5 w-5 mr-2" />
                          Analyze Soil Quality
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
                  <CardTitle className="flex items-center justify-between text-nature-primary">
                    <span className="flex items-center">
                      <Leaf className="h-5 w-5 mr-2" />
                      Soil Analysis Results
                    </span>
                    <Badge className={getHealthColor(results.overallHealth)}>
                      {results.overallHealth} health
                    </Badge>
                  </CardTitle>
                  <CardDescription>
                    Analysis confidence: {results.confidence}%
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* pH Level */}
                  <div className="p-4 rounded-lg bg-secondary/50">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center">
                        <Beaker className="h-5 w-5 mr-2 text-nature-primary" />
                        <h4 className="font-semibold">pH Level</h4>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold">{results.ph.value}</span>
                        <Badge variant="outline" className={`ml-2 ${getPHColor(results.ph.status)}`}>
                          {results.ph.status}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{results.ph.description}</p>
                    <div className="mt-2">
                      <div className="h-2 rounded-full bg-gradient-to-r from-red-400 via-green-400 to-purple-400" />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>Acidic (0)</span>
                        <span>Neutral (7)</span>
                        <span>Alkaline (14)</span>
                      </div>
                    </div>
                  </div>

                  {/* Moisture */}
                  <div className="p-4 rounded-lg bg-secondary/50">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center">
                        <Droplets className="h-5 w-5 mr-2 text-nature-water" />
                        <h4 className="font-semibold">Moisture Content</h4>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold">{results.moisture.percentage}%</span>
                        <Badge variant="outline" className={`ml-2 ${getMoistureColor(results.moisture.status)}`}>
                          {results.moisture.status}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{results.moisture.description}</p>
                    <Progress value={results.moisture.percentage} className="h-2 mt-2" />
                  </div>

                  {/* Soil Type */}
                  <div className="p-4 rounded-lg bg-secondary/50">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center">
                        <Mountain className="h-5 w-5 mr-2 text-nature-primary" />
                        <h4 className="font-semibold">Soil Type</h4>
                      </div>
                      <Badge className="bg-nature-accent text-nature-primary capitalize">
                        {results.soilType.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{results.soilType.description}</p>
                  </div>

                  {/* Recommendations */}
                  <div>
                    <h4 className="font-semibold text-nature-primary mb-3 flex items-center">
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Recommendations
                    </h4>
                    <ul className="space-y-2">
                      {results.recommendations.map((tip, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-nature-secondary flex-shrink-0 mt-0.5" />
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
                        setAnalysisProgress(0);
                      }}
                      className="bg-gradient-nature"
                    >
                      Test Another Sample
                    </Button>
                    <Button variant="outline">
                      Save Results
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
                <CardTitle className="text-nature-primary">How to Get Best Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-nature-secondary mt-0.5" />
                    <span>Take photos in natural daylight</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-nature-secondary mt-0.5" />
                    <span>Get close to the soil surface (6-12 inches)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-nature-secondary mt-0.5" />
                    <span>Include some soil texture and color variation</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-nature-secondary mt-0.5" />
                    <span>Avoid shadows or extreme lighting</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Understanding Results */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-nature-primary text-sm">Understanding pH Levels</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-orange-600">Acidic (0-6)</span>
                  <span className="text-muted-foreground">Blueberries, Azaleas</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-600">Neutral (6-7.5)</span>
                  <span className="text-muted-foreground">Most vegetables</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-600">Alkaline (7.5-14)</span>
                  <span className="text-muted-foreground">Lavender, Clematis</span>
                </div>
              </CardContent>
            </Card>

            {/* Warning */}
            <Card className="shadow-soft border-orange-200 bg-orange-50/50">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium text-orange-700">Analysis Disclaimer</p>
                    <p className="text-orange-600 mt-1">
                      This AI analysis provides estimates based on visual inspection. 
                      For precise measurements, consider a professional soil test.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Link to Disease Detector */}
            <Card className="shadow-soft bg-gradient-to-br from-nature-accent/10 to-nature-water/10">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-nature-primary">Related Tool</h4>
                  <p className="text-sm text-muted-foreground">
                    Check your plants for diseases using our AI-powered detector.
                  </p>
                  <Link to="/disease-detector">
                    <Button variant="outline" className="w-full">
                      Open Disease Detector
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

export default SoilTester;
