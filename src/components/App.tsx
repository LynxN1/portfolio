import AboutMe from "./sections/about-me";
import Home from "./sections/home";
import Portfolio from "./sections/portfolio";
import Resume from "./sections/resume";
import Sidebar from "./sidebar";

function App() {
  return (
    <div className="ml-[250px] flex">
      <Sidebar />

      <div id="sectionsContainer" className="relative max-h-screen w-full overflow-y-auto">
        <Home />
        <AboutMe />
        <Resume />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
