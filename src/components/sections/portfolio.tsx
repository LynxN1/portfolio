import SectionLayout from "@/components/section-layout";
import img from "@/assets/Screenshot.png";
import img2 from "@/assets/Screenshot2.png";
import img3 from "@/assets/Screenshot3.png";
import img4 from "@/assets/Screenshot4.png";

function Portfolio() {
  return (
    <SectionLayout name="portfolio" dark>
      <SectionLayout.Heading text="My Work" backgroundText="Portfolio" />
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:flex-wrap lg:items-start lg:justify-center">
        <div className="group relative aspect-video w-full max-w-[650px] cursor-pointer select-none overflow-hidden">
          <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black/[.6] opacity-0 duration-200 group-hover:opacity-100">
            <p>Coming soon...</p>
          </div>
          <img
            className="h-full w-full object-cover duration-200 group-hover:scale-[1.05]"
            src={img}
            alt="screenshot"
            draggable={false}
          />
        </div>
        <div className="group relative aspect-video w-full max-w-[650px] cursor-pointer select-none overflow-hidden">
          <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black/[.6] opacity-0 duration-200 group-hover:opacity-100">
            <p>Coming soon...</p>
          </div>
          <img
            className="h-full w-full object-cover duration-200 group-hover:scale-[1.05]"
            src={img2}
            alt="screenshot"
            draggable={false}
          />
        </div>
        <div className="group relative aspect-video w-full max-w-[650px] cursor-pointer select-none overflow-hidden">
          <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black/[.6] opacity-0 duration-200 group-hover:opacity-100">
            <p>Coming soon...</p>
          </div>
          <img
            className="h-full w-full object-cover duration-200 group-hover:scale-[1.05]"
            src={img3}
            alt="screenshot"
            draggable={false}
          />
        </div>
        <div className="group relative aspect-video w-full max-w-[650px] cursor-pointer select-none overflow-hidden">
          <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black/[.6] opacity-0 duration-200 group-hover:opacity-100">
            <p>Coming soon...</p>
          </div>
          <img
            className="h-full w-full object-cover duration-200 group-hover:scale-[1.05]"
            src={img4}
            alt="screenshot"
            draggable={false}
          />
        </div>
      </div>
    </SectionLayout>
  );
}

export default Portfolio;
