import { Element } from "react-scroll";

function Home() {
  return (
    <Element id="home" name="home" className="home-bg min-h-screen">
      <div className="flex h-screen w-full flex-col items-center justify-center gap-6">
        <h1 className="text-3xl">Welcome</h1>
        <p className="text-5xl font-[700]">I'm a Web/Software Developer</p>
        <p className="text-2xl">based in Ukraine.</p>
      </div>
    </Element>
  );
}

export default Home;
