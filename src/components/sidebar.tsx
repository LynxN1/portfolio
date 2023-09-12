import photo from "@/assets/photo.jpg";
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import { BiLogoLinkedin, BiLogoDiscordAlt } from "react-icons/bi";
import { Link } from "react-scroll";
import { SECTIONS } from "@/lib/data";

function Sidebar() {
  return (
    <aside className="absolute left-0 top-0 h-screen w-[250px]">
      <div className="flex h-full flex-col justify-between p-5 text-center">
        <div className="flex flex-col items-center gap-2">
          <div className="relative aspect-square w-full overflow-hidden rounded-full border-8 border-indigo-950">
            <img className="object-cover" src={photo} alt="photo" />
          </div>
          <h1 className="text-xl font-[500]">Vladyslav Lopuha</h1>
          <span className="text-sm opacity-60">@Lynx1</span>
        </div>

        <ul className="flex flex-col gap-4">
          {SECTIONS.map((section) => {
            return (
              <li
                key={section.id}
                className="cursor-pointer select-none duration-200 hover:text-highlight"
              >
                <Link containerId="sectionsContainer" to={section.id} smooth duration={500}>
                  {section.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="cursor-pointer text-white opacity-80 duration-200 hover:text-[#5865F2] hover:opacity-100"
          >
            <BiLogoDiscordAlt className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="cursor-pointer text-white opacity-80 duration-200 hover:text-[#00acee] hover:opacity-100"
          >
            <AiOutlineTwitter className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="cursor-pointer text-white opacity-80 duration-200 hover:text-[#0072b1] hover:opacity-100"
          >
            <BiLogoLinkedin className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="cursor-pointer text-white opacity-80 duration-200 hover:opacity-100"
          >
            <AiFillGithub className="h-5 w-5" color="white" />
          </a>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
