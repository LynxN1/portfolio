import { cn } from "@/lib/utils";
import { Element } from "react-scroll";

function SectionLayout({
  children,
  name,
  dark = false,
}: {
  children: React.ReactNode;
  name: string;
  dark?: boolean;
}) {
  return (
    <Element id={name} name={name} className={cn("bg-gray-800 py-28", { "bg-gray-900": dark })}>
      <div className="px-12">{children}</div>
    </Element>
  );
}

export default SectionLayout;
