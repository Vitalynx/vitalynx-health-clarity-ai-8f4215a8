import { Upload, Brain, BarChart3, ArrowRight } from "lucide-react";

export const DemoGifPlaceholder = () => {
  return (
    <div className="relative bg-gradient-to-br from-background via-muted/50 to-primary/5 rounded-2xl p-8 border border-primary/10 shadow-soft">
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
      </div>
      
      <div className="mt-8 space-y-6">
        <div className="text-center">
          <h3 className="text-lg font-light text-foreground mb-2">AI Health Analysis Demo</h3>
          <p className="text-sm text-muted-foreground">Watch how Vitalynx transforms your lab data</p>
        </div>
        
        {/* Demo Steps Animation */}
        <div className="space-y-4">
          {/* Step 1: Upload */}
          <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg border border-primary/10 animate-fade-in">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <Upload className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">Uploading lab report...</p>
              <div className="w-full bg-muted rounded-full h-2 mt-1">
                <div className="bg-primary h-2 rounded-full animate-pulse" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
          
          {/* Step 2: AI Analysis */}
          <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg border border-secondary/10 animate-fade-in delay-1000">
            <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
              <Brain className="w-4 h-4 text-secondary animate-pulse" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">AI analyzing biomarkers...</p>
              <div className="flex gap-1 mt-1">
                <div className="w-2 h-2 bg-secondary rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-secondary rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-secondary rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
          
          {/* Step 3: Results */}
          <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg border border-accent/10 animate-fade-in delay-2000">
            <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-accent" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">Insights ready!</p>
              <p className="text-xs text-muted-foreground">Clear explanations & recommendations</p>
            </div>
            <ArrowRight className="w-4 h-4 text-accent animate-pulse" />
          </div>
        </div>
        
        <div className="text-center pt-4">
          <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-xs text-primary font-light">
            Demo will be available soon
          </div>
        </div>
      </div>
    </div>
  );
};