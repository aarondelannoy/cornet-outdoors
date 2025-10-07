import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const EmailSignup = () => {
  return (
    <form 
      action="https://formspree.io/f/mdkwlkwk"
      method="POST"
      className="w-full max-w-md mx-auto"
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="flex-1 bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground focus:ring-primary focus:bg-secondary/50 autofill:bg-secondary/50"
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
