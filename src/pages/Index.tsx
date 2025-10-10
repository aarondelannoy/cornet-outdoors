import { EmailSignup } from "@/components/EmailSignup";
import { Facebook, Instagram } from "lucide-react";
import logo from "@/assets/cornet-logo-new.webp";
import heroImage from "@/assets/hero-mountains.jpg";

const Index = () => {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo */}
          <div className="w-64 md:w-80 lg:w-96 animate-smooth-slide-down">
            <img 
              src={logo} 
              alt="Cornet Outdoors Co. Logo" 
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>

          {/* Coming Soon Text */}
          <div className="space-y-4 animate-smooth-slide-up animation-delay-200">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
              Coming Soon
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Adventure awaits. We're crafting something special for outdoor enthusiasts.
            </p>
          </div>

          {/* Email Signup */}
          <div className="w-full max-w-md animate-smooth-fade animation-delay-300">
            <p className="text-sm text-muted-foreground mb-4">
              Be the first to know when we launch
            </p>
            <EmailSignup />
          </div>

          {/* Social Media Links */}
          <div className="flex gap-6 animate-smooth-slide-up animation-delay-400">
            <a
              href="https://www.facebook.com/people/Cornet-Outdoors-Co/61581635897020/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Visit our Facebook page"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/cornetoutdoors/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Visit our Instagram page"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>

          {/* Footer */}
          <div className="pt-12 animate-smooth-fade animation-delay-500">
            <p className="text-sm text-muted-foreground">
              © 2025 Cornet Outdoors, Co. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
