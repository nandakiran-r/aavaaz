import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function PageLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden font-sans selection:bg-primary selection:text-primary-foreground">
            {/* Noise Texture */}
            <div className="noise-overlay" />

            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />

            {/* Navigation */}
            <nav className="relative z-10 border-b bg-background/80 backdrop-blur-md sticky top-0">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/">
                        <div className="flex items-center gap-2 cursor-pointer">
                            <span className="font-display font-bold text-2xl tracking-tighter text-primary">AAVAAZ</span>
                        </div>
                    </Link>
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                        <Link href="/app" className="hover:text-foreground transition-colors">App</Link>
                    </div>
                    <Link href="/app">
                        <Button size="sm" className="hidden md:flex rounded-full font-bold">
                            Go to App
                        </Button>
                    </Link>
                </div>
            </nav>

            {/* Main Content */}
            <main className="relative z-10 min-h-[calc(100vh-64px-300px)]">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-background border-t py-12 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-center md:text-left">
                            <h3 className="font-display font-bold text-xl text-primary mb-1">AAVAAZ</h3>
                            <p className="text-sm text-muted-foreground">St. Joseph’s College (Autonomous), Devagiri</p>
                        </div>

                        <div className="flex items-center gap-6">
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms</a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Guidelines</a>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <a
                                href="https://github.com/nandakiranr"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 hover:text-foreground transition-colors group"
                            >
                                <span>Built by Nandakiran R</span>
                                <Github className="h-4 w-4 group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>
                    <div className="mt-8 text-center text-xs text-muted-foreground/50">
                        © 2025 Samathwa College Union. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}
