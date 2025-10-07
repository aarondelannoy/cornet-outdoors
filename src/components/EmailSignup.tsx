import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const EmailSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks! We'll notify you when we launch.");
      setEmail("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground focus:ring-primary"
        />
        <Button 
          type="submit"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
        >
          Notify Me
        </Button>
      </div>
    </form>
  );
};
