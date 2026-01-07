import { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen w-full flex flex-col items-center justify-center bg-zinc-950 text-white p-4">
                    <div className="max-w-md w-full bg-zinc-900/50 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-xl">
                        <div className="mx-auto w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6">
                            <AlertTriangle className="w-8 h-8 text-red-500" />
                        </div>

                        <h2 className="text-2xl font-bold mb-4">Systems Critical</h2>
                        <p className="text-zinc-400 mb-8">
                            An unexpected anomaly has occurred. Our engineers have been notified.
                        </p>

                        <div className="flex flex-col gap-4">
                            <Button
                                onClick={() => window.location.reload()}
                                className="w-full bg-white text-black hover:bg-zinc-200"
                            >
                                <RefreshCw className="mr-2 h-4 w-4" />
                                Reinitialize System
                            </Button>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
