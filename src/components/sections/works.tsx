import SectionLayout from "@/components/section-layout";
import { WORKS } from "@/lib/data";
import Work from "@/components/works/work";

function Portfolio() {
  return (
    <SectionLayout name="works" dark>
      <SectionLayout.Heading text="Recent Works" backgroundText="Experience" />
      <div className="grid grid-cols-1 items-center justify-center gap-8 lg:grid-cols-2 lg:items-start lg:justify-center">
        {WORKS.map((work) => (
          <Work name={work.name} assets={work.assets} />
        ))}
      </div>
    </SectionLayout>
  );
}

export default Portfolio;
