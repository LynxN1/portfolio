import SectionLayout from "@/components/section-layout";
import Button from "@/components/ui/button";

function AboutMe() {
  return (
    <SectionLayout name="about" dark>
      <SectionLayout.Heading text="Know Me More" backgroundText="About Me" />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        <div className="col-span-3 flex flex-col gap-4 text-center lg:text-start">
          <h1 className="text-2xl font-[600]">
            I'm <span className="text-highlight">Lynx1</span>, a Web Developer
          </h1>
          <p className="opacity-50">
            I specialize in creating full-stack web applications, dynamic and creative solutions
            using modern technologies like TypeScript, React, Next.js, Astro.js and various backend
            technologies.
          </p>
          <p className="opacity-50">
            My code is all about best practices, clean aesthetics, and functionality. I believe
            well-organized code is key for project success and team collaboration.
          </p>
          <p className="opacity-50">Beyond programming I'm passionate about active recreation.</p>
          <p className="opacity-50">
            I'm always open to new opportunities and ready to engage in exciting projects where I
            can apply my skills and learn new ones.
          </p>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-center gap-3 lg:items-end">
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <ul className="about-info text-center text-lg lg:text-start">
              <li>
                <span className="font-[800]">Name:</span> Vladyslav Skrynnyk
              </li>
              <li>
                <span className="font-[800]">Email:</span> skr.vladyslav99@gmail.com
              </li>
              <li>
                <span className="font-[800]">Age:</span> 24
              </li>
              <li>
                <span className="font-[800]">From:</span> Kyiv, Ukraine
              </li>
            </ul>
            <Button>Download CV</Button>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default AboutMe;
