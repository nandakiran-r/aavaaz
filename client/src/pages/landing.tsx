import { motion } from "framer-motion";
import { ArrowRight, Shield, Volume2, Users, Eye, Github, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import aavaazImage from "@assets/Aavaaz_1766290481799.png";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Noise Texture */}
      <div className="noise-overlay" />

      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />

      {/* Navigation */}
      <nav className="relative z-10 border-b bg-background/80 backdrop-blur-md sticky top-0">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-2xl tracking-tighter text-primary">AAVAAZ</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#reports" className="hover:text-foreground transition-colors">Reports</a>
          </div>
          <Button size="sm" className="hidden md:flex rounded-full font-bold">
            Student Login
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 md:pt-32 md:pb-48 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Live for 2025-26 Academic Year
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter mb-6 text-foreground">
              RAISE YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">VOICE.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed">
              An anonymous student feedback and complaint platform exclusively for St. Joseph’s College (Autonomous), Devagiri. 
              <span className="block mt-2 font-medium text-foreground">Presented by Samathwa College Union 2025–26.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full text-lg h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-105">
                Raise Your Voice <Volume2 className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-lg h-14 px-8 border-2 hover:bg-secondary/10 hover:text-secondary hover:border-secondary transition-colors">
                View Reports <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-foreground/5 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
               {/* Using the attached image as the hero visual */}
               <img 
                 src={aavaazImage} 
                 alt="Aavaaz Poster Art" 
                 className="object-cover w-full h-full"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-card border shadow-xl p-4 rounded-2xl flex items-center gap-4 max-w-xs z-20"
            >
              <div className="bg-green-100 p-3 rounded-full text-green-600">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <p className="font-bold text-sm">100% Anonymous</p>
                <p className="text-xs text-muted-foreground">Your identity is cryptographically protected.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section id="features" className="py-24 bg-foreground text-background relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Shield className="h-8 w-8" />}
              title="Privacy First"
              description="Built with privacy-preserving architecture. We don't track your IP or store personal identifiers."
              index={0}
            />
            <FeatureCard 
              icon={<Eye className="h-8 w-8" />}
              title="Radical Transparency"
              description="Open source codebase. Every report handling process is visible to the student body."
              index={1}
            />
            <FeatureCard 
              icon={<Users className="h-8 w-8" />}
              title="Community Driven"
              description="Moderated by elected student representatives, ensuring fair and unbiased resolution."
              index={2}
            />
          </div>
        </div>
      </section>

      {/* Call to Action Strip */}
      <section className="py-24 container mx-auto px-6">
        <div className="bg-primary/5 border border-primary/10 rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Ready to be heard?</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Your feedback shapes our campus. Join thousands of students making a difference at St. Joseph’s College.
            </p>
            <Button size="lg" className="rounded-full h-16 px-10 text-xl font-bold bg-foreground text-background hover:bg-foreground/90">
              Submit a Complaint
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
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

function FeatureCard({ icon, title, description, index }: { icon: React.ReactNode, title: string, description: string, index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-background/5 border border-white/10 p-8 rounded-2xl hover:bg-background/10 transition-colors"
    >
      <div className="bg-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-6">
        {icon}
      </div>
      <h3 className="font-display text-2xl font-bold mb-3 text-background">{title}</h3>
      <p className="text-white/60 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}