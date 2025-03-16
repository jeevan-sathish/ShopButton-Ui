
import { useParams } from "react-router-dom";
import { useState } from "react";

const Buttons = () => {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category || "plain");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Button Collection</h1>
      <p className="text-muted-foreground mb-8">
        Browse our collection of beautiful button styles. Select a category from the sidebar.
      </p>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar placeholder */}
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
        
        {/* Main content area */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder for button cards */}
            <div className="border rounded-lg p-6 flex flex-col">
              <div className="flex justify-center items-center mb-6 h-32 bg-muted/30 rounded-md">
                <span className="text-sm text-muted-foreground">Button Preview</span>
              </div>
              <h3 className="font-medium mb-2">Button Title</h3>
              <p className="text-sm text-muted-foreground mb-4">Short description of the button style.</p>
              <div className="mt-auto">
                <button className="w-full bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium hover:bg-primary/90">
                  View Code
                </button>
              </div>
            </div>
            
            {/* Add more placeholder cards as needed */}
            <div className="border rounded-lg p-6 flex flex-col">
              <div className="flex justify-center items-center mb-6 h-32 bg-muted/30 rounded-md">
                <span className="text-sm text-muted-foreground">Button Preview</span>
              </div>
              <h3 className="font-medium mb-2">Button Title</h3>
              <p className="text-sm text-muted-foreground mb-4">Short description of the button style.</p>
              <div className="mt-auto">
                <button className="w-full bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium hover:bg-primary/90">
                  View Code
                </button>
              </div>
            </div>
            
            <div className="border rounded-lg p-6 flex flex-col">
              <div className="flex justify-center items-center mb-6 h-32 bg-muted/30 rounded-md">
                <span className="text-sm text-muted-foreground">Button Preview</span>
              </div>
              <h3 className="font-medium mb-2">Button Title</h3>
              <p className="text-sm text-muted-foreground mb-4">Short description of the button style.</p>
              <div className="mt-auto">
                <button className="w-full bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium hover:bg-primary/90">
                  View Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
