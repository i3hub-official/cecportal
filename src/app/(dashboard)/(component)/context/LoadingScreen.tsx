import { School } from "lucide-react";

interface LoadingScreenProps {
  message?: string;
}

export default function LoadingScreen({
  message = "Setting Up Your Dashboard",
}: LoadingScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="text-center max-w-xs z-10">
        {/* Animated Icon Container with Ripple */}

        <h3 className="text-lg font-semibold text-foreground mb-6 relative">
          {message}
        </h3>

        <div className="space-y-4 mb-8 text-sm">
          {/* Loading Step 1 */}
          <div
            className="flex items-center justify-between p-3 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10 animate-fade-in shadow-sm hover:shadow-md transition-shadow"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center">
              <div className="relative mr-4">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-400 animate-ping"></div>
              </div>
              <span className="text-foreground">Loading modules</span>
            </div>
            <div className="w-5 h-5 rounded-full bg-green-100/50 animate-pulse"></div>
          </div>

          {/* Loading Step 2 */}
          <div
            className="flex items-center justify-between p-3 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10 animate-fade-in shadow-sm hover:shadow-md transition-shadow"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex items-center">
              <div className="relative mr-4">
                <div className="w-3 h-3 rounded-full bg-amber-500 animate-pulse"></div>
                <div
                  className="absolute inset-0 w-3 h-3 rounded-full bg-amber-400 animate-ping"
                  style={{ animationDelay: "0.3s" }}
                ></div>
              </div>
              <span className="text-foreground">Fetching data</span>
            </div>
            <div
              className="w-5 h-5 rounded-full bg-amber-100/50 animate-pulse"
              style={{ animationDelay: "0.3s" }}
            ></div>
          </div>

          {/* Loading Step 3 */}
          <div
            className="flex items-center justify-between p-3 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10 animate-fade-in shadow-sm hover:shadow-md transition-shadow"
            style={{ animationDelay: "1s" }}
          >
            <div className="flex items-center">
              <div className="relative mr-4">
                <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                <div
                  className="absolute inset-0 w-3 h-3 rounded-full bg-blue-400 animate-ping"
                  style={{ animationDelay: "0.6s" }}
                ></div>
              </div>
              <span className="text-foreground">Finalizing</span>
            </div>
            <div
              className="w-5 h-5 rounded-full bg-blue-100/50 animate-pulse"
              style={{ animationDelay: "0.6s" }}
            ></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-muted/50 rounded-full h-2 mb-6 overflow-hidden backdrop-blur-sm">
          <div className="bg-gradient-to-r from-primary via-primary/70 to-primary/40 h-full rounded-full w-3/4 animate-[loadingWave_2s_ease-in-out_infinite]"></div>
        </div>

        <p className="text-xs text-muted-foreground animate-pulse">
          Securely connected to your institution
        </p>
      </div>
    </div>
  );
}
