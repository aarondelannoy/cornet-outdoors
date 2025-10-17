import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/cornet-logo.png";
import heroImage from "@/assets/hero-mountains.jpg";

const Home = () => {
  // Placeholder t-shirt data - replace with actual designs
  const tshirts = [
    { id: 1, name: "Mountain Peak", price: "$24.99", amazonUrl: "#" },
    { id: 2, name: "Trail Blazer", price: "$24.99", amazonUrl: "#" },
    { id: 3, name: "Summit Seeker", price: "$24.99", amazonUrl: "#" },
    { id: 4, name: "Wild Horizon", price: "$24.99", amazonUrl: "#" },
    { id: 5, name: "Alpine Spirit", price: "$24.99", amazonUrl: "#" },
    { id: 6, name: "Ridge Runner", price: "$24.99", amazonUrl: "#" },
    { id: 7, name: "Forest Path", price: "$24.99", amazonUrl: "#" },
    { id: 8, name: "Peak Performance", price: "$24.99", amazonUrl: "#" },
    { id: 9, name: "Outdoor Soul", price: "$24.99", amazonUrl: "#" },
    { id: 10, name: "Adventure Awaits", price: "$24.99", amazonUrl: "#" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
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

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Logo */}
            <div className="w-48 md:w-64 lg:w-80 animate-smooth-slide-down">
              <img 
                src={logo} 
                alt="Cornet Outdoors Co. Logo" 
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>

            {/* Tagline */}
            <div className="space-y-4 animate-smooth-slide-up animation-delay-200">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                Wear Your Adventure
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Premium outdoor-inspired apparel for those who live for the trail
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* T-Shirts Grid Section */}
      <section className="relative py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-smooth-fade">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Collection
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our exclusive designs that capture the spirit of the outdoors
            </p>
          </div>

          {/* Grid of T-Shirts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 animate-smooth-fade animation-delay-300">
            {tshirts.map((tshirt, index) => (
              <Card 
                key={tshirt.id} 
                className="group overflow-hidden border-border bg-card hover:border-primary transition-all duration-300 animate-smooth-fade"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-0">
                  {/* T-Shirt Image Placeholder */}
                  <div className="aspect-square bg-muted flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">
                        Design {tshirt.id}
                      </span>
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-4 space-y-3">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {tshirt.name}
                    </h3>
                    <p className="text-lg font-bold text-primary">
                      {tshirt.price}
                    </p>
                    <Button 
                      className="w-full" 
                      variant="default"
                      asChild
                    >
                      <a 
                        href={tshirt.amazonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        Shop on Amazon
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col items-center space-y-6">
            {/* Social Media Links */}
            <div className="flex gap-6">
              <a
                href="https://www.facebook.com/cornetoutdoors/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/cornetoutdoors"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © 2025 Cornet Outdoors, Co. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
