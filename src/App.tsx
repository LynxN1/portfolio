import AboutMe from "@/components/sections/about-me";
import Home from "@/components/sections/home";
import Works from "@/components/sections/works";
import Resume from "@/components/sections/resume";
import Navigation from "@/components/navigation";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  return (
    <div className="flex flex-col lg:flex-row">
      <Navigation />

      <main id="sectionsContainer" className="relative max-h-screen w-full overflow-y-auto">
        <Home />
        <AboutMe />
        <Resume />
        <Works />
      </main>
    </div>
  );
}

export default App;
