
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Copy, CheckCircle2, ChevronRight, Paintbrush, Palette, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Beautiful Button Components for your React Projects
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          ShopButtons provides a collection of ready-to-use, customizable button components 
          for React applications. Simply copy the code and paste it into your project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/buttons/plain">
            <Button size="lg" className="gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link to="/documentation">
            <Button size="lg" variant="outline" className="gap-2">
              Documentation <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-card border rounded-lg p-6">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Paintbrush className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Modern Design</h3>
          <p className="text-muted-foreground">
            Beautifully designed buttons with modern aesthetics and attention to detail.
          </p>
        </div>
        <div className="bg-card border rounded-lg p-6">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Copy className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
          <p className="text-muted-foreground">
            Simply copy the code and paste it into your React project. No complicated setup required.
          </p>
        </div>
        <div className="bg-card border rounded-lg p-6">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Palette className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Customizable</h3>
          <p className="text-muted-foreground">
            All buttons are built with Tailwind CSS, making them easy to customize and adapt to your needs.
          </p>
        </div>
      </div>

      {/* Button Categories Preview */}
      <div className="my-16">
        <h2 className="text-3xl font-bold text-center mb-12">Button Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/buttons/plain" className="no-underline">
            <div className="group border rounded-lg p-6 hover:border-primary transition-colors">
              <h3 className="font-semibold group-hover:text-primary transition-colors mb-2">Plain Buttons</h3>
              <p className="text-sm text-muted-foreground mb-4">Simple, clean buttons with minimal styling.</p>
              <div className="flex gap-2">
                <Button size="sm">Default</Button>
                <Button size="sm" variant="outline">Outline</Button>
              </div>
            </div>
          </Link>
          <Link to="/buttons/colorful" className="no-underline">
            <div className="group border rounded-lg p-6 hover:border-primary transition-colors">
              <h3 className="font-semibold group-hover:text-primary transition-colors mb-2">Colorful Buttons</h3>
              <p className="text-sm text-muted-foreground mb-4">Vibrant, eye-catching buttons with various color schemes.</p>
              <div className="flex gap-2">
                <Button size="sm" variant="destructive">Destructive</Button>
                <Button size="sm" variant="secondary">Secondary</Button>
              </div>
            </div>
          </Link>
          <Link to="/buttons/animated" className="no-underline">
            <div className="group border rounded-lg p-6 hover:border-primary transition-colors">
              <h3 className="font-semibold group-hover:text-primary transition-colors mb-2">Animated Buttons</h3>
              <p className="text-sm text-muted-foreground mb-4">Buttons with hover and click animations for visual feedback.</p>
              <div className="flex gap-2">
                <Button size="sm" className="transition-transform hover:scale-105">Hover Me</Button>
              </div>
            </div>
          </Link>
          <Link to="/buttons/neon" className="no-underline">
            <div className="group border rounded-lg p-6 hover:border-primary transition-colors">
              <h3 className="font-semibold group-hover:text-primary transition-colors mb-2">Neon Buttons</h3>
              <p className="text-sm text-muted-foreground mb-4">Glowing, high-contrast buttons inspired by neon lights.</p>
              <div className="flex gap-2">
                <Button size="sm" className="shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] transition-shadow">Neon</Button>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-muted rounded-xl p-8 text-center max-w-3xl mx-auto my-16">
        <h2 className="text-2xl font-bold mb-4">Ready to enhance your UI?</h2>
        <p className="text-muted-foreground mb-6">
          Get started with ShopButtons today and give your users a better experience.
        </p>
        <Link to="/buttons/plain">
          <Button size="lg" className="gap-2">
            Browse Button Collection <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
