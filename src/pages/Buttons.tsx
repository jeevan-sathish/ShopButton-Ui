
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check, Code, ChevronUp, ChevronDown } from "lucide-react";
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
  {
    id: "plain-link",
    title: "Link Button",
    description: "A button that looks like a link with underline on hover.",
    preview: <Button variant="link">Link Button</Button>,
    code: `<Button variant="link">Link Button</Button>`,
    category: "plain"
  },
  {
    id: "plain-sm",
    title: "Small Button",
    description: "A smaller size button for compact UI elements.",
    preview: <Button size="sm">Small Button</Button>,
    code: `<Button size="sm">Small Button</Button>`,
    category: "plain"
  },
  {
    id: "plain-lg",
    title: "Large Button",
    description: "A larger size button for emphasizing important actions.",
    preview: <Button size="lg">Large Button</Button>,
    code: `<Button size="lg">Large Button</Button>`,
    category: "plain"
  },
  {
    id: "plain-full-width",
    title: "Full Width Button",
    description: "A button that spans the full width of its container.",
    preview: <Button className="w-full">Full Width Button</Button>,
    code: `<Button className="w-full">Full Width Button</Button>`,
    category: "plain"
  },
  {
    id: "plain-icon",
    title: "Icon Button",
    description: "A button with just an icon, great for toolbars.",
    preview: <Button size="icon"><Copy className="h-4 w-4" /></Button>,
    code: `<Button size="icon"><Copy className="h-4 w-4" /></Button>`,
    category: "plain"
  },
  {
    id: "plain-with-icon",
    title: "Button with Icon",
    description: "A button with text and an icon for visual guidance.",
    preview: <Button><Copy className="mr-2 h-4 w-4" /> Copy Text</Button>,
    code: `<Button><Copy className="mr-2 h-4 w-4" /> Copy Text</Button>`,
    category: "plain"
  },
  {
    id: "plain-disabled",
    title: "Disabled Button",
    description: "A button in disabled state, showing it's not interactive.",
    preview: <Button disabled>Disabled Button</Button>,
    code: `<Button disabled>Disabled Button</Button>`,
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
  {
    id: "colorful-success",
    title: "Success Button",
    description: "A green button indicating a successful action.",
    preview: <Button className="bg-green-500 hover:bg-green-600">Success</Button>,
    code: `<Button className="bg-green-500 hover:bg-green-600">Success</Button>`,
    category: "colorful"
  },
  {
    id: "colorful-warning",
    title: "Warning Button",
    description: "An amber button for actions that need caution.",
    preview: <Button className="bg-amber-500 hover:bg-amber-600">Warning</Button>,
    code: `<Button className="bg-amber-500 hover:bg-amber-600">Warning</Button>`,
    category: "colorful"
  },
  {
    id: "colorful-info",
    title: "Info Button",
    description: "A blue button for informational actions.",
    preview: <Button className="bg-sky-500 hover:bg-sky-600">Information</Button>,
    code: `<Button className="bg-sky-500 hover:bg-sky-600">Information</Button>`,
    category: "colorful"
  },
  {
    id: "colorful-purple",
    title: "Purple Button",
    description: "A vibrant purple button for a unique look.",
    preview: <Button className="bg-purple-500 hover:bg-purple-600">Purple</Button>,
    code: `<Button className="bg-purple-500 hover:bg-purple-600">Purple</Button>`,
    category: "colorful"
  },
  {
    id: "colorful-pink",
    title: "Pink Button",
    description: "A pink button for a playful, energetic feel.",
    preview: <Button className="bg-pink-500 hover:bg-pink-600">Pink</Button>,
    code: `<Button className="bg-pink-500 hover:bg-pink-600">Pink</Button>`,
    category: "colorful"
  },
  {
    id: "colorful-indigo",
    title: "Indigo Button",
    description: "A deep indigo button for a professional look.",
    preview: <Button className="bg-indigo-500 hover:bg-indigo-600">Indigo</Button>,
    code: `<Button className="bg-indigo-500 hover:bg-indigo-600">Indigo</Button>`,
    category: "colorful"
  },
  {
    id: "colorful-gradient",
    title: "Gradient Button",
    description: "A striking gradient background for an eye-catching button.",
    preview: <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">Gradient</Button>,
    code: `<Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">Gradient</Button>`,
    category: "colorful"
  },
  {
    id: "colorful-outline-colored",
    title: "Colored Outline",
    description: "An outline button with a custom border color.",
    preview: <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-950">Pink Outline</Button>,
    code: `<Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-950">Pink Outline</Button>`,
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
  {
    id: "animated-pulse",
    title: "Pulse Animation",
    description: "Button that pulses to draw attention.",
    preview: <Button className="animate-pulse">Pulsing Button</Button>,
    code: `<Button className="animate-pulse">Pulsing Button</Button>`,
    category: "animated"
  },
  {
    id: "animated-bounce",
    title: "Bounce Animation",
    description: "Button that bounces on hover for a playful effect.",
    preview: <Button className="hover:animate-bounce">Bounce Me</Button>,
    code: `<Button className="hover:animate-bounce">Bounce Me</Button>`,
    category: "animated"
  },
  {
    id: "animated-spin",
    title: "Spin Animation",
    description: "Button with a spinning icon, good for loading states.",
    preview: <Button><svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Processing</Button>,
    code: `<Button>
  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  Processing
</Button>`,
    category: "animated"
  },
  {
    id: "animated-shake",
    title: "Shake Animation",
    description: "Button that shakes on hover for attention.",
    preview: <Button className="hover:animate-[wiggle_1s_ease-in-out_infinite] hover:animate-[wiggle_1s_ease-in-out_infinite]">Shake Me</Button>,
    code: `<Button className="hover:animate-[wiggle_1s_ease-in-out_infinite]">Shake Me</Button>`,
    category: "animated"
  },
  {
    id: "animated-border",
    title: "Animated Border",
    description: "Button with a border that animates on hover.",
    preview: <Button className="relative after:absolute after:inset-0 after:z-[-1] after:rounded-md after:bg-gradient-to-r after:from-pink-500 after:via-purple-500 after:to-indigo-500 after:p-0.5 hover:after:animate-spin-slow">Glowing Border</Button>,
    code: `<Button className="relative after:absolute after:inset-0 after:z-[-1] after:rounded-md after:bg-gradient-to-r after:from-pink-500 after:via-purple-500 after:to-indigo-500 after:p-0.5 hover:after:animate-spin-slow">Glowing Border</Button>`,
    category: "animated"
  },
  {
    id: "animated-fill",
    title: "Fill Animation",
    description: "Button that fills with color on hover.",
    preview: <Button variant="outline" className="border-2 relative z-0 overflow-hidden after:absolute after:inset-0 after:z-[-1] after:bg-primary after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-500 hover:text-primary-foreground after:rounded-md">Fill Hover</Button>,
    code: `<Button variant="outline" className="border-2 relative z-0 overflow-hidden after:absolute after:inset-0 after:z-[-1] after:bg-primary after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-500 hover:text-primary-foreground after:rounded-md">Fill Hover</Button>`,
    category: "animated"
  },
  {
    id: "animated-shadow",
    title: "Shadow Animation",
    description: "Button with an animated shadow on hover.",
    preview: <Button className="shadow-none hover:shadow-lg transition-shadow duration-300">Shadow Grow</Button>,
    code: `<Button className="shadow-none hover:shadow-lg transition-shadow duration-300">Shadow Grow</Button>`,
    category: "animated"
  },
  {
    id: "animated-position",
    title: "Position Animation",
    description: "Button with content that moves on hover.",
    preview: <Button className="group"><span className="inline-block transition-transform duration-200 group-hover:translate-x-1">Next</span> →</Button>,
    code: `<Button className="group"><span className="inline-block transition-transform duration-200 group-hover:translate-x-1">Next</span> →</Button>`,
    category: "animated"
  },
  {
    id: "animated-rotate",
    title: "Rotate Animation",
    description: "Button with an icon that rotates on hover.",
    preview: <Button className="group">Settings <svg className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></Button>,
    code: `<Button className="group">Settings <svg className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></Button>`,
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
  },
  {
    id: "neon-outline",
    title: "Neon Outline",
    description: "A button with a glowing neon outline.",
    preview: <Button variant="outline" className="border-2 border-blue-500 text-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] transition-shadow">Neon Outline</Button>,
    code: `<Button variant="outline" className="border-2 border-blue-500 text-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] transition-shadow">Neon Outline</Button>`,
    category: "neon"
  },
  {
    id: "neon-text",
    title: "Neon Text",
    description: "A button with glowing neon text.",
    preview: <Button variant="ghost" className="text-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] hover:text-blue-400 transition-all">Neon Text</Button>,
    code: `<Button variant="ghost" className="text-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] hover:text-blue-400 transition-all">Neon Text</Button>`,
    category: "neon"
  },
  {
    id: "neon-green",
    title: "Green Neon",
    description: "A button with a green neon glow effect.",
    preview: <Button className="bg-green-500 hover:bg-green-600 shadow-[0_0_15px_rgba(34,197,94,0.5)] hover:shadow-[0_0_25px_rgba(34,197,94,0.8)] transition-all">Green Neon</Button>,
    code: `<Button className="bg-green-500 hover:bg-green-600 shadow-[0_0_15px_rgba(34,197,94,0.5)] hover:shadow-[0_0_25px_rgba(34,197,94,0.8)] transition-all">Green Neon</Button>`,
    category: "neon"
  },
  {
    id: "neon-pink",
    title: "Pink Neon",
    description: "A button with a pink neon glow effect.",
    preview: <Button className="bg-pink-500 hover:bg-pink-600 shadow-[0_0_15px_rgba(236,72,153,0.5)] hover:shadow-[0_0_25px_rgba(236,72,153,0.8)] transition-all">Pink Neon</Button>,
    code: `<Button className="bg-pink-500 hover:bg-pink-600 shadow-[0_0_15px_rgba(236,72,153,0.5)] hover:shadow-[0_0_25px_rgba(236,72,153,0.8)] transition-all">Pink Neon</Button>`,
    category: "neon"
  },
  {
    id: "neon-purple",
    title: "Purple Neon",
    description: "A button with a purple neon glow effect.",
    preview: <Button className="bg-purple-500 hover:bg-purple-600 shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] transition-all">Purple Neon</Button>,
    code: `<Button className="bg-purple-500 hover:bg-purple-600 shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] transition-all">Purple Neon</Button>`,
    category: "neon"
  },
  {
    id: "neon-pulse",
    title: "Pulsing Neon",
    description: "A button with a pulsing neon glow effect.",
    preview: <Button className="animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.5)]">Pulsing Neon</Button>,
    code: `<Button className="animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.5)]">Pulsing Neon</Button>`,
    category: "neon"
  },
  {
    id: "neon-red",
    title: "Red Neon",
    description: "A button with a red neon glow effect.",
    preview: <Button className="bg-red-500 hover:bg-red-600 shadow-[0_0_15px_rgba(239,68,68,0.5)] hover:shadow-[0_0_25px_rgba(239,68,68,0.8)] transition-all">Red Neon</Button>,
    code: `<Button className="bg-red-500 hover:bg-red-600 shadow-[0_0_15px_rgba(239,68,68,0.5)] hover:shadow-[0_0_25px_rgba(239,68,68,0.8)] transition-all">Red Neon</Button>`,
    category: "neon"
  },
  {
    id: "neon-rainbow",
    title: "Rainbow Neon",
    description: "A button with a rainbow neon glow effect.",
    preview: <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] transition-all">Rainbow Neon</Button>,
    code: `<Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] transition-all">Rainbow Neon</Button>`,
    category: "neon"
  },
  {
    id: "neon-text-pulse",
    title: "Pulsing Text",
    description: "A button with pulsing neon text.",
    preview: <Button variant="ghost" className="text-blue-500 animate-pulse">Pulsing Text</Button>,
    code: `<Button variant="ghost" className="text-blue-500 animate-pulse">Pulsing Text</Button>`,
    category: "neon"
  }
];

const Buttons = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState(category || "plain");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedCodeId, setExpandedCodeId] = useState<string | null>(null);

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

  // Toggle code view
  const toggleCodeView = (id: string) => {
    setExpandedCodeId(expandedCodeId === id ? null : id);
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
                <CardContent className={`px-6 pt-4 pb-0 ${expandedCodeId === button.id ? 'block' : 'hidden'}`}>
                  <div className="bg-muted rounded-md p-3 overflow-x-auto">
                    <pre className="text-sm text-foreground"><code>{button.code}</code></pre>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between gap-2 p-6">
                  <Button 
                    variant="outline" 
                    onClick={() => toggleCodeView(button.id)}
                    className="flex-1"
                  >
                    <Code className="mr-2 h-4 w-4" />
                    {expandedCodeId === button.id ? (
                      <>
                        <ChevronUp className="mr-2 h-4 w-4" />
                        Hide Code
                      </>
                    ) : (
                      <>
                        <ChevronDown className="mr-2 h-4 w-4" />
                        View Code
                      </>
                    )}
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
