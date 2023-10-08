import AboutMe from "@/components/sections/about-me";
import Home from "@/components/sections/home";
import Portfolio from "@/components/sections/portfolio";
import Resume from "@/components/sections/resume";
import Navigation from "@/components/navigation";

function App() {
  return (
    <div className="flex flex-col lg:flex-row">
      <Navigation />

      <main id="sectionsContainer" className="relative max-h-screen w-full overflow-y-auto">
        <Home />
        <AboutMe />
        <Resume />
        <Portfolio />
      </main>
    </div>
  );
}

export default App;
