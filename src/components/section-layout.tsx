import { cn } from "@/lib/utils";
import { Element } from "react-scroll";

function SectionLayout({
  children,
  name,
  dark,
}: {
  children: React.ReactNode;
  name: string;
  dark?: boolean;
}) {
  return (
    <Element
      id={name}
      name={name}
      className={cn("bg-gray-800 py-10 lg:py-24", { "bg-gray-900": dark })}
    >
      <div className="px-4 xl:px-32">{children}</div>
    </Element>
  );
}

SectionLayout.Heading = ({ text, backgroundText }: { text: string; backgroundText: string }) => {
  return (
    <div className="relative mb-16 flex items-center justify-center text-center">
      <h1 className="section-heading relative z-20 text-3xl font-[800] lg:text-4xl">{text}</h1>
      <span className="absolute z-10 text-[70px] font-[800] uppercase tracking-wider opacity-[0.03] lg:text-[102px]">
        {backgroundText}
      </span>
    </div>
  );
};

export default SectionLayout;
