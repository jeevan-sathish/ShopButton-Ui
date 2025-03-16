
import { Link } from "react-router-dom";

const Documentation = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Documentation</h1>
        
        <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
          <p className="lead text-muted-foreground mb-8">
            Welcome to the ShopButtons documentation. This guide will help you understand how to use our button components in your React projects.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Getting Started</h2>
          <p>
            ShopButtons provides a collection of ready-to-use button components for React applications. 
            Each button is designed to be easily integrated into your project with minimal configuration.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Installation</h3>
          <p>
            To use our buttons, simply copy the component code from the button you like and paste it into your React project.
            Make sure you have Tailwind CSS installed in your project for the styles to work correctly.
          </p>
          
          <div className="bg-muted rounded-md p-4 my-4">
            <pre><code>npm install tailwindcss</code></pre>
          </div>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Button Categories</h3>
          <p>
            We offer several categories of buttons to suit different needs and aesthetics:
          </p>
          
          <h4 className="text-lg font-medium mt-4 mb-2">Plain Buttons</h4>
          <p>
            Simple, clean buttons with minimal styling. Perfect for professional applications where subtlety is key.
          </p>
          <Link to="/buttons/plain" className="text-primary hover:underline">View Plain Buttons</Link>
          
          <h4 className="text-lg font-medium mt-4 mb-2">Colorful Buttons</h4>
          <p>
            Vibrant, eye-catching buttons with various color schemes. Great for call-to-action elements.
          </p>
          <Link to="/buttons/colorful" className="text-primary hover:underline">View Colorful Buttons</Link>
          
          <h4 className="text-lg font-medium mt-4 mb-2">Animated Buttons</h4>
          <p>
            Buttons with hover and click animations to enhance user interaction and provide visual feedback.
          </p>
          <Link to="/buttons/animated" className="text-primary hover:underline">View Animated Buttons</Link>
          
          <h4 className="text-lg font-medium mt-4 mb-2">Neon Buttons</h4>
          <p>
            Glowing, high-contrast buttons inspired by neon lights. Perfect for dark themes or nightlife-related content.
          </p>
          <Link to="/buttons/neon" className="text-primary hover:underline">View Neon Buttons</Link>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Usage</h2>
          <p>
            Each button component can be used as a standalone component in your React application. 
            Simply copy the code and paste it into your project. You can then customize the props as needed.
          </p>
          
          <div className="bg-muted rounded-md p-4 my-4">
            <pre><code>{`import { NeonButton } from './components/NeonButton';

function App() {
  return (
    <div>
      <NeonButton onClick={() => console.log('Button clicked')}>
        Click Me
      </NeonButton>
    </div>
  );
}`}</code></pre>
          </div>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Customization</h2>
          <p>
            All buttons can be customized by modifying the component props or changing the Tailwind CSS classes.
            Feel free to adjust colors, sizes, and other properties to match your design system.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Support</h2>
          <p>
            If you have any questions or need help with using our buttons, please feel free to reach out:
          </p>
          
          <ul className="list-disc pl-6 my-4">
            <li>Email: <a href="mailto:sathishjeevan2004@gmail.com" className="text-primary hover:underline">sathishjeevan2004@gmail.com</a></li>
            <li>GitHub: <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub Repository</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
