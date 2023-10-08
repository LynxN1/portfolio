import photo from "@/assets/photo2.jpg";
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import { BiLogoLinkedin, BiLogoDiscordAlt } from "react-icons/bi";
import { Link } from "react-scroll";
import { SECTIONS } from "@/lib/data";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

function Navigation() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <aside className="block h-[60px] w-full bg-black lg:h-screen lg:w-[300px]">
      <div className="hidden lg:flex lg:h-full lg:flex-col lg:justify-between lg:p-5 lg:text-center">
        <div className="flex flex-col items-center gap-2">
          <div className="relative aspect-square w-full overflow-hidden rounded-full border-8 border-indigo-950">
            <img className="h-full w-full object-cover" src={photo} alt="photo" />
          </div>
          <h1 className="text-xl font-[500]">Vladyslav Lopuha</h1>
          <span className="text-sm opacity-60">@Lynx1</span>
        </div>

        <ul className="flex flex-col gap-4">
          {SECTIONS.map((section) => {
            return (
              <li key={section.id}>
                <Link
                  containerId="sectionsContainer"
                  to={section.id}
                  smooth
                  duration={500}
                  className="cursor-pointer select-none duration-200 hover:text-highlight"
                >
                  {section.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex justify-center gap-4">
          <a
            href="https://discordapp.com/users/346916032633503745"
            target="_blank"
            className="cursor-pointer text-white opacity-80 duration-200 hover:text-[#5865F2] hover:opacity-100"
          >
            <BiLogoDiscordAlt className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com/lynx1qq"
            target="_blank"
            className="cursor-pointer text-white opacity-80 duration-200 hover:text-[#00acee] hover:opacity-100"
          >
            <AiOutlineTwitter className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/lynx1"
            target="_blank"
            className="cursor-pointer text-white opacity-80 duration-200 hover:text-[#0072b1] hover:opacity-100"
          >
            <BiLogoLinkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/LynxN1"
            target="_blank"
            className="cursor-pointer text-white opacity-80 duration-200 hover:opacity-100"
          >
            <AiFillGithub className="h-5 w-5" color="white" />
          </a>
        </div>
      </div>
      <div className="flex h-full w-full items-center justify-end px-4 lg:hidden">
        <div
          className="flex w-[35px] cursor-pointer flex-col gap-2"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <span className="h-0.5 bg-white" />
          <span className="h-0.5 w-3/4 bg-white" />
          <span className="h-0.5 w-1/2 bg-white" />
        </div>
        <motion.div
          className={cn("fixed left-0 top-[60px] z-20 hidden h-screen w-full", {
            block: mobileMenu,
          })}
          animate={{
            backdropFilter: mobileMenu ? "blur(5px)" : "blur(0px)",
          }}
        />
        <motion.div
          className="fixed top-0 z-50 h-screen w-3/4 bg-black"
          animate={{
            left: mobileMenu ? "-0%" : "-100%",
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        >
          <div className="flex h-full flex-col justify-between px-10 py-4 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="relative aspect-square max-w-[200px] overflow-hidden rounded-full border-8 border-indigo-950">
                <img className="object-cover" src={photo} alt="photo" />
              </div>
              <h1 className="text-xl font-[500]">Vladyslav Lopuha</h1>
              <span className="text-md opacity-60">@Lynx1</span>
            </div>

            <ul className="flex flex-col gap-6 text-2xl">
              {SECTIONS.map((section) => {
                return (
                  <li key={section.id}>
                    <Link
                      containerId="sectionsContainer"
                      to={section.id}
                      smooth
                      duration={500}
                      className="cursor-pointer select-none duration-200 hover:text-highlight"
                    >
                      {section.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex justify-center gap-4">
              <a
                href="https://discordapp.com/users/346916032633503745"
                target="_blank"
                className="cursor-pointer text-white opacity-80 duration-200 hover:text-[#5865F2] hover:opacity-100"
              >
                <BiLogoDiscordAlt className="h-8 w-8" />
              </a>
              <a
                href="https://twitter.com/lynx1qq"
                target="_blank"
                className="cursor-pointer text-white opacity-80 duration-200 hover:text-[#00acee] hover:opacity-100"
              >
                <AiOutlineTwitter className="h-8 w-8" />
              </a>
              <a
                href="https://linkedin.com/in/lynx1"
                target="_blank"
                className="cursor-pointer text-white opacity-80 duration-200 hover:text-[#0072b1] hover:opacity-100"
              >
                <BiLogoLinkedin className="h-8 w-8" />
              </a>
              <a
                href="https://github.com/LynxN1"
                target="_blank"
                className="cursor-pointer text-white opacity-80 duration-200 hover:opacity-100"
              >
                <AiFillGithub className="h-8 w-8" color="white" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </aside>
  );
}

export default Navigation;
