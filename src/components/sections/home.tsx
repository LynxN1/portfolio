import { Element } from "react-scroll";
import AnimatedText from "@/components/home/animated-text";

function Home() {
  return (
    <Element id="home" name="home" className="home-bg min-h-screen">
      <div className="flex h-screen w-full flex-col items-center justify-center gap-6 text-center">
        <h1 className="text-2xl lg:text-3xl">Welcome👋</h1>
        <p className="text-2xl font-[700] lg:text-4xl">
          I'm a <AnimatedText words={["Web", "Software"]} /> Developer
        </p>
        <p className="text-xl lg:text-2xl">based in Ukraine.</p>
      </div>
    </Element>
  );
}

export default Home;
