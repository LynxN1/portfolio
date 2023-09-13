import SectionLayout from "@/components/section-layout";
import SectionHeading from "@/components/section-heading";
import Button from "@/components/ui/button";

function AboutMe() {
  return (
    <SectionLayout name="about" dark>
      <SectionHeading text="Know Me More" backgroundText="About Me" />
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 flex flex-col gap-4">
          <h1 className="text-2xl font-[600]">
            I'm <span className="text-highlight">Lynx1</span>, a Web Developer
          </h1>
          <p className="opacity-50">
            I specialize in creating dynamic and creative web applications using modern technologies
            like HTML/CSS, TypeScript, React, and Next.js.
          </p>
          <p className="opacity-50">
            When I write code, my goal is to follow the best practices and create code that looks
            nice, is easy to read, and works well. I think that having well-organized code is really
            important for making projects successful and working effectively with a team.
          </p>
          <p className="opacity-50">
            Outside of coding, I have a passion for running and enjoy spending time in nature. I'm
            also enthusiastic about exploring new tools and technologies related to web development.
          </p>
          <p className="opacity-50">
            I'm always open to new opportunities and ready to engage in exciting projects where I
            can apply my skills and learn new ones.
          </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-3">
          <ul className="about-info text-lg">
            <li>
              <span className="font-[800]">Name:</span> Vladyslav Lopuha
            </li>
            <li>
              <span className="font-[800]">Email:</span> shadowtruddy@gmail.com
            </li>
            <li>
              <span className="font-[800]">Age:</span> 23
            </li>
            <li>
              <span className="font-[800]">From:</span> Kyiv, Ukraine
            </li>
          </ul>
          <Button>Download CV</Button>
        </div>
      </div>
    </SectionLayout>
  );
}

export default AboutMe;
