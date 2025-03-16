
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check, Code } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Define button data interface
interface ButtonData {
  id: string;
  title: string;
  description: string;
  preview: React.ReactNode;
  code: string;
  category: string;
}

// Sample button data for each category
const buttonData: ButtonData[] = [
  // Plain Buttons
  {
    id: "plain-default",
    title: "Default Button",
    description: "A simple, clean button with minimal styling.",
    preview: <Button>Default Button</Button>,
    code: `<Button>Default Button</Button>`,
    category: "plain"
  },
  {
    id: "plain-outline",
    title: "Outline Button",
    description: "A button with an outline border and transparent background.",
    preview: <Button variant="outline">Outline Button</Button>,
    code: `<Button variant="outline">Outline Button</Button>`,
    category: "plain"
  },
  {
    id: "plain-ghost",
    title: "Ghost Button",
    description: "A subtle button with no background or border.",
    preview: <Button variant="ghost">Ghost Button</Button>,
    code: `<Button variant="ghost">Ghost Button</Button>`,
    category: "plain"
  },
  // Colorful Buttons
  {
    id: "colorful-destructive",
    title: "Destructive Button",
    description: "A button for destructive actions like delete.",
    preview: <Button variant="destructive">Delete Item</Button>,
    code: `<Button variant="destructive">Delete Item</Button>`,
    category: "colorful"
  },
  {
    id: "colorful-secondary",
    title: "Secondary Button",
    description: "A button with secondary styling.",
    preview: <Button variant="secondary">Secondary Button</Button>,
    code: `<Button variant="secondary">Secondary Button</Button>`,
    category: "colorful"
  },
  // Animated Buttons
  {
    id: "animated-hover",
    title: "Hover Animation",
    description: "Button that scales slightly on hover.",
    preview: <Button className="transition-transform hover:scale-105">Hover Me</Button>,
    code: `<Button className="transition-transform hover:scale-105">Hover Me</Button>`,
    category: "animated"
  },
  // Neon Buttons
  {
    id: "neon-glow",
    title: "Neon Glow",
    description: "A button with a neon glow effect.",
    preview: <Button className="shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] transition-shadow">Neon Button</Button>,
    code: `<Button className="shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] transition-shadow">Neon Button</Button>`,
    category: "neon"
  }
  // You can add more buttons to each category as needed
];

const Buttons = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState(category || "plain");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Handle category change and update URL
  useEffect(() => {
    if (category !== selectedCategory) {
      navigate(`/buttons/${selectedCategory}`);
    }
  }, [selectedCategory, navigate, category]);
  
  // Reset category from URL params when it changes
  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
  }, [category]);

  // Filter buttons by selected category
  const filteredButtons = buttonData.filter(button => button.category === selectedCategory);

  // Handle copy code function
  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    toast({
      title: "Code Copied!",
      description: "Button code has been copied to clipboard.",
    });
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Handle view code function (temporary show code alert)
  const handleViewCode = (code: string) => {
    const formattedCode = code.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const codeDisplay = document.createElement("div");
    codeDisplay.innerHTML = `<pre style="background-color:#1e1e1e;color:#fff;padding:16px;border-radius:8px;overflow:auto"><code>${formattedCode}</code></pre>`;
    
    toast({
      title: "Button Code",
      description: (
        <div className="mt-2 max-h-[200px] overflow-auto rounded bg-muted p-2">
          <pre><code>{code}</code></pre>
        </div>
      ),
      duration: 5000,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Button Collection</h1>
      <p className="text-muted-foreground mb-8">
        Browse our collection of beautiful button styles. Select a category from the sidebar.
      </p>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-20 border rounded-lg p-4">
            <h3 className="font-medium mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  className={`w-full text-left px-3 py-2 rounded-md ${selectedCategory === "plain" ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted"}`}
                  onClick={() => setSelectedCategory("plain")}
                >
                  Plain Buttons
                </button>
              </li>
              <li>
                <button 
                  className={`w-full text-left px-3 py-2 rounded-md ${selectedCategory === "colorful" ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted"}`}
                  onClick={() => setSelectedCategory("colorful")}
                >
                  Colorful Buttons
                </button>
              </li>
              <li>
                <button 
                  className={`w-full text-left px-3 py-2 rounded-md ${selectedCategory === "animated" ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted"}`}
                  onClick={() => setSelectedCategory("animated")}
                >
                  Animated Buttons
                </button>
              </li>
              <li>
                <button 
                  className={`w-full text-left px-3 py-2 rounded-md ${selectedCategory === "neon" ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted"}`}
                  onClick={() => setSelectedCategory("neon")}
                >
                  Neon Buttons
                </button>
              </li>
            </ul>
          </div>
        </aside>
        
        {/* Main content area - Button cards */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredButtons.map((button) => (
              <Card key={button.id} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{button.title}</CardTitle>
                  <CardDescription>{button.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center items-center p-6 bg-muted/20 rounded-md">
                  <div className="button-preview">
                    {button.preview}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between gap-2">
                  <Button 
                    variant="outline" 
                    onClick={() => handleViewCode(button.code)}
                    className="flex-1"
                  >
                    <Code className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => handleCopyCode(button.code, button.id)}
                    className="flex-1"
                  >
                    {copiedId === button.id ? (
                      <>
                        <Check className="mr-2 h-4 w-4" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2 h-4 w-4" />
                        Copy
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
