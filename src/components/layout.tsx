import { cn } from "@/lib/utils";
import { Element } from "react-scroll";

function Layout({
  children,
  name,
  dark = false,
}: {
  children: React.ReactNode;
  name: string;
  dark?: boolean;
}) {
  return (
    <Element name={name} className={cn("bg-gray-800 py-28", { "bg-gray-900": dark })}>
      <div className="min-h-screen px-6">{children}</div>
    </Element>
  );
}

export default Layout;
